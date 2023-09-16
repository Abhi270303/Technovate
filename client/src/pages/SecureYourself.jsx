import { useState, useEffect } from "react";
const { ethers } = require("ethers");


const SecureYourself = ({signer,account, provider, contractMyToken,contractRelief}) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      try {
        // Call the balanceOf function to retrieve the balance of the target address
        const address = await signer.getAddress();
        const balance = await contractMyToken.balanceOf(address)
        setBalance(balance);
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
      {balance !== null ? (
        <p>Your Total Balance: {ethers.utils.formatEther(balance)}</p>
      ) : (
        <p>Loading balance...</p>
      )}
     
    </div>
  );
};

export default SecureYourself;
