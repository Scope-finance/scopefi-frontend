import { useState, useMemo } from "react";
import { erc20 } from "../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import JSBI from "jsbi";

export const formatBigNumber = (bigNumber: any) => {
  const toString = bigNumber.toString();
  //   console.log(toString);
  //   const formatted = ethers.utils.formatEther(toString);
  //   console.log(formatted);
  return toString;
};

interface Args {
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  reload: boolean;
}

export const useAllowance = ({ reload, setReload }: Args) => {
  const { account, library, chainId } = useWeb3React();
  const [enoughAllowance, setEnoughtAllowance] = useState(false);

  useMemo(async () => {
    if (account) {
      try {
        console.log("changed");
        const token = await erc20(
          "0xbDf80c68E29697a2EB9893Eab8F3539305F135F2",
          library
        );
        const allowance = await token.allowance(
          account,
          "0x468F7Dd215CB47502B87c672cF20e9135014e02a"
        );
        const userBalance = await token.balanceOf(account);
        const formattedAllowance = formatBigNumber(allowance);
        const formattedUserBalance = formatBigNumber(userBalance);

        console.log("formattedAllowance", formattedAllowance);
        console.log(formattedUserBalance);

        // setEnoughtAllowance(JSBI.GT(formattedAllowance, formattedUserBalance));
        console.log(
          parseFloat(ethers.utils.formatEther(formattedUserBalance)),
          parseFloat(ethers.utils.formatEther(formattedAllowance))
        );
        setEnoughtAllowance(
          ethers.utils.formatEther(formattedAllowance) >
            ethers.utils.formatEther(formattedUserBalance)
        );
        setReload(false);
      } catch (err) {
        console.log(err);
      }
    }
  }, [account, chainId, reload]);
  return { enoughAllowance };
};
