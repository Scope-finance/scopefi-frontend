import { useState } from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import SCOPELOGO from "../../assets/scope.svg";
import PORTFOLIOICON from "../../assets/portfoliolight.svg";
import PORTFOLIO from "../../assets/portfolio.svg";
import MARKETICON from "../../assets/marketlight.svg";
import MARKET from "../../assets/market.svg";
import BUY from "../../assets/buy.svg";
import STAKE from "../../assets/stake.svg";

const Navbar = () => {
  const [portfoliohover, setPortfoliohover] = useState(false);
  const [markethover, setMarketHover] = useState(false);
  return (
    <Box>
      <Flex fontFamily='jakarta' minH='100vh' flex='1'>
        <Flex bgColor='#0E162F' flex='0.2'>
          <Flex w='100%' flexDirection='column'>
            <Flex mt={5} mb={{ md: 24 }} ml={{ base: 10, md: 5 }}>
              <Img src={SCOPELOGO} />
            </Flex>
            <Flex
              onMouseLeave={() => setPortfoliohover(false)}
              onMouseEnter={() => setPortfoliohover(true)}
              cursor='pointer'
              w='100%'
              color={portfoliohover ? "#2BA765" : "none"}
              bgColor={portfoliohover ? "#092A33" : "none"}
            >
              <Flex ml={{ base: 10, md: 5 }} py={{ md: 3 }} alignItems='center'>
                <Img
                  mr={1}
                  w={{ md: "19px" }}
                  h={{ md: "14px" }}
                  src={portfoliohover ? PORTFOLIO : PORTFOLIOICON}
                />
                <Text fontSize={{ base: "14px", md: "14px" }}>Portfolio</Text>
              </Flex>
            </Flex>
            <Flex
              onMouseLeave={() => setMarketHover(false)}
              onMouseEnter={() => setMarketHover(true)}
              cursor='pointer'
              bgColor={markethover ? "#092A33" : "none"}
              color={markethover ? "#2BA765" : "none"}
              mb={20}
            >
              <Flex ml={{ base: 10, md: 5 }} py={{ md: 3 }} alignItems='center'>
                <Img
                  mr={1}
                  w={{ md: "19px" }}
                  h={{ md: "14px" }}
                  src={markethover ? MARKET : MARKETICON}
                />
                <Text fontSize={{ base: "14px", md: "14px" }}>Market</Text>
              </Flex>
            </Flex>
            <Text
              color='#7D92B5'
              fontSize={{ base: "12px", md: "12px" }}
              ml={{ base: 10, md: 5 }}
            >
              Coming soon
            </Text>
            <Flex
              cursor='pointer'
              ml={{ base: 10, md: 5 }}
              py={{ md: 3 }}
              alignItems='center'
            >
              <Img mr={1} w={{ md: "19px" }} h={{ md: "14px" }} src={BUY} />
              <Text color='#5D77A2' fontSize={{ base: "14px", md: "14px" }}>
                Buy with Fiat
              </Text>
            </Flex>
            <Flex
              cursor='pointer'
              ml={{ base: 10, md: 5 }}
              py={{ md: 3 }}
              alignItems='center'
            >
              <Img mr={1} w={{ md: "19px" }} h={{ md: "14px" }} src={STAKE} />
              <Text color='#5D77A2' fontSize={{ base: "14px", md: "14px" }}>
                Pools
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex bgColor='#00091F' flex='0.8'></Flex> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
