// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";

contract SimpleDAO {
    mapping(address => uint256) public deposits;

    MyToken public token;

    constructor(address _token) {
        token = MyToken(_token);
    }

    function deposit(address user_address, uint256 amount, uint8 v, bytes32 r, bytes32 s) external {
        // Use the permit function to set the allowance
        uint256 nonce = token.nonces(user_address);
        uint256 expiry = block.timestamp + 1 days; // 1 day from now

        token.permit(user_address, address(this), nonce, expiry, true, v, r, s);

        // Transfer tokens to this contract
        token.transferFrom(user_address, address(this), amount);

        // Update the deposit mapping with the original owner's address
        deposits[user_address] += amount;
    }

    function withdraw(uint256 amount) external {
        require(deposits[msg.sender] >= amount, "Insufficient balance");

        // Update the deposit mapping
        deposits[msg.sender] -= amount;

        // Transfer tokens back to the user
        token.transfer(msg.sender, amount);
    }
}