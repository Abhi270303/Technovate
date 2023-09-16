import React from 'react'
import { useState, useEffect } from 'react';
const { Web3Provider } = require( "@ethersproject/providers");
const { ethers } = require("ethers");
const { MyTokenABI,MyTokenByteCode,MyTokenContractAddress, ReliefDaoABI, ReliefDaoByteCode, ReliefDaoContractAddressv } = require('../contract_instances/config');


  const SecureYourself = () => {
    const [account,setAccount] = useState("");
    const [contract,setContract] = useState(null);
    const [provider,setProvider] = useState(null);


    useEffect(()=>{
      const provider =  new ethers.providers.Web3Provider(window.ethereum)
      const loadProvider=async()=>{
        if(provider){
          await provider.send("eth_requestAccounts",[]);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          const contract = new ethers.Contract(MyTokenContractAddress,MyTokenABI,signer);
          setContract(contract);
          setProvider(provider);
          console.log(contract);
        }else{
          alert("Wallet is not present");
        }
      };
      provider && loadProvider();
    },[]);
  return (
  <div className='h-screen flex items-center text-center justify-center md:pb-36 '>
   {account? <p> Account Address : </p>
    :<button className='  rounded-lg p-4 w-1/4 bg-lightPrimary'>Connect Wallet</button>
  }
    </div>
  )
}

export default SecureYourself
