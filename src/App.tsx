import React, { useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import LandingPage from "./pages/index/Index";
import Dashboard from "./pages/Portfolio/index";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/dashboard/Navbar";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors/connectors";
import useConnectWallet from "./hooks/useConnectWallet";

export const App = () => {
  useConnectWallet();
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact strict path='/'>
            <Box bgColor='#000D2E'>
              <LandingPage />
            </Box>
          </Route>
        </Switch>
        <Switch>
          <Route exact strict path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </HashRouter>
    </ChakraProvider>
  );
};
