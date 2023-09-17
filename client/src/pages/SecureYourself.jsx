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
  const [trustAddress, setTrustAddress] = useState();
  const [inputValue, setInputValue] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [allowanceAmount, setAllowanceAmount] = useState("");
  const [allowAddress, setAllowAddress] = useState(null);
  const [allowFunds, setAllowFunds] = useState('');
  const [aprooveAddress, setAprooveAddress] = useState('');

  const fetchAllowance = async () => {
    try {
      // Call the contract function to get the allowance
      const address = await  signer.getAddress();
      const allowanceInWei = await contractMyToken.allowance(
       address,
        allowAddress /* Recipient's address */
      );

      // Convert the allowance from Wei to Ether
      const allowanceInEther = ethers.utils.formatEther(allowanceInWei);

      // Update the state with the fetched allowance
      setAllowanceAmount(allowanceInEther);
    } catch (error) {
      console.error("Error fetching allowance:", error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };
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
      yourTrustWorthyParty();
    }
  }, [signer]);

  const yourTrustWorthyParty = async() => {
    const address = await contractMyToken.brother(signer.getAddress());
    setTrustAddress(address);
  };
  const addTrustWorthy = async (event) => {
    event.preventDefault();
    await contractMyToken.addbrother(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAllowAddress(event.target.value);
  };

  const handleTransfer = async (event) => {
    event.preventDefault();
    // You can perform actions with the amount and recipient here, e.g., submit a transaction.
    const parsedAmount = ethers.utils.parseEther(amount);
    await contractMyToken.transfer(recipient, parsedAmount);
    // Reset the form
    setAmount("");
    setRecipient("");
  };

  const handleAmountApproveChange = async(event)=>{
    setAllowFunds(event.target.value);
  }

  const handleApproveAddressChange = async(event)=>{
    setAprooveAddress(event.target.value);
  }

  const permit = async() => {};
  const TransferFrom = async ()=>{}

  const onApprove = async()=>{
    const parsedValue = ethers.utils.parseEther(allowFunds);
    const tx = await contractMyToken.approve(aprooveAddress, parsedValue);
    await tx.wait();
  } 

  return (
    <div className="md:pb-36 flex flex-col gap-4 items-center mt-16 justify-center w-full text-lightModeTextColor">
      <div className=" md:w-1/2 w-[85%] rounded-lg  border md:p-16 p-4 flex flex-col items-start justify-center">
        <p className=" md:text-2xl font-semibold text-lg">User Info</p>

        <p className=" md:text-xl text-lg">
          Token Name:{" "}
          <span className="font-semibold text-lightPrimary">{nameToken}</span>
        </p>
        <p className=" md:text-xl text-lg">
          Token symbol:{" "}
          <span className="font-semibold text-lightPrimary">{symbolToken}</span>
        </p>
        <p className="md:text-xl text-lg">
          Your Wallet Address:{" "}
          <span className="font-semibold text-lightPrimary break-all">
            {address}
          </span>
        </p>
        {balance !== null ? (
          <p className=" md:text-xl text-lg">
            Your Total Balance:{" "}
            <span className="font-semibold text-lightPrimary">
              {ethers.utils.formatEther(balance)}
            </span>
          </p>
        ) : (
          <p className="font-semibold text-lightPrimary">Loading balance...</p>
        )}
      </div>

      <div className=" md:w-1/2 w-[85%] rounded-lg  border md:p-16 p-4 flex flex-col items-start justify-center">
        {trustAddress !== "0x0000000000000000000000000000000000000000" ? (
          <p>Your trust Address is : {trustAddress}</p>
        ) : (
          <div className="flex flex-col">
            <p className=" md:text-2xl text-lg mt-2">
              Not added any Trustworthy
            </p>
            <form onSubmit={addTrustWorthy}>
              <input
                className="text-black w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Trustworthy address"
              />

              <button
                type="submit"
                className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
              >
                Add Trust Worthy
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-center">
        <p className=" md:text-2xl font-semibold text-lg">Transfer Funds</p>
        <form onSubmit={handleTransfer}>
          <div className="form-group">
            <label htmlFor="amount" className=" md:text-xl text-lg">
              Amount:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient" className="md:text-xl text-lg">
              Recipient:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              placeholder="Enter recipient's address"
              required
            />
          </div>
          <button
            className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
            type="submit"
          >
            Transfer
          </button>
        </form>
      </div>

      <div className="md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-cente mb-25">
        <p className=" md:text-2xl font-semibold text-lg">Allowance Card</p>
        <div>
          <label className="md:text-xl text-lg md:mt-2 w-full">Recipient Address:</label>
          <input
            type="text"
            value={allowAddress}
            onChange={handleAddressChange}
            className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
          />
        </div>
        <button onClick={fetchAllowance} className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full">Fetch Allowance</button>
        {allowanceAmount && (
          <div>
            <p>Allowance Amount (ETH): {allowanceAmount}</p>
          </div>
        )}
      </div>
{/*


      <div className="md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-center">
        <p className=" md:text-2xl font-semibold text-lg">Approve Funds</p>
        <form onSubmit={onApprove}>
          <div className="form-group">
            <label htmlFor="amount" className=" md:text-xl text-lg">
              Amount:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="amount"
              value={allowFunds}
              onChange={handleAmountApproveChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient" className="md:text-xl text-lg">
              Recipient:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="recipient"
              value={aprooveAddress}
              onChange={handleApproveAddressChange}
              placeholder="Enter recipient's address"
              required
            />
          </div>
          <button
            className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
            type="submit"
          >
            Transfer
          </button>
        </form>
      </div>
        */ }
    </div>
  );
};

export default SecureYourself;
