import React from "react";

const CryptoTable = () => {
  return (
<div class=" overflow-x-auto">
  <table className="min-w-full text-white border-yellow">
    <thead>
      <tr>
        <th class="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Address</th>
        <th class="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Funds in user's wallet</th>
        <th class="px-8 py-10 text-left text-m font-medium uppercase tracking-wider">Funds in DAO</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-yellow">
      {/* <!-- Row 1 --> */}
      <tr>
        <td class="px-6 py-10 whitespace-nowrap">0x0C9751BD015584D77F1A4980B40E0DCA8F8B1659</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 1,275 USD</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 23,344 USD</td>
      </tr>
      {/* <!-- Row 2 --> */}
      <tr>
        <td class="px-6 py-10 whitespace-nowrap">0x7880E301FB704C98E7F15EE6216FAEC46965F82</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 3,467 USD</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 78,456 USD</td>
      </tr>
      {/* <!-- Row 3 --> */}
      <tr>
        <td class="px-6 py-10 whitespace-nowrap">0x9697C4D27C241BD427E4340A36A81E0761E306E9</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 52,278 USD</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 72,493 USD</td>
      </tr>
      {/* <!-- Row 4 --> */}
      <tr>
        <td class="px-6 py-10 whitespace-nowrap">0x2455161350842927BAEAEDD260E2AE6EA991C8E6</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 34,262 USD</td>
        <td class="px-6 py-10 whitespace-nowrap">$ 10,077 USD</td>
      </tr>
      {/* <!-- Add more rows as needed --> */}
    </tbody>
  </table>
</div>

  
  );
};

export default CryptoTable;
