import { useMemo, useState } from "react";
import { assetContract, platformContract } from "../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";

export const useAssets = () => {
  const { library, account } = useWeb3React();
  const [assets, setAssest] = useState<
    Array<{
      assetSymbol: string;
      assetName: string;
      marketPrice: number;
      scopePrice: number;
      address: any;
      balance: string;
    }>
  >([]);

  const loopAssets = async (contract: Contract, length: any) => {
    const addresses = [];

    for (let i = 0; i < length; i++) {
      const asset = await contract.assets(i);

      addresses.push(asset);
    }
    return addresses;
  };

  const loopAssetsAddress = async (
    address: any[],
    platformContract: Contract
  ) => {
    const assets = [];
    for (let i = 0; i < address.length; i++) {
      const contract = await assetContract(address[i], library);
      const symbol = await contract.symbol();
      const name = await contract.name();
      const balance = await contract.balanceOf(account);
      //   console.log(name);
      const latestPrice = await platformContract.getLatestPrice(name);
      const formatLatestPrice = parseFloat(latestPrice.toString());
      const onepercent = formatLatestPrice * 0.01;
      const scopePrice = formatLatestPrice + onepercent;

      assets.push({
        assetSymbol: symbol,
        assetName: name,
        marketPrice: formatLatestPrice,
        scopePrice: scopePrice,
        address: address[i],
        balance: ethers.utils.formatEther(balance.toString()).toString(),
      });
    }
    return assets;
  };

  useMemo(async () => {
    try {
      if (account) {
        const contract = await platformContract(
          "0x468F7Dd215CB47502B87c672cF20e9135014e02a",
          library
        );
        const assetLength = await contract.getNumberOfAssets();
        const number = parseFloat(assetLength.toString());
        const addresses = await loopAssets(contract, number);
        const assets = await loopAssetsAddress(addresses, contract);
        setAssest(assets);
        console.log(assets);
      }
    } catch (err) {
      console.log(err);
    }
  }, [account]);
  return { assets };
};
