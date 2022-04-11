import { useMemo, useState } from "react";
import JSBI from "jsbi";
import { assetContract } from "../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

interface useBalancesArgs {
  assetAddress: string;
  inputValue: string;
}
export const useBalances = ({ assetAddress, inputValue }: useBalancesArgs) => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState(0);
  const [balanceEnough, setBalanceEnough] = useState(false);

  useMemo(async () => {
    if (account) {
      try {
        const contract = await assetContract(assetAddress, library);
        const balance = await contract.balanceOf(account);
        console.log(parseFloat(ethers.utils.parseEther(inputValue).toString()));
        console.log(balance.toString());
        setBalance(balance.toString());
        setBalanceEnough(
          //   JSBI.GT(
          //     balance.toString(),
          //     ethers.utils.parseEther(inputValue).toString()
          //   )
          parseFloat(balance.toString()) >
            parseFloat(ethers.utils.parseEther(inputValue).toString())
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [assetAddress, inputValue, account]);
  return { balance, balanceEnough };
};
