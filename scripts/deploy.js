const ethers = require('ethers');

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const wallet = new ethers.Wallet('your-private-key', provider);

    const myToken = new ethers.Contract('MyTokenAddress', MyTokenABI, wallet);

    // Prepare Permit Data
    const nonce = await myToken.nonces(wallet.address);
    const expiry = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

    const domain = {
        name: 'MyToken',
        version: '1',
        chainId: 1,  // Replace with actual chainId
        verifyingContract: myToken.address
    };

    const types = {
        Permit: [
            { name: 'holder', type: 'address' },
            { name: 'spender', type: 'address' },
            { name: 'nonce', type: 'uint256' },
            { name: 'expiry', type: 'uint256' },
            { name: 'allowed', type: 'bool' }
        ]
    };

    const value = {
        holder: wallet.address,
        spender: 'SimpleDAOAddress',  // Replace with actual DAO address
        nonce: nonce.toString(),
        expiry: expiry.toString(),
        allowed: true
    };

    const signature = await wallet._signTypedData(domain, types, value);
    const { v, r, s } = ethers.utils.splitSignature(signature);

    // You can now use v, r, s in the permit function
    console.log('v:', v);
    console.log('r:', r);
    console.log('s:', s);
}

main().catch((error) => {
    console.error(error);
});