import { useState, useEffect } from "react";
const { ethers } = require("ethers");
const {
  MyTokenContractAddress,
  ReliefDaoContractAddress,
} = require("../contract_instances/config");

const SecureYourself = ({
  signer,
  account,
  provider,
  contractMyToken,
  contractRelief,
}) => {
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState("");
  const [nameToken, setNameToken] = useState("");
  const [symbolToken, setSymbolToken] = useState("");
  useEffect(() => {
    async function fetchBalance() {
      try {
        // Call the balanceOf function to retrieve the balance of the target address
        const address1 = await signer.getAddress();
        const tokenName = await contractMyToken.name();
        const tokenSymbol = await contractMyToken.symbol();
        const balance = await contractMyToken.balanceOf(address1);
        setAddress(address1);
        setBalance(balance);
        setNameToken(tokenName);
        setSymbolToken(tokenSymbol);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (signer) {
      fetchBalance();
    }
  }, [signer]);

  return (
    <div className="h-screen flex items-center text-center justify-center md:pb-36 ">
      <p>User Logo</p>
      <p>Token Name: {nameToken}</p>
      <p>Token symbol: {symbolToken}</p>
      <p>Your Wallet Address {address}</p>
      {balance !== null ? (
        <p>Your Total Balance: {ethers.utils.formatEther(balance)}</p>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
};

export default SecureYourself;
