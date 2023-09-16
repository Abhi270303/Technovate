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

<<<<<<< HEAD
=======
  const fetchAllowance = async () => {
    try {
      // Call the contract function to get the allowance
      const allowanceInWei = await contractMyToken.allowance(
        signer.getAddress(),
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
>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75

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

  const permit = async () => {};

  const handleAddressChange = (event) => {
    setAllowAddress(event.target.value);
  };

  const fetchAllowance = async () => {
    try {
      // Call the contract function to get the allowance
      const allowanceInWei = await contractMyToken.allowance(
        signer.getAddress(),
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

  const yourTrustWorthyParty = async () => {
    console.log(signer.getAddress());
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

  return (
<<<<<<< HEAD
    <div className="md:pb-36 h-screen flex mt-16 justify-center w-full text-lightModeTextColor">
      <div className=" md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-center">
=======
    <div className="md:pb-36 h-screen flex flex-col gap-4 items-center mt-16 justify-center w-full text-lightModeTextColor">
      <div className=" md:w-1/2 w-[85%] rounded-lg  border md:p-16 p-4 flex flex-col items-start justify-center">
        <p className=" md:text-2xl font-semibold text-lg">User Info</p>

>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75
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
<<<<<<< HEAD
      {trustAddress && <p>Your trust Address is : {trustAddress}</p>}
      {!trustAddress && (
        <div>
          <h2>Input Form</h2>
          <form onSubmit={addTrustWorthy}>
            <label>
              Enter something:
=======

      <div className=" md:w-1/2 w-[85%] rounded-lg  border md:p-16 p-4 flex flex-col items-start justify-center">
        {trustAddress !== "0x0000000000000000000000000000000000000000" ? (
          <p>Your trust Address is : {trustAddress}</p>
        ) : (
          <div className="flex flex-col">
            <p className=" md:text-2xl text-lg mt-2">
              Not added any Trustworthy
            </p>
            <form onSubmit={addTrustWorthy}>
>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75
              <input
                className="text-black"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
              />
<<<<<<< HEAD
            </label>
            <button type="submit">Add Trust Worthy</button>
          </form>
        </div>
      )}
      <div className="card">
        <h2>Transfer Funds</h2>
        <form onSubmit={handleTransfer}>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
=======

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
>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75
            <input
              className="text-black"
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
<<<<<<< HEAD
            <label htmlFor="recipient">Recipient:</label>
=======
            <label htmlFor="recipient" className="md:text-xl text-lg">
              Recipient:
            </label>
>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75
            <input
              className="text-black"
              type="text"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              placeholder="Enter recipient's address"
              required
            />
          </div>
<<<<<<< HEAD
          <button type="submit">Transfer</button>
        </form>
      </div>
=======
          <button
            className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
            type="submit"
          >
            Transfer
          </button>
        </form>
      </div>

>>>>>>> 488d0f7eca1ef386e056b54ee379586438035f75
      <div className="card">
        <h3>Allowance Card</h3>
        <div>
          <label>Recipient Address:</label>
          <input type="text" value={address} onChange={handleAddressChange} />
        </div>
        <button onClick={fetchAllowance}>Fetch Allowance</button>
        {allowanceAmount && (
          <div>
            <p>Allowance Amount (ETH): {allowanceAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecureYourself;
