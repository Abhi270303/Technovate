// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract MyToken is Ownable, Initializable {
    struct UserDetails {
        string name;
        string phoneNumber;
        string living_address;
        string aadharCard;
    }

    string private _name;
    string private _symbol;
    uint8 private _decimals;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    mapping(address => UserDetails) private _userDetails; // Mapping to store user details
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event UserInfo(string indexed _name, string indexed _phoneNumber, string _living_address);
    address public DAO_CONTRACT;
    modifier onlyowner() {
    require(msg.sender == owner(), "Only the contract owner can call this function");
    _;
    }


    function initialize(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        string memory owner_name,
        string memory owner_phoneNumber,
        string memory owner_addr,
        string memory owner_aadhar

    ) public initializer {
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_;
        _mint(msg.sender, 1000000 * (10**decimals_));
        _userDetails[msg.sender] = UserDetails(owner_name, owner_phoneNumber, owner_addr, owner_aadhar);
        emit UserInfo(owner_name, owner_phoneNumber, owner_addr);
        transferOwnership(msg.sender);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: cannot mint tokens to zero address");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount,string memory rc_name,
        string memory rc_phoneNumber,
        string memory rc_addr,
        string memory rc_aadhar) public returns (bool) {
        if(bytes(_userDetails[recipient].name).length == 0){
            _userDetails[recipient] = UserDetails(rc_name, rc_phoneNumber, rc_addr, rc_aadhar);
            emit UserInfo(rc_name, rc_phoneNumber, rc_addr);
        }
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0));
        require(recipient != address(0));
        _balances[sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0));
        require(spender != address(0));

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(recipient == address(DAO_CONTRACT)  && DAO_CONTRACT != address(0), "Transfer to non-DAO contract not allowed");
        _transfer(sender, recipient, amount);
        _approve(sender, msg.sender, _allowances[sender][msg.sender] - amount);
        return true;
    }


    function getUserDetails(address userAddress)
        public
        view
        returns (
            string memory name,
            string memory phoneNumber,
            string memory addr,
            string memory aadhar
        )
    {
        UserDetails storage details = _userDetails[userAddress];
        return (details.name, details.phoneNumber, details.living_address, details.aadharCard);
    
    }
    


function setDAOContractAddress(address _daoContractAddress) public onlyOwner {
    require(_daoContractAddress != address(0), "Invalid DAO contract address");
    DAO_CONTRACT = _daoContractAddress;
}

}
