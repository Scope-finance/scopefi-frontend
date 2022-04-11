import { useRef, useEffect } from "react";
import { Box, Flex, Text, Img, Button, useMediaQuery } from "@chakra-ui/react";
import SCOPE from "../../assets/scope.svg";
import META from "../../assets/meta.svg";
import BITCOIN from "../../assets/bitcoin.svg";
import NETFLIX from "../../assets/netflix.svg";
import NORMALARROW from "../../assets/changearrow.svg";
import GREENARROW from "../../assets/greenarrow.svg";
import REDARROW from "../../assets/redarrow.svg";
import CLOCK from "../../assets/clock.svg";
import WORLD from "../../assets/world.svg";
import TRANSPARENCY from "../../assets/transparency.svg";
import FEMI from "../../assets/femi.svg";
import GODSWILL from "../../assets/godswill.svg";
import PHIDEL from "../../assets/phidel.svg";
import JAMES from "../../assets/james.svg";
import FOOTERLOGO from "../../assets/logofooter.svg";
import COPYRIGHT from "../../assets/copyright.svg";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";

const Index = () => {
  const [startTab] = useMediaQuery("(max-width: 950px)");
  const [endTab] = useMediaQuery("(min-width: 570px)");
  const [isMobile] = useMediaQuery("(max-width: 560px)");
  const [startSmallScreen] = useMediaQuery("(max-width: 1440px)");
  const [endSmallScrren] = useMediaQuery("(min-width: 1309px)");
  const { account } = useWeb3React();

  console.log(account);

  const scrollToRef = (ref: any) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  const teamRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <Box>
      <Box
        bg=' radial-gradient(
            40% 70% at 0% 40%,
            rgba(7, 184, 134, 0.15) 0%,
            rgba(7, 184, 134, 0) 70%
          ),
          radial-gradient(
            50% 80% at 80% 70%,
            rgba(7, 184, 134, 0.11) 0%,
            rgba(7, 184, 134, 0) 40%
          );'
        mb={startTab && endTab ? undefined : isMobile ? 40 : 60}
      >
        <Box
          mx={
            startTab && endTab
              ? 10
              : isMobile
              ? 5
              : startSmallScreen && endSmallScrren
              ? 16
              : 32
          }
          h={startTab && endTab ? "" : ""}
        >
          <Flex py={5} alignItems='center' justifyContent='space-between'>
            <Flex>
              <Img w={isMobile ? "120px" : undefined} src={SCOPE} />
            </Flex>
            <Flex alignItems='center'>
              <Text
                display={isMobile ? "none" : undefined}
                fontWeight='bold'
                mr={10}
                color='#BEC9DA'
                cursor='pointer'
                onClick={() => scrollToRef(teamRef)}
              >
                Team
              </Text>
              <Text
                display={isMobile ? "none" : undefined}
                fontWeight='bold'
                mr={10}
                color='#BEC9DA'
                cursor='pointer'
                onClick={() => scrollToRef(aboutRef)}
              >
                About Scope
              </Text>
              <Link to='/dashboard'>
                <Flex
                  bg='rgba(43, 167, 101, 0.2);'
                  borderRadius='7px'
                  py={3}
                  px={6}
                  fontSize={isMobile ? "14px" : undefined}
                  cursor='pointer'
                >
                  <Text fontWeight='bold' color='#55C388'>
                    Launch App
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
          <Flex
            mt={
              startTab && endTab
                ? 20
                : isMobile
                ? 20
                : startSmallScreen && endSmallScrren
                ? 24
                : 36
            }
            w='100%'
            flexDirection='column'
            justifyContent='center'
          >
            {startTab && endTab ? (
              <Text
                textAlign='center'
                color='#EFF1F6'
                fontWeight='bold'
                fontSize={"50px"}
                // fontFamily='jakarta-bold'
                lineHeight='1.2'
              >
                Skip the hefty bureaucracies,
                <br />
                Get <span style={{ color: "#3FD2D6" }}>easy</span> access to
                <br />
                financial assets
              </Text>
            ) : isMobile ? (
              <Text
                textAlign='center'
                color='#EFF1F6'
                fontWeight='bold'
                fontSize='23px'
                // fontFamily='jakarta-bold'
                lineHeight='1.2'
              >
                Skip the hefty bureaucracies,
                <br />
                Get <span style={{ color: "#3FD2D6" }}>easy</span> access to
                financial assets
              </Text>
            ) : (
              <Text
                textAlign='center'
                color='#EFF1F6'
                fontWeight='bold'
                fontSize={startTab && endTab ? "50px" : "80px"}
                // fontFamily='jakarta-bold'
                lineHeight='1.2'
              >
                Skip the hefty bureaucracies,
                <br />
                Get <span style={{ color: "#3FD2D6" }}>easy</span> access to
                financial assets
              </Text>
            )}
            {isMobile ? (
              <Text
                mt={startTab && endTab ? 10 : 14}
                fontSize='16px'
                textAlign='center'
                color='#BEC9DA'
              >
                Scope is a DeFi solution built on Meter. With Scope you can own
                any listed financial asset <br /> from any where across the
                globe.
              </Text>
            ) : (
              <Text
                mt={startTab && endTab ? 10 : 14}
                fontSize={
                  startTab && endTab ? "16px" : isMobile ? "16px" : "20px"
                }
                textAlign='center'
                color='#BEC9DA'
              >
                Scope is a DeFi solution built on Meter. With Scope you can own
                any listed
                <br /> financial asset from any where across the globe.
              </Text>
            )}

            <Flex
              flexDirection={isMobile ? "column" : undefined}
              mt={14}
              fontWeight='bold'
              justifyContent='center'
            >
              <Flex
                bgColor='#2BA765'
                px={20}
                py={3}
                mr={isMobile ? undefined : 10}
                borderRadius='7px'
                justifyContent={isMobile ? "center" : undefined}
                mb={isMobile ? 5 : undefined}
                cursor='pointer'
              >
                <Text color='#FFFFFF'>Use Scope</Text>
              </Flex>
              <Flex
                borderRadius='7px'
                justifyContent={isMobile ? "center" : undefined}
                bgColor='#092C39'
                px={20}
                py={3}
                cursor='pointer'
              >
                <Text color='#95ECBD'>How it works</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        bg={
          isMobile
            ? undefined
            : "radial-gradient(40% 70% at 20% 40%,rgba(7, 184, 134, 0.15) 0%,rgba(7, 184, 134, 0) 70%)"
        }
        mt={20}
        ref={aboutRef}
      >
        <Box
          mt={20}
          mx={
            startTab && endTab
              ? 10
              : isMobile
              ? 5
              : startSmallScreen && endSmallScrren
              ? 16
              : 32
          }
        >
          <Flex
            flex={startTab && endTab ? undefined : "1"}
            flexDirection={
              startTab && endTab ? "column" : isMobile ? "column" : undefined
            }
            justifyContent={startTab && endTab ? undefined : "space-between"}
          >
            <Flex
              mb={startTab && endTab ? 20 : undefined}
              mt={startTab && endTab ? 20 : undefined}
              flex={startTab && endTab ? undefined : "0.5"}
              flexDirection={startTab && endTab ? "column" : "column"}
              alignItems={startTab && endTab ? "center" : undefined}
            >
              <Flex justifyContent={isMobile ? "center" : undefined}>
                <Text
                  color='#EFF1F6'
                  fontSize={isMobile ? "35px" : "50px"}
                  fontWeight='bold'
                >
                  About <span style={{ color: "#53E9F9" }}>Scope</span>
                </Text>
              </Flex>
              {startTab && endTab ? (
                <Text
                  mt={10}
                  fontSize={startTab && endTab ? "30px" : "16px"}
                  color='#BEC9DA'
                >
                  Scope offers synthetic versions of real world assets by
                  imitating the prices of these real world assets. Get nonstop
                  access to your favorite financial assets 24/7.
                </Text>
              ) : isMobile ? (
                <Flex justifyContent='center'>
                  <Text
                    mt={10}
                    textAlign='center'
                    fontSize='14px'
                    color='#BEC9DA'
                  >
                    Scope offers synthetic versions of real world <br /> assets
                    by imitating the prices of these real world <br /> assets.
                    Get nonstop access to your favorite
                    <br /> financial assets 24/7.
                  </Text>
                </Flex>
              ) : (
                <Text
                  mt={10}
                  fontSize={startTab && endTab ? "30px" : "16px"}
                  color='#BEC9DA'
                >
                  Scope offers synthetic versions of real world assets by
                  imitating
                  <br /> the prices of these real world assets. Get nonstop
                  access to your
                  <br /> favorite financial assets 24/7.
                </Text>
              )}
              <Flex justifyContent={isMobile ? "center" : undefined}>
                <Flex
                  justifyContent='center'
                  borderRadius='7px'
                  mt={10}
                  w={startTab && endTab ? "100%" : isMobile ? "60%" : "20%"}
                  bgColor='#092C39'
                  px={4}
                  py={3}
                  mb={isMobile ? 10 : undefined}
                  cursor='pointer'
                  // mb={startTab && endTab ? 10 : undefined}
                >
                  <Text textAlign='center' fontWeight='bold' color='#95ECBD'>
                    Learn More
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flex='0.5' flexDirection='column'>
              <Flex
                bg='linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);'
                justifyContent='space-between'
                alignItems='center'
                px={isMobile ? 3 : 6}
                py={4}
                borderRadius='15px'
                flex='1'
              >
                <Flex
                  flex={startTab && endTab ? "0.3" : isMobile ? "0.25" : "0.25"}
                  alignItems='center'
                >
                  <Img w={isMobile ? "25px" : undefined} mr={2} src={META} />
                  <Text
                    fontWeight='bold'
                    fontSize={isMobile ? "12px" : "18px"}
                    color='#EFF1F6'
                  >
                    Meta<span style={{ visibility: "hidden" }}>ins</span>
                  </Text>
                </Flex>
                <Flex
                  flex={startTab && endTab ? "0.7" : isMobile ? "0.75" : "0.75"}
                  justifyContent='space-between'
                >
                  <Flex
                    flex={
                      startTab && endTab
                        ? undefined
                        : isMobile
                        ? undefined
                        : "0.3"
                    }
                    flexDirection='column'
                  >
                    <Text color='#7D92B5' fontSize='12px'>
                      Price
                    </Text>
                    <Text
                      fontSize={
                        isMobile
                          ? "12px"
                          : startSmallScreen && endSmallScrren
                          ? "12px"
                          : "14px"
                      }
                      fontWeight='bold'
                      color='#9EAEC7'
                    >
                      203.63 <span style={{ fontWeight: "normal" }}>USD</span>
                      <span style={{ visibility: "hidden" }}>ins</span>
                    </Text>
                  </Flex>
                  <Flex
                    flex={startTab && endTab ? undefined : "0.4"}
                    alignItems='center'
                    flexDirection='column'
                  >
                    <Flex alignItems='center'>
                      {isMobile ? (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price
                        </Text>
                      ) : (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price change(24hr)
                        </Text>
                      )}
                      <Img src={NORMALARROW} />
                    </Flex>
                    <Flex alignItems='center'>
                      <Text
                        fontSize={
                          isMobile
                            ? "14px"
                            : startSmallScreen && endSmallScrren
                            ? "12px"
                            : "14px"
                        }
                        fontWeight='bold'
                        color='#9EAEC7'
                      >
                        4.2<span style={{ fontWeight: "normal" }}>%</span>
                      </Text>
                      <Img src={GREENARROW} />
                    </Flex>
                  </Flex>
                  <Flex
                    bg='rgba(158, 174, 199, 0.2);'
                    borderRadius='7px'
                    px={isMobile ? 6 : 12}
                    py={2}
                  >
                    <Text fontWeight='bold' fontSize='14px' color='#EFF1F6'>
                      Buy
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                bg={
                  "linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);"
                }
                justifyContent='space-between'
                alignItems='center'
                px={isMobile ? 3 : 6}
                py={4}
                borderRadius='15px'
                flex='1'
                mt={isMobile ? 5 : 10}
              >
                <Flex
                  flex={startTab && endTab ? "0.3" : isMobile ? "0.25" : "0.25"}
                  alignItems='center'
                >
                  <Img w={isMobile ? "25px" : undefined} mr={2} src={BITCOIN} />
                  <Text
                    fontWeight='bold'
                    fontSize={isMobile ? "12px" : "18px"}
                    color='#EFF1F6'
                  >
                    Bitcoin
                  </Text>
                </Flex>
                <Flex
                  flex={startTab && endTab ? "0.7" : isMobile ? "0.75" : "0.75"}
                  justifyContent='space-between'
                >
                  <Flex
                    flex={
                      startTab && endTab
                        ? undefined
                        : isMobile
                        ? undefined
                        : "0.3"
                    }
                    flexDirection='column'
                  >
                    <Text color='#7D92B5' fontSize='12px'>
                      Price
                    </Text>
                    <Text
                      fontSize={
                        isMobile
                          ? "12px"
                          : startSmallScreen && endSmallScrren
                          ? "12px"
                          : "14px"
                      }
                      fontWeight='bold'
                      color='#9EAEC7'
                    >
                      40,881.63{" "}
                      <span style={{ fontWeight: "normal" }}>USD</span>
                    </Text>
                  </Flex>
                  <Flex
                    flex={startTab && endTab ? undefined : "0.4"}
                    alignItems='center'
                    flexDirection='column'
                  >
                    <Flex alignItems='center'>
                      {isMobile ? (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price
                        </Text>
                      ) : (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price change(24hr)
                        </Text>
                      )}
                      <Img src={NORMALARROW} />
                    </Flex>
                    <Flex alignItems='center'>
                      <Text
                        fontSize={
                          isMobile
                            ? "14px"
                            : startSmallScreen && endSmallScrren
                            ? "12px"
                            : "14px"
                        }
                        fontWeight='bold'
                        color='#9EAEC7'
                      >
                        0.59<span style={{ fontWeight: "normal" }}>%</span>
                      </Text>
                      <Img src={REDARROW} />
                    </Flex>
                  </Flex>
                  <Flex
                    bg='rgba(158, 174, 199, 0.2);'
                    borderRadius='7px'
                    px={isMobile ? 6 : 12}
                    py={2}
                  >
                    <Text fontWeight='bold' fontSize='14px' color='#EFF1F6'>
                      Buy
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                bg='linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);'
                justifyContent='space-between'
                alignItems='center'
                px={isMobile ? 3 : 6}
                py={4}
                borderRadius='15px'
                flex='1'
                mt={isMobile ? 5 : 10}
              >
                <Flex
                  flex={startTab && endTab ? "0.3" : isMobile ? "0.25" : "0.25"}
                  alignItems='center'
                >
                  <Img w={isMobile ? "25px" : undefined} mr={2} src={NETFLIX} />
                  <Text
                    fontWeight='bold'
                    fontSize={isMobile ? "12px" : "18px"}
                    color='#EFF1F6'
                  >
                    Netflix
                  </Text>
                </Flex>
                <Flex
                  flex={startTab && endTab ? "0.7" : isMobile ? "0.75" : "0.75"}
                  justifyContent='space-between'
                >
                  <Flex
                    flex={
                      startTab && endTab
                        ? undefined
                        : isMobile
                        ? undefined
                        : "0.3"
                    }
                    flexDirection='column'
                  >
                    <Text color='#7D92B5' fontSize='12px'>
                      Price
                    </Text>
                    <Text
                      fontSize={
                        isMobile
                          ? "12px"
                          : startSmallScreen && endSmallScrren
                          ? "12px"
                          : "14px"
                      }
                      fontWeight='bold'
                      color='#9EAEC7'
                    >
                      203.63 <span style={{ fontWeight: "normal" }}>USD</span>
                      <span style={{ visibility: "hidden" }}>ins</span>
                    </Text>
                  </Flex>
                  <Flex
                    flex={startTab && endTab ? undefined : "0.4"}
                    alignItems='center'
                    flexDirection='column'
                  >
                    <Flex alignItems='center'>
                      {isMobile ? (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price
                        </Text>
                      ) : (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price change(24hr)
                        </Text>
                      )}
                      <Img src={NORMALARROW} />
                    </Flex>
                    <Flex alignItems='center'>
                      <Text
                        fontSize={
                          isMobile
                            ? "14px"
                            : startSmallScreen && endSmallScrren
                            ? "12px"
                            : "14px"
                        }
                        fontWeight='bold'
                        color='#9EAEC7'
                      >
                        11.6<span style={{ fontWeight: "normal" }}>%</span>
                      </Text>
                      <Img src={GREENARROW} />
                    </Flex>
                  </Flex>
                  <Flex
                    bg='rgba(158, 174, 199, 0.2);'
                    borderRadius='7px'
                    px={isMobile ? 6 : 12}
                    py={2}
                  >
                    <Text fontWeight='bold' fontSize='14px' color='#EFF1F6'>
                      Buy
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* <Flex
                mt={10}
                bg='linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);'
                justifyContent='space-between'
                alignItems='center'
                px={isMobile ? 3 : 6}
                py={4}
                borderRadius='15px'
                flex='1'
              >
                <Flex
                  flex={startTab && endTab ? "0.3" : isMobile ? "0.25" : "0.25"}
                  alignItems='center'
                >
                  <Img w={isMobile ? "25px" : undefined} mr={2} src={BITCOIN} />
                  <Text
                    fontWeight='bold'
                    fontSize={isMobile ? "15px" : "18px"}
                    color='#EFF1F6'
                  >
                    Bitcoin
                  </Text>
                </Flex>
                <Flex
                  flex={startTab && endTab ? "0.7" : isMobile ? "0.75" : "0.75"}
                  justifyContent='space-between'
                >
                  <Flex
                    flex={
                      startTab && endTab
                        ? undefined
                        : isMobile
                        ? undefined
                        : "0.3"
                    }
                    flexDirection='column'
                  >
                    <Text color='#7D92B5' fontSize='12px'>
                      Price
                    </Text>
                    <Text
                      fontSize={isMobile ? "12px" : undefined}
                      fontWeight='bold'
                      color='#9EAEC7'
                    >
                      40,881.20{" "}
                      <span style={{ fontWeight: "normal" }}>USD</span>
                    </Text>
                  </Flex>
                  <Flex
                    flex={startTab && endTab ? undefined : "0.3"}
                    alignItems='center'
                    flexDirection='column'
                  >
                    <Flex alignItems='center'>
                      {isMobile ? (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price
                        </Text>
                      ) : (
                        <Text color='#7D92B5' fontSize={"12px"}>
                          Price change(24hr)
                        </Text>
                      )}
                      <Flex alignItems='center'>
                        <Text fontWeight='bold' color='#9EAEC7'>
                          0.59<span style={{ fontWeight: "normal" }}>%</span>
                        </Text>
                        <Img src={REDARROW} />
                      </Flex>
                    </Flex>
                    <Flex
                      bg='rgba(158, 174, 199, 0.2);'
                      borderRadius='7px'
                      px={isMobile ? 6 : 12}
                      py={2}
                    >
                      <Text fontWeight='bold' fontSize='14px' color='#EFF1F6'>
                        Buy
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  mt={10}
                  bg='linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);'
                  justifyContent='space-between'
                  alignItems='center'
                  px={6}
                  py={4}
                  borderRadius='15px'
                  flex='1'
                >
                  <Flex
                    flex={startTab && endTab ? "0.3" : "0.25"}
                    alignItems='center'
                  >
                    <Img mr={2} src={NETFLIX} />
                    <Text fontWeight='bold' fontSize='18px' color='#EFF1F6'>
                      Netflix
                    </Text>
                  </Flex>
                  <Flex
                    flex={startTab && endTab ? "0.7" : "0.75"}
                    justifyContent='space-between'
                  >
                    <Flex
                      flex={startTab && endTab ? undefined : "0.3"}
                      flexDirection='column'
                    >
                      <Text color='#7D92B5' fontSize='12px'>
                        Price
                      </Text>
                      <Text fontWeight='bold' color='#9EAEC7'>
                        203.63 <span style={{ fontWeight: "normal" }}>USD</span>
                        <span style={{ visibility: "hidden" }}>ins</span>
                      </Text>
                    </Flex>
                    <Flex
                      flex={startTab && endTab ? undefined : "0.3"}
                      alignItems='center'
                      flexDirection='column'
                    >
                      <Flex alignItems='center'>
                        <Text color='#7D92B5' fontSize='12px'>
                          Price change(24hr)
                        </Text>
                        <Img src={NORMALARROW} />
                      </Flex>
                      <Flex alignItems='center'>
                        <Text fontWeight='bold' color='#9EAEC7'>
                          4.2<span style={{ fontWeight: "normal" }}>%</span>
                        </Text>
                        <Img src={GREENARROW} />
                      </Flex>
                    </Flex>
                    <Flex
                      bg='rgba(158, 174, 199, 0.2);'
                      borderRadius='7px'
                      px={12}
                      py={2}
                    >
                      <Text fontWeight='bold' fontSize='14px' color='#EFF1F6'>
                        Buy
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex> */}
            </Flex>
          </Flex>
          <Flex
            mx={
              startTab && endTab
                ? 10
                : isMobile
                ? 5
                : startSmallScreen && endSmallScrren
                ? 16
                : 32
            }
            mt={40}
            flexDirection='column'
          >
            <Flex justifyContent='center'>
              <Text
                fontWeight='bold'
                color='#EFF1F6'
                fontSize={isMobile ? "35px" : "50px"}
              >
                Why use <span style={{ color: "#53E9F9" }}>Scope</span>
              </Text>
            </Flex>
            <Flex
              flexDirection={isMobile ? "column" : undefined}
              color='#EFF1F6'
              mt={20}
              justifyContent='space-between'
            >
              <Flex
                mb={isMobile ? 20 : undefined}
                alignItems='center'
                flexDirection='column'
              >
                <Img w='64px' src={CLOCK} />
                <Text
                  fontSize={startTab && endTab ? "16px" : "24px"}
                  my={5}
                  fontWeight='bold'
                >
                  24/7 Access
                </Text>
                {startTab && endTab ? (
                  <Text
                    color='#BEC9DA'
                    fontSize={startTab && endTab ? "14px" : ""}
                    textAlign='center'
                    w={startTab && endTab ? "80%" : undefined}
                  >
                    You can buy assets on Scope at any time of
                    <br /> the day, any day of the week. The market <br />{" "}
                    doesn’t close here
                  </Text>
                ) : (
                  <Text
                    color='#BEC9DA'
                    fontSize={isMobile ? "14px" : ""}
                    textAlign='center'
                  >
                    You can buy assets on Scope at any time of
                    <br /> the day, any day of the week. The market <br />{" "}
                    doesn’t close here
                  </Text>
                )}
              </Flex>
              <Flex
                mb={isMobile ? 20 : undefined}
                alignItems='center'
                flexDirection='column'
              >
                <Img w='64px' src={WORLD} />
                <Text
                  my={5}
                  fontWeight='bold'
                  fontSize={startTab && endTab ? "16px" : "24px"}
                >
                  Global Access
                </Text>
                {startTab && endTab ? (
                  <Text
                    fontSize={startTab && endTab ? "14px" : ""}
                    color='#BEC9DA'
                    textAlign='center'
                    w={startTab && endTab ? "80%" : undefined}
                  >
                    Get assets on Scope from anywhere across
                    <br /> the globe. Regulations and juridiction
                    <br /> limitations won’t be a barrier with Scope.
                  </Text>
                ) : (
                  <Text
                    fontSize={isMobile ? "14px" : ""}
                    color='#BEC9DA'
                    textAlign='center'
                  >
                    Get assets on Scope from anywhere across
                    <br /> the globe. Regulations and juridiction
                    <br /> limitations won’t be a barrier with Scope.
                  </Text>
                )}
              </Flex>
              <Flex alignItems='center' flexDirection='column'>
                <Img w='64px' src={TRANSPARENCY} />
                <Text
                  my={5}
                  fontWeight='bold'
                  fontSize={startTab && endTab ? "16px" : "24px"}
                >
                  Transparency
                </Text>
                {startTab && endTab ? (
                  <Text
                    fontSize={startTab && endTab ? "14px" : ""}
                    color='#BEC9DA'
                    textAlign='center'
                    w={startTab && endTab ? "80%" : undefined}
                  >
                    We show you all the details you need to see.
                    <br /> There are no hidden and unfair manipulations.
                  </Text>
                ) : (
                  <Text
                    fontSize={isMobile ? "14px" : ""}
                    color='#BEC9DA'
                    textAlign='center'
                  >
                    We show you all the details you need to see.
                    <br /> There are no hidden and unfair manipulations.
                  </Text>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex
          color='#EFF1F6'
          mx={
            startTab && endTab
              ? 10
              : isMobile
              ? 5
              : startSmallScreen && endSmallScrren
              ? 16
              : 32
          }
          mt={40}
          flexDirection='column'
          ref={teamRef}
        >
          <Flex flexDirection='column' alignItems='center'>
            <Text fontWeight='bold' color='#EFF1F6' fontSize='50px'>
              The Team
            </Text>
            <Text color='#9EAEC7' mb={10} mt={5}>
              Just a couple of vehement degens
            </Text>
          </Flex>
          {startTab && endTab ? (
            <Flex
              w='100%'
              justifyContent={startTab && endTab ? "center" : "space-evenly"}
            >
              <Flex flexDirection='column'>
                <Img src={FEMI} />
                <Text color='#BEC9DA' my={1}>
                  Femi'6
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Product Designer
                  <br /> & PM
                </Text>
              </Flex>
              <Flex
                mx={startTab && endTab ? 5 : undefined}
                flexDirection='column'
              >
                <Img src={GODSWILL} />
                <Text color='#BEC9DA' my={1}>
                  Godswill
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Frontend dev
                </Text>
              </Flex>
              <Flex
                mr={startTab && endTab ? 5 : undefined}
                flexDirection='column'
              >
                <Img src={PHIDEL} />
                <Text color='#BEC9DA' my={1}>
                  Phidel
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Backend dev
                </Text>
              </Flex>
              <Flex flexDirection='column'>
                <Img src={JAMES} />
                <Text color='#BEC9DA' my={1}>
                  James
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Backend dev
                </Text>
              </Flex>
            </Flex>
          ) : isMobile ? (
            <Flex
              w='100%'
              // justifyContent={startTab && endTab ? "center" : "space-evenly"}
              flexDirection='column'
            >
              <Flex>
                <Flex
                  mb={10}
                  mr={isMobile ? 5 : undefined}
                  flexDirection='column'
                >
                  <Img src={FEMI} />
                  <Text color='#BEC9DA' my={1}>
                    Femi'6
                  </Text>
                  <Text color='#9EAEC7' fontSize='14px'>
                    Product Designer
                    <br /> & PM
                  </Text>
                </Flex>
                <Flex flexDirection='column'>
                  <Img src={GODSWILL} />
                  <Text color='#BEC9DA' my={1}>
                    Godswill
                  </Text>
                  <Text color='#9EAEC7' fontSize='14px'>
                    Frontend dev
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Flex
                  // mr={startTab && endTab ? 5 : undefined}
                  flexDirection='column'
                  mr={isMobile ? 5 : undefined}
                >
                  <Img src={PHIDEL} />
                  <Text color='#BEC9DA' my={1}>
                    Phidel
                  </Text>
                  <Text color='#9EAEC7' fontSize='14px'>
                    Backend dev
                  </Text>
                </Flex>
                <Flex flexDirection='column'>
                  <Img src={JAMES} />
                  <Text color='#BEC9DA' my={1}>
                    James
                  </Text>
                  <Text color='#9EAEC7' fontSize='14px'>
                    Backend dev
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Flex
              w='100%'
              justifyContent={startTab && endTab ? "center" : "space-evenly"}
            >
              <Flex flexDirection='column'>
                <Img src={FEMI} />
                <Text color='#BEC9DA' my={1}>
                  Femi'6
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Product Designer
                  <br /> & PM
                </Text>
              </Flex>
              <Flex
                mx={startTab && endTab ? 5 : undefined}
                flexDirection='column'
              >
                <Img src={GODSWILL} />
                <Text color='#BEC9DA' my={1}>
                  Godswill
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Frontend dev
                </Text>
              </Flex>
              <Flex
                mr={startTab && endTab ? 5 : undefined}
                flexDirection='column'
              >
                <Img src={PHIDEL} />
                <Text color='#BEC9DA' my={1}>
                  Phidel
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Backend dev
                </Text>
              </Flex>
              <Flex flexDirection='column'>
                <Img src={JAMES} />
                <Text color='#BEC9DA' my={1}>
                  James
                </Text>
                <Text color='#9EAEC7' fontSize='14px'>
                  Backend dev
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
        <Flex bgColor='#000A24' py={20} mt={40}>
          <Flex
            flexDirection={isMobile ? "column" : undefined}
            alignItems={isMobile ? undefined : "center"}
            mx={isMobile ? 5 : startSmallScreen && endSmallScrren ? 16 : 32}
          >
            <Flex
              mb={isMobile ? 5 : undefined}
              mr={isMobile ? undefined : 40}
              flexDirection='column'
            >
              <Img w='150px' src={FOOTERLOGO} />
              <Text mt={5} fontSize='14px' color='#9EAEC7'>
                Quick, easy and reliable store for DeFi
                <br /> store for financial assets
              </Text>
            </Flex>
            <Flex
              color='#EFF1F6'
              fontSize='14px'
              fontWeight='bold'
              flexDirection='column'
            >
              <Text cursor='pointer'>Launch app</Text>
              <Text cursor='pointer' my={3}>
                Contact Us
              </Text>
              <Text cursor='pointer'>About Scope</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex bgColor='#000A24' py={5} justifyContent='center'>
          <Flex>
            <Img src={COPYRIGHT} />
            <Text color='#FFFFFF'>Scope 2022. All rights reserved</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
