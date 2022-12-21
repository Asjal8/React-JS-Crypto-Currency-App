import React from "react";

const Details = () => {
  return (
    <div>
      <h1 class="text-xl mb-10">Yield Details</h1>
      <div class="overflow-auto rounded-lg shadow md:block">
        <table class="w-full">
          <thead class=" border-b-2 border-gray-200">
            <tr>
              <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">
                Assets
              </th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                Amount
              </th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                Time
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="">
              <td class="p-3 text-sm text-center text-gray-400 whitespace-nowrap">
                USSDT
              </td>
              <td class="p-3 text-sm text-center text-gray-400 whitespace-nowrap">
                0
              </td>
              <td class="p-3 text-sm text-center text-gray-400 whitespace-nowrap">
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
