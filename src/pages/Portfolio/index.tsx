import { useState, useEffect } from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import ConnectWallet from "../../components/Connect/ConnectWallet";
import Navbar from "../../components/dashboard/Navbar";
import SCOPELOGO from "../../assets/scope.svg";
import PORTFOLIOICON from "../../assets/portfoliolight.svg";
import PORTFOLIO from "../../assets/portfolio.svg";
import MARKETICON from "../../assets/marketlight.svg";
import MARKET from "../../assets/market.svg";
import BUY from "../../assets/buy.svg";
import STAKE from "../../assets/stake.svg";
import Portfolio from "../../components/portfolio/Portfolio";
import Market from "../../components/portfolio/Market";
import { useWeb3React } from "@web3-react/core";
import { platformContract } from "../../utils/Contract";
import { useAssets } from "../../hooks/useAssets";

const Dashboard = () => {
  const [portfoliohover, setPortfoliohover] = useState(false);
  const [markethover, setMarketHover] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");
  const { account, library } = useWeb3React();
  const { assets } = useAssets();

  console.log(assets);

  //   useEffect(() => {
  //     const load = async () => {
  //       const contract = await platformContract(
  //         "0xDC5c73E8243378B3208cAb9e1247bDB4B0a99ec6",
  //         library
  //       );
  //     };

  //     load();
  //   });

  return (
    <Box>
      <Flex fontFamily='jakarta' minH='100vh' flex='1'>
        <Flex bgColor='#0E162F' flex='0.2'>
          <Flex w='100%' flexDirection='column'>
            <Flex mt={5} mb={{ md: 24 }} ml={{ base: 10, md: 5 }}>
              <Img src={SCOPELOGO} />
            </Flex>
            <Flex
              onClick={() => setActiveSection("portfolio")}
              onMouseLeave={() => setPortfoliohover(false)}
              onMouseEnter={() => setPortfoliohover(true)}
              cursor='pointer'
              w='100%'
              color={portfoliohover ? "#2BA765" : "none"}
              bgColor={
                portfoliohover
                  ? "#092A33"
                  : activeSection === "portfolio"
                  ? "#092A33"
                  : "none"
              }
            >
              <Flex ml={{ base: 10, md: 5 }} py={{ md: 3 }} alignItems='center'>
                <Img
                  mr={1}
                  w={{ md: "19px" }}
                  h={{ md: "14px" }}
                  src={
                    portfoliohover
                      ? PORTFOLIO
                      : activeSection === "portfolio"
                      ? PORTFOLIO
                      : PORTFOLIOICON
                  }
                />
                <Text
                  color={
                    portfoliohover
                      ? "#2BA765"
                      : activeSection === "portfolio"
                      ? "#2BA765"
                      : "none"
                  }
                  fontSize={{ base: "14px", md: "14px" }}
                >
                  Portfolio
                </Text>
              </Flex>
            </Flex>
            <Flex
              onMouseLeave={() => setMarketHover(false)}
              onMouseEnter={() => setMarketHover(true)}
              cursor='pointer'
              bgColor={
                markethover
                  ? "#092A33"
                  : activeSection === "market"
                  ? "#092A33"
                  : "none"
              }
              color={markethover ? "#2BA765" : "none"}
              mb={20}
              onClick={() => setActiveSection("market")}
            >
              <Flex ml={{ base: 10, md: 5 }} py={{ md: 3 }} alignItems='center'>
                <Img
                  mr={1}
                  w={{ md: "19px" }}
                  h={{ md: "14px" }}
                  src={
                    markethover
                      ? MARKET
                      : activeSection === "market"
                      ? MARKET
                      : MARKETICON
                  }
                />
                <Text
                  color={
                    markethover
                      ? "#2BA765"
                      : activeSection === "market"
                      ? "#2BA765"
                      : "none"
                  }
                  fontSize={{ base: "14px", md: "14px" }}
                >
                  Market
                </Text>
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
        <Flex
          bgColor='#00091F'
          flexDirection='column'
          px={{ base: 10 }}
          flex='0.8'
        >
          <Flex
            w='100%'
            mr={{ md: 5 }}
            py={{ md: 5 }}
            justifyContent='flex-end'
          >
            <ConnectWallet />
          </Flex>
          <Box display={activeSection === "portfolio" ? undefined : "none"}>
            <Portfolio assets={assets} />
          </Box>

          <Box display={activeSection === "market" ? undefined : "none"}>
            <Market assets={assets} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
