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
  const [approvalAmount, setApprovalAmount] = useState("");
  const [approvalRecipient, setApprovalRecipient] = useState("");

  const handleApprovalAmountChange = (event) => {
    setApprovalAmount(event.target.value);
  };

  const handleApprovalRecipientChange = (event) => {
    setApprovalRecipient(event.target.value);
  };

  const handleApproval = async (event) => {
    event.preventDefault();

    try {
      const parsedApprovalAmount = ethers.utils.parseEther(approvalAmount);
      const tx = await contractMyToken.approve(
        approvalRecipient,
        parsedApprovalAmount
      );
      await tx.wait();
      // Optionally, you can handle success here
      console.log("Approval successful");
    } catch (error) {
      console.error("Error approving funds:", error);
      // Optionally, you can handle errors here
    }
  };
  const fetchAllowance = async () => {
    try {
      const address5 = await signer.getAddress();
      // Call the contract function to get the allowance
      const allowanceInWei = await contractMyToken.allowance(
        address5,
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

  const yourTrustWorthyParty = async () => {
    try {
      if (contractMyToken && signer) {
        const address = await contractMyToken.brother(signer.getAddress());
        setTrustAddress(address);
      } else {
        console.error("contractMyToken or signer is not defined.");
      }
    } catch (error) {
      console.error("Error in yourTrustWorthyParty:", error);
    }
  };

  const addTrustWorthy = async (event) => {
    event.preventDefault();
    try {
      await contractMyToken.addbrother(inputValue);
    } catch (error) {
      console.error("Error adding Trust Worthy:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAllowAddress(event.target.value);
  };

  const handleTransfer = async (event) => {
    event.preventDefault();
    try {
      // You can perform actions with the amount and recipient here, e.g., submit a transaction.
      const parsedAmount = ethers.utils.parseEther(amount);
      await contractMyToken.transfer(recipient, parsedAmount);
      // Reset the form
      setAmount("");
      setRecipient("");
    } catch (error) {
      console.error("Error transferring funds:", error);
    }
  };

  const handleAmountApproveChange = async (event) => {
    setApprovalAmount(event.target.value);
  };

  const handleApproveAddressChange = async (event) => {
    setApprovalRecipient(event.target.value);
  };

  const permit = async () => {};
  const TransferFrom = async () => {};

  const onApprove = async () => {
    try {
      const parsedValue = ethers.utils.parseEther(approvalAmount);
      const tx = await contractMyToken.approve(approvalRecipient, parsedValue);
      await tx.wait();
    } catch (error) {
      console.error("Error approving funds:", error);
    }
  };

  const [holder, setholder] = useState("");
  const [permitAmount, setPermitAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  const handleholderChange = (event) => {
    setholder(event.target.value);
  };

  const handlePermitAmountChange = (event) => {
    setPermitAmount(event.target.value);
  };

  const handleDepositAmountChange = (event) => {
    setDepositAmount(event.target.value);
  };

  const handlePermit = async () => {
    try {
      const parsedAmount = ethers.utils.parseEther(permitAmount);
      await contractMyToken.permit(holder, ReliefDaoContractAddress, parsedAmount);
      // Optionally, handle success here
      console.log("Permit successful");
    } catch (error) {
      console.error("Error permitting funds:", error);
      // Optionally, handle errors here
    }
  };

  const handleDeposit = async () => {
    try {
      const parsedAmount = ethers.utils.parseEther(depositAmount);
      await contractRelief.deposit(parsedAmount,holder);
      // Optionally, handle success here
      console.log("Deposit successful");
    } catch (error) {
      console.error("Error depositing funds:", error);
      // Optionally, handle errors here
    }
  };

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
            <span className="font-semibold text-lightPrimary break-all">
              {ethers.utils.formatEther(balance)}
            </span>
          </p>
        ) : (
          <p className="font-semibold text-lightPrimary">Loading balance...</p>
        )}
      </div>

      <div className=" md:w-1/2 w-[85%] rounded-lg  border md:p-16 p-4 flex flex-col items-start justify-center">
        {trustAddress !== "0x0000000000000000000000000000000000000000" ? (
          <p className=" md:text-2xl font-semibold text-lg w-full text-center mb-5 break-all">
            Your trust Address is : {trustAddress}
          </p>
        ) : (
          <div className="flex flex-col w-full">
            <p className=" md:text-2xl font-semibold text-lg w-full text-center mb-5">
              Not added any Trustworthy
            </p>
            <form onSubmit={addTrustWorthy} className="w-full">
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

      <div className="md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-center text-center">
        <p className=" md:text-2xl font-semibold text-lg w-full text-center mb-5">
          Transfer Funds
        </p>
        <form onSubmit={handleTransfer} className="w-full">
          <div className="form-group w-full">
            <label htmlFor="amount" className="md:mt-12 md:text-xl text-lg">
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
          <div className="form-group md:mt-4">
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
        <p className=" md:text-2xl font-semibold text-lg w-full text-center ">
          Allowance
        </p>
        <label className="md:text-lg text-lg md:mt-6 w-full text-center md:mb-4">
          Recipient Address:
        </label>
        <input
          type="text"
          value={allowAddress}
          onChange={handleAddressChange}
          className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
        />
        <button
          onClick={fetchAllowance}
          className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
        >
          Fetch Allowance
        </button>
        {allowanceAmount && (
          <div>
            <p>Allowance Amount (ETH): {allowanceAmount}</p>
          </div>
        )}
      </div>
      <div className="md:w-1/2 w-[85%] rounded-lg h-1/2 border md:p-16 p-4 flex flex-col items-start justify-center">
        <p className="md:text-2xl font-semibold text-lg">Approve Funds</p>
        <form onSubmit={handleApproval}>
          <div className="form-group">
            <label htmlFor="approvalAmount" className="md:text-xl text-lg">
              Amount:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="approvalAmount"
              value={approvalAmount}
              onChange={handleApprovalAmountChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="approvalRecipient" className="md:text-xl text-lg">
              Recipient:
            </label>
            <input
              className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
              type="text"
              id="approvalRecipient"
              value={approvalRecipient}
              onChange={handleApprovalRecipientChange}
              placeholder="Enter recipient's address"
              required
            />
          </div>
          <button
            className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
            type="submit"
          >
            Approve
          </button>
        </form>
      </div>

      <div className="md:w-1/2 w-[85%] rounded-lg border md:p-16 p-4 flex flex-col items-start justify-center">
      <p className="md:text-2xl font-semibold text-lg">Permit and Deposit</p>

      <div className="form-group">
        <label htmlFor="holder" className="md:text-xl text-lg">
          Holder whos spend you wanna use:
        </label>
        <input
          className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
          type="text"
          id="holder"
          value={holder}
          onChange={handleholderChange}
          placeholder="Enter spender's address"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="permitAmount" className="md:text-xl text-lg">
          Permit Amount:
        </label>
        <input
          className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
          type="text"
          id="permitAmount"
          value={permitAmount}
          onChange={handlePermitAmountChange}
          placeholder="Enter amount"
          required
        />
      </div>

      <button
        className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
        onClick={handlePermit}
      >
        Permit
      </button>

      <div className="form-group mt-4">
        <label htmlFor="depositAmount" className="md:text-xl text-lg">
          Deposit Amount:
        </label>
        <input
          className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
          type="text"
          id="depositAmount"
          value={depositAmount}
          onChange={handleDepositAmountChange}
          placeholder="Enter amount"
          required
        /><label htmlFor="depositAmount" className="md:text-xl text-lg">
        holder:
      </label>
        <input
          className="text-lightModeTextColor w-full p-3 rounded-lg bg-transparent border border-lightPrimary"
          type="text"
          id="holder"
          value={holder}
          onChange={handleholderChange}
          placeholder="Enter spender's address"
          required
        />
      </div>

      <button
        className="p-4 bg-lightPrimary rounded-lg mt-2 text-darkBg w-full"
        onClick={handleDeposit}
      >
        Deposit
      </button>
    </div>
    </div>
  );
};

export default SecureYourself;
