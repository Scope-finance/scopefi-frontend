import { Flex, Text, Box, Img, Divider } from "@chakra-ui/react";
import BITCOINICON from "../../assets/bitcoin.svg";
import ETHICON from "../../assets/eth.svg";

interface PortfolioProps {
  assets: Array<{
    assetSymbol: string;
    assetName: string;
    marketPrice: number;
    scopePrice: number;
    address: any;
    balance: string;
  }>;
}

const Portfolio = ({ assets }: PortfolioProps) => {
  return (
    <Flex fontFamily='jakarta' flexDirection='column'>
      <Flex flexDirection='column'>
        <Text
          fontSize='35px'
          fontFamily='jakarta-bold'
          color='#EFF1F6'
          fontWeight='bold'
        >
          Portfolio
        </Text>
        <Text fontFamily='jakarta' color='#9EAEC7' fontSize='14px'>
          view all the assets you own
        </Text>
        <Flex flexDirection='column' mb={{ base: 10 }} mt={{ base: 14 }}>
          <Text fontFamily='jakarta' color='#BEC9DA' fontSize='14px'>
            Total Value of Assets
          </Text>
          <Text
            fontWeight='bold'
            fontFamily='jakarta-bold'
            color='#9EAEC7'
            fontSize='35px'
          >
            $200
          </Text>
        </Flex>
        <Flex flexDirection='column'>
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
              <Flex flex={{ base: "0.4" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Asset
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Amount
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Value in dollars
                </Text>
              </Flex>
              <Flex flex={{ base: "0.2" }}>
                <Text fontSize='14px' color='#9EAEC7' fontWeight='bold'>
                  Price(on Scope)
                </Text>
              </Flex>
            </Flex>
            {assets.map((item) =>
              parseFloat(item.balance) > 0 ? (
                <Flex flexDirection='column' mt={5}>
                  <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    flex='1'
                    w='100%'
                  >
                    <Flex w='100%' flex={{ base: "0.4" }} alignItems='center'>
                      <Img mr={1} src={BITCOINICON} />
                      <Text mr={1} fontFamily='jakarta'>
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
                      <Text>{parseFloat(item.balance).toFixed(2)}</Text>
                    </Flex>
                    <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                      <Text fontSize='14px'>
                        $
                        {(parseFloat(item.balance) * item.marketPrice).toFixed(
                          2
                        )}
                      </Text>
                    </Flex>
                    <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                      <Text fontSize='14px'>
                        $
                        {(parseFloat(item.balance) * item.scopePrice).toFixed(
                          2
                        )}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex mt={2} w='100%' px={0} p={0}>
                    <Divider />
                  </Flex>
                </Flex>
              ) : null
            )}
            {/*             
            <Flex flexDirection='column' mt={5}>
              <Flex
                alignItems='center'
                justifyContent='space-between'
                flex='1'
                w='100%'
              >
                <Flex w='100%' flex={{ base: "0.4" }} alignItems='center'>
                  <Img mr={1} src={ETHICON} />
                  <Text mr={1} fontFamily='jakarta'>
                    sETH
                  </Text>
                  <Text color='#9EAEC7' fontSize='12px'>
                    wrapped Ethereum
                  </Text>
                </Flex>
                <Flex
                  w='100%'
                  fontSize='14px'
                  color='#BEC9DA'
                  flex={{ base: "0.2" }}
                >
                  <Text>1.0</Text>
                </Flex>
                <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                  <Text fontSize='14px'>$3,660.22</Text>
                </Flex>
                <Flex w='100%' color='#BEC9DA' flex={{ base: "0.2" }}>
                  <Text fontSize='14px'>$3,660.22</Text>
                </Flex>
              </Flex>
              <Flex mt={2} w='100%' px={0} p={0}>
                <Divider />
              </Flex>
            </Flex> */}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Portfolio;
