import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import platformabi from "./abi/platformabi.json";
import assetabi from "./abi/assetContract.json";
import erc20abi from "./abi/erc20.json";

export const platformContract = async (
  address: string,
  library: Web3Provider | undefined
) => {
  return new Contract(address, platformabi, library?.getSigner());
};

export const assetContract = async (
  address: string,
  library: Web3Provider | undefined
) => {
  return new Contract(address, assetabi, library?.getSigner());
};

export const erc20 = async (
  address: string,
  library: Web3Provider | undefined
) => {
  return new Contract(address, erc20abi, library?.getSigner());
};
