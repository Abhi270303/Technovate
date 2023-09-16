import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ConnectWallet from "./pages/ConnectWallet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TFL from "./pages/TFL";
import Token from "./pages/Token";
import ContactUs from "./pages/ContactUs";
import SecureYourself from "./pages/SecureYourself";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
const { ethers } = require("ethers");
const {
  MyTokenABI,
  MyTokenByteCode,
  MyTokenContractAddress,
  ReliefDaoABI,
  ReliefDaoByteCode,
  ReliefDaoContractAddress,
} = require("./contract_instances/config");

function App() {
  const [account, setAccount] = useState("");
  const [contractMyToken, setContractMyToken] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contractRelief, setContractRelief] = useState(null);
  const [signer,setSigner] = useState(null);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signerA = provider.getSigner();
        setSigner(signerA);
        const address = await signerA.getAddress();
        setAccount(address);
        const contract1 = new ethers.Contract(
          MyTokenContractAddress,
          MyTokenABI,
          signerA
        );
        const contract2 = new ethers.Contract(
          ReliefDaoContractAddress,
          ReliefDaoABI,
          signerA
        );
        setContractMyToken(contract1);
        setContractRelief(contract2);
        setProvider(provider);
        console.log();
      } else {
        alert("Wallet is not present");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div>
      <Header account={account} />
      <div className=" p-3 px-4 md:p-6 md:px-16 b">
        <Routes>
          <Route path="/*" element={<HomePage  />} />
          <Route path="/secure-yourself" element={<SecureYourself  signer={signer} account={account} provider={provider} contractMyToken={contractMyToken} contractRelief={contractRelief}/>} />
          <Route path="/tfl" element={<TFL />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
