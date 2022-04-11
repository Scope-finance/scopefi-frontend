import { useState, useCallback } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Img,
  Input,
} from "@chakra-ui/react";
import USDC from "../../assets/usdc.svg";
import BTC from "../../assets/bitcoin.svg";
import ARROW from "../../assets/changearrow.svg";
import BOLDARROW from "../../assets/boldarrow.svg";
import { assetContract } from "../../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useAllowance } from "../../hooks/useAllowance";
import { erc20 } from "../../utils/Contract";
import { useBalances } from "../../hooks/useBalances";

interface TradeModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  asset: {
    assetSymbol: string;
    assetName: string;
    marketPrice: number;
    scopePrice: number;
    address: any;
  };
}

function TradeModal({ isOpen, onOpen, onClose, asset }: TradeModalProps) {
  const [buy, setBuy] = useState(true);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [firstInputOutput, setFirstInputOutput] = useState("");
  const [reload, setReload] = useState(false);
  const { account, library } = useWeb3React();
  const { enoughAllowance } = useAllowance({ reload, setReload });
  const { balance, balanceEnough } = useBalances({
    assetAddress: asset.address,
    inputValue: secondInputValue,
  });

  console.log(balance, balanceEnough);

  const handleBuyAsset = async () => {
    try {
      const contract = await assetContract(asset.address, library);

      console.log(contract);

      console.log(asset.address);

      const buy = await contract.purchaseAssets(
        asset.assetName,
        ethers.utils.parseEther(firstInputValue)
      );

      console.log(buy);
      const { confirmations } = buy.wait();
      if (confirmations > 1) {
        alert("success");
      }

      //   const { confirmations } = buy.wait(1);
      //   console.log(confirmations);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSellAsset = async () => {
    try {
      const contract = await assetContract(asset.address, library);
      const formattedInput = parseFloat(secondInputValue) * 1e18;

      const buy = await contract.sellAsset(
        asset.assetName,
        // formattedInput.toString()
        balance
      );

      console.log(buy);
      const { confirmations } = buy.wait();
      if (confirmations > 1) {
        alert("success");
      }

      //   const { confirmations } = buy.wait(1);
      //   console.log(confirmations);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateOutput = useCallback(
    (firstInputValue: string) => {
      if (firstInputValue) {
        const output = parseFloat(firstInputValue) / asset.marketPrice;
        console.log(output);
        setFirstInputOutput(output.toFixed(2));
      }
    },
    [firstInputValue]
  );

  const approveTokens = async () => {
    try {
      const token = await erc20(
        "0xbDf80c68E29697a2EB9893Eab8F3539305F135F2",
        library
      );
      const userBalance = await token.balanceOf(account);
      const formatted = userBalance.toString();
      const approveTotal = formatted + 4e18;
      const sendTransaction = await token.approve(
        "0x468F7Dd215CB47502B87c672cF20e9135014e02a",
        approveTotal,
        {
          from: account,
        }
      );

      console.log(sendTransaction);
      const { confirmations } = sendTransaction.wait(1);
      console.log(sendTransaction.confirmations);

      alert("success");
      setReload(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal size='sm' onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor='#0E162F'>
          <ModalBody py={{ base: 5 }}>
            <Flex justifyContent='space-between' flex='1'>
              <Flex
                cursor='pointer'
                justifyContent='center'
                bgColor={buy ? "#192139" : "#090F1F"}
                borderRadius='10px'
                p={{ base: 3 }}
                py={{ base: 2 }}
                flex='0.47'
                onClick={() => setBuy(true)}
              >
                <Text fontSize='14px' fontFamily='jakarta-bold'>
                  Buy
                </Text>
              </Flex>
              <Flex
                justifyContent='center'
                cursor='pointer'
                borderRadius='10px'
                p={{ base: 3 }}
                py={{ base: 2 }}
                flex='0.47'
                onClick={() => setBuy(false)}
                bgColor={!buy ? "#192139" : "#090F1F"}
              >
                <Text fontSize='14px' fontFamily='jakarta-bold'>
                  Sell
                </Text>
              </Flex>
            </Flex>

            {buy ? (
              <>
                <Flex mt={5} alignItems='center'>
                  <Img mr={1} w='30px' h='30px' src={USDC} />
                  <Text mr={1} fontSize='14px' color='#BEC9DA'>
                    USDC
                  </Text>
                  <Img src={ARROW} />
                </Flex>
                <Input
                  mt={2}
                  border='none'
                  bgColor='#1F2947'
                  placeholder='0'
                  value={firstInputValue}
                  onChange={(e) => {
                    setFirstInputValue(e.target.value);
                    handleUpdateOutput(e.target.value);
                  }}
                  _focus={{ border: "none" }}
                />
                <Flex my={5} justifyContent='center'>
                  <Flex borderRadius='50%' p={1} bgColor='#09292D'>
                    <Img src={BOLDARROW} />
                  </Flex>
                </Flex>
                <Flex mt={5} alignItems='center'>
                  <Img mr={1} w='30px' h='30px' src={BTC} />
                  <Text mr={1} fontSize='14px' color='#BEC9DA'>
                    {asset.assetName}
                  </Text>
                  <Img src={ARROW} />
                </Flex>
                <Input
                  mt={2}
                  border='none'
                  bgColor='#1F2947'
                  placeholder='0'
                  disabled
                  value={firstInputOutput}
                  _focus={{ border: "none" }}
                />
                {/* <Text
                  color='#9EAEC7'
                  fontFamily='jakarta'
                  fontSize='12px'
                  mt={5}
                >
                  Price:{" "}
                  <span style={{ color: "#BEC9DA" }}>40,000 USDC per sBTC</span>
                </Text>
                <Text
                  color='#9EAEC7'
                  my={1}
                  fontFamily='jakarta'
                  fontSize='12px'
                >
                  You'll receive:{" "}
                  <span style={{ color: "#BEC9DA" }}>1 sBTC</span>
                </Text>
                <Text color='#9EAEC7' fontFamily='jakarta' fontSize='12px'>
                  TxFee: <span style={{ color: "#BEC9DA" }}>1 USDC</span>
                </Text> */}
              </>
            ) : (
              <>
                <Flex mt={5} alignItems='center'>
                  <Img mr={1} w='30px' h='30px' src={BTC} />
                  <Text mr={1} fontSize='14px' color='#BEC9DA'>
                    {asset.assetName}
                  </Text>
                  <Img src={ARROW} />
                </Flex>
                <Input
                  mt={2}
                  border='none'
                  bgColor='#1F2947'
                  placeholder='0'
                  _focus={{ border: "none" }}
                  value={secondInputValue}
                  onChange={(e) => {
                    setSecondInputValue(e.target.value);
                  }}
                />

                <Flex my={5} justifyContent='center'>
                  <Flex borderRadius='50%' p={1} bgColor='#09292D'>
                    <Img src={BOLDARROW} />
                  </Flex>
                </Flex>

                <Flex mt={5} alignItems='center'>
                  <Img mr={1} w='30px' h='30px' src={USDC} />
                  <Text mr={1} fontSize='14px' color='#BEC9DA'>
                    USDC
                  </Text>
                  <Img src={ARROW} />
                </Flex>
                <Input
                  mt={2}
                  border='none'
                  bgColor='#1F2947'
                  placeholder='0'
                  _focus={{ border: "none" }}
                />

                {/* <Text
                  color='#9EAEC7'
                  fontFamily='jakarta'
                  fontSize='12px'
                  mt={5}
                >
                  Price:{" "}
                  <span style={{ color: "#BEC9DA" }}>40,000 USDC per sBTC</span>
                </Text>
                <Text
                  color='#9EAEC7'
                  my={1}
                  fontFamily='jakarta'
                  fontSize='12px'
                >
                  You'll receive:{" "}
                  <span style={{ color: "#BEC9DA" }}>1 sBTC</span>
                </Text>
                <Text color='#9EAEC7' fontFamily='jakarta' fontSize='12px'>
                  TxFee: <span style={{ color: "#BEC9DA" }}>1 USDC</span>
                </Text> */}
              </>
            )}

            {/* <>
              <Flex mt={5} alignItems='center'>
                <Img mr={1} w='30px' h='30px' src={USDC} />
                <Text mr={1} fontSize='14px' color='#BEC9DA'>
                  USDC
                </Text>
                <Img src={ARROW} />
              </Flex>
              <Input
                mt={2}
                border='none'
                bgColor='#1F2947'
                placeholder='0'
                _focus={{ border: "none" }}
              />
              <Flex my={5} justifyContent='center'>
                <Flex borderRadius='50%' p={1} bgColor='#09292D'>
                  <Img src={BOLDARROW} />
                </Flex>
              </Flex>
              <Flex mt={5} alignItems='center'>
                <Img mr={1} w='30px' h='30px' src={BTC} />
                <Text mr={1} fontSize='14px' color='#BEC9DA'>
                  Wrapped Bitcoin
                </Text>
                <Img src={ARROW} />
              </Flex>
              <Input
                mt={2}
                border='none'
                bgColor='#1F2947'
                placeholder='0'
                _focus={{ border: "none" }}
              />
              <Text color='#9EAEC7' fontFamily='jakarta' fontSize='12px' mt={5}>
                Price:{" "}
                <span style={{ color: "#BEC9DA" }}>40,000 USDC per sBTC</span>
              </Text>
              <Text color='#9EAEC7' my={1} fontFamily='jakarta' fontSize='12px'>
                You'll receive: <span style={{ color: "#BEC9DA" }}>1 sBTC</span>
              </Text>
              <Text color='#9EAEC7' fontFamily='jakarta' fontSize='12px'>
                TxFee: <span style={{ color: "#BEC9DA" }}>1 USDC</span>
              </Text>
            </> */}
          </ModalBody>
          <ModalFooter>
            <Flex display={buy ? undefined : "none"} w='100%'>
              <Button
                bgColor='#2BA765'
                color='white'
                w='100%'
                _hover={{ bgColor: "none", color: "none" }}
                _active={{ bgColor: "none", color: "none" }}
                onClick={
                  buy && enoughAllowance
                    ? () => handleBuyAsset()
                    : buy && !enoughAllowance
                    ? () => approveTokens()
                    : undefined
                }
              >
                <Text fontFamily='jakarta-bold' fontSize='14px'>
                  {buy && enoughAllowance && !firstInputValue
                    ? "Input a value"
                    : buy && enoughAllowance
                    ? `Buy ${asset.assetName} `
                    : buy && !enoughAllowance
                    ? "Approve Tokens"
                    : ""}
                </Text>
              </Button>
            </Flex>
            <Flex display={!buy ? undefined : "none"} w='100%'>
              <Button
                bgColor='#2BA765'
                color='white'
                w='100%'
                _hover={{ bgColor: "none", color: "none" }}
                _active={{ bgColor: "none", color: "none" }}
                onClick={() => handleSellAsset()}
              >
                <Text fontFamily='jakarta-bold' fontSize='14px'>
                  {!buy && balanceEnough
                    ? `Sell ${asset.assetName}`
                    : !secondInputValue
                    ? "Input a value"
                    : `Sell ${asset.assetName}`}
                </Text>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TradeModal;
