import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import LandingPage from "./pages/index/Index";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor='#000D2E'>
      <LandingPage />
    </Box>
  </ChakraProvider>
);
