import { useEffect } from "react";
import { connectorKey, ConnectorNames } from "../connectors/index";
import useAuth from "./useAuth";

const binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, "BinanceChain", {
      get() {
        return this.bsc;
      },
      set(bsc) {
        this.bsc = bsc;

        resolve();
      },
    })
  );

const useConnectWallet = () => {
  const { login } = useAuth();

  const connectorId = window.localStorage.getItem(
    connectorKey
  ) as ConnectorNames;
  useEffect(() => {
    if (connectorId) {
      login(connectorId);
    }
  }, [login, connectorId]);
};

export default useConnectWallet;
