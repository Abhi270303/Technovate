import React from "react";

const SecureYourself = ({signer,account, provider, contractMyToken,contractRelief}) => {
  console.log(account);
  console.log(provider);
  console.log(contractMyToken);
  console.log(signer);
  console.log(contractRelief);
  return (
    <div className="h-screen flex items-center text-center justify-center md:pb-36 ">
      <p> </p>
      <button className="  rounded-lg p-4 w-1/4 bg-lightPrimary">
        Connect Wallet
      </button>
    </div>
  );
};

export default SecureYourself;
