import React from 'react';

const CryptoTable = () => {
  return (
    //<div className="m-10 h-screen w-screen bg-black text-yellow">
    <div className="m-10 h-screen w-screen flex items-center justify-center text-yellow">

      <table className="min-w-full text-white border-yellow">
        <thead>
          <tr>
            <th className="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Address</th>
            <th className="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Funds in user's wallet</th>
            <th className="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Funds in DAO</th>
          
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow">
          {/* Row 1 */}
          <tr>
            <td className="px-6 py-10 whitespace-nowrap">Bitcoin</td>
            <td className="px-6 py-10 whitespace-nowrap">Bitcoin is an innovative payment system and a new kind of money.</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 233,544,092,111 USD</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 27,556,341,001 USD</td>
          </tr>
          {/* Row 2 */}
          <tr>
            <td className="px-6 py-10 whitespace-nowrap">Ethereum</td>
            <td className="px-6 py-10 whitespace-nowrap">Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 78,145,725,085 USD</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 2,123,854,075 USD</td>
          </tr>
          {/* Row 3 */}
          <tr>
            <td className="px-6 py-10 whitespace-nowrap">Tether</td>
            <td className="px-6 py-10 whitespace-nowrap">Tether tokens are assets that move across the blockchain just as easily as other digital currencies.</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 72,492,161,421 USD</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 51,116,487,015 USD</td>
          </tr>
          {/* Row 4 */}
          <tr>
            <td className="px-6 py-10 whitespace-nowrap">Polkadot</td>
            <td className="px-6 py-10 whitespace-nowrap">Parachain-to-parachain communication is now enabled with XCM. Polkadot's vision of cross-chain interoperability starts here.</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 10,077,446,351 USD</td>
            <td className="px-6 py-10 whitespace-nowrap">$ 681,300,745 USD</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
