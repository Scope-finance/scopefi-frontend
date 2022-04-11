import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  83: "https://rpctest.meter.io/",
  82: "https://rpc.meter.io/",
};

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 82, 83],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    83: RPC_URLS[83],
    82: RPC_URLS[82],
  },
  qrcode: true,
  //   pollingInterval: 15000,
});

export function resetWalletConnector(connector: any) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

//coinbase
// export const walletlink = new WalletLinkConnector({
//   url: RPC_URLS[4],
//   appName: "demo-app",
//   supportedChainIds: [1, 4],
// });
