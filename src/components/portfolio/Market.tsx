import { Flex, Text, Box, Img, Divider, useDisclosure } from "@chakra-ui/react";
import BITCOINICON from "../../assets/bitcoin.svg";
import ETHICON from "../../assets/eth.svg";
import BNB from "../../assets/bnb.svg";
import FTM from "../../assets/ftm.svg";
import TradeModal from "../modal/TradeModal";
import { useState } from "react";

interface MarketProps {
  assets: Array<{
    assetSymbol: string;
    assetName: string;
    marketPrice: number;
    scopePrice: number;
    address: any;
    balance: string;
  }>;
}

const Market = ({ assets }: MarketProps) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setisOpen] = useState(false);
  const [openedAsset, setOpenedAsset] = useState<{
    assetSymbol: string;
    assetName: string;
    marketPrice: number;
    scopePrice: number;
    address: any;
  }>({
    assetName: "",
    assetSymbol: "",
    marketPrice: 0,
    scopePrice: 0,
    address: "",
  });
  const marketItems = [
    {
      asset: ["sBTC", "wrapped Bitcoin"],
      price: "44,800.00",
      marketPrice: "44,320.88",
      premium: "10",
      liquidity: "100,000",
    },
    {
      asset: ["sETH", "wrapped Ethereum"],
      price: "3,100.00",
      marketPrice: "3,300.88",
      premium: "10",
      liquidity: "82,000",
    },
    {
      asset: ["sBNB", "wrapped Binance coin"],
      price: "410.00",
      marketPrice: "440.88",
      premium: "10",
      liquidity: "90,000",
    },
    {
      asset: ["sFTM", "wrapped Fantom"],
      price: "1.35.00",
      marketPrice: "1.45.88",
      premium: "10",
      liquidity: "20,000",
    },
  ];
  return (
    <Flex fontFamily='jakarta' flexDirection='column'>
      <Flex flexDirection='column'>
        <Text
          fontSize='35px'
          fontFamily='jakarta-bold'
          color='#EFF1F6'
          fontWeight='bold'
        >
          Market
        </Text>
        <Text fontFamily='jakarta' color='#9EAEC7' fontSize='14px'>
          Buy and sell assets here
        </Text>

        <Flex mt={{ base: 10 }} flexDirection='column'>
          <Flex>
            <Flex
              borderRadius='7px'
              bgColor='#09292D'
              p={{ base: 3 }}
              px={{ base: 6 }}
            >
              <Text
                color='#55C388'
                fontWeight='bold'
                fontSize='14px'
                fontFamily='jakarta-bold'
              >
                Crypto
              </Text>
            </Flex>
            <Flex
              bgColor='#060E25'
              borderRadius='7px'
              p={{ base: 3 }}
              px={{ base: 6 }}
              mx={{ base: 3 }}
            >
              <Text color='#4A5F82' fontSize='14px' fontFamily='jakarta-bold'>
                Stocks
              </Text>
            </Flex>
            <Flex
              bgColor='#060E25'
              borderRadius='7px'
              p={{ base: 3 }}
              px={{ base: 6 }}
            >
              <Text color='#4A5F82' fontSize='14px' fontFamily='jakarta-bold'>
                Natural resources
              </Text>
            </Flex>
          </Flex>
          <Box
            p={{ base: 10 }}
            mt={{ base: 5 }}
            borderRadius='20px'
            bgColor='#0E162F'
          >
            <Flex flex='1' justifyContent='space-between'>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Asset
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Price(on Scope)
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Market Price
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Premium
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Liquidity
                </Text>
              </Flex>
            </Flex>

            {assets?.map((item) => (
              <Flex flexDirection='column' mt={5}>
                <Flex
                  alignItems='center'
                  justifyContent='space-between'
                  flex='1'
                  w='100%'
                >
                  <Flex
                    cursor='pointer'
                    onClick={() => {
                      setisOpen(true);
                      setOpenedAsset(item);
                    }}
                    w='100%'
                    flex={{ base: "0.2" }}
                    alignItems='center'
                  >
                    <Img
                      mr={1}
                      src={
                        item.assetSymbol === "sBTC"
                          ? BITCOINICON
                          : item.assetSymbol === "sETH"
                          ? ETHICON
                          : item.assetSymbol === "sBNB"
                          ? BNB
                          : item.assetSymbol === "sFTM"
                          ? FTM
                          : BITCOINICON
                      }
                    />
                    <Text mr={1} fontFamily='jakarta'>
                      {/* sBTC */}
                      {item.assetSymbol}
                    </Text>
                    <Text color='#9EAEC7' fontSize='12px'>
                      {item.assetName}
                    </Text>
                  </Flex>
                  <Flex
                    w='100%'
                    fontSize='14px'
                    color='#BEC9DA'
                    flex={{ base: "0.2" }}
                  >
                    <Text>${item.scopePrice}</Text>
                  </Flex>
                  <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                    <Text fontSize='14px'>${item.marketPrice}</Text>
                  </Flex>
                  <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                    <Text fontSize='14px'>10%</Text>
                  </Flex>
                  <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                    <Text fontSize='14px'>$10000</Text>
                  </Flex>
                </Flex>
                <Flex mt={2} w='100%' px={0} p={0}>
                  <Divider color='#253041' />
                </Flex>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Flex>
      <TradeModal
        isOpen={isOpen}
        onOpen={() => setisOpen(true)}
        onClose={() => setisOpen(false)}
        asset={openedAsset}
      />
    </Flex>
  );
};

export default Market;
