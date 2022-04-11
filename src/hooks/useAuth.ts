import { useCallback } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  ConnectorNames,
  connectorsByName,
  connectorKey,
} from "../connectors/index";
import { Web3Provider } from "@ethersproject/providers";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
  NoEthereumProviderError,
} from "@web3-react/injected-connector";

const useAuth = () => {
  const context = useWeb3React<Web3Provider>();
  const { activate, deactivate, setError } = context;

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (!error) {
            activate(connector);
          }
          if (error instanceof UnsupportedChainIdError) {
            setError({
              name: "UnsupportedChainIdError",
              message: error.message,
            });
          } else {
            window.localStorage.removeItem(connectorKey);
            if (error instanceof NoEthereumProviderError) {
              console.log("inavlid chain id");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = undefined;
              }
              console.log("Please authorize your account.");
            } else {
              console.log(
                "Please check if wallet is logged in or has pending transactions."
              );
            }
          }
        });
      } else {
        console.log("Unable to connect wallet");
      }
    },
    [activate, setError]
  );

  const logout = useCallback(() => {
    deactivate();
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = undefined;
    }
    window.localStorage.removeItem(connectorKey);
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
