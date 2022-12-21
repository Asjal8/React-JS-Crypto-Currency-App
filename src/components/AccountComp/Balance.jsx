import React from "react";

const Balance = () => {
  return (
    <div>
      <h1 class="text-xl mb-10">Yield Balance</h1>
      <div class="overflow-auto rounded-lg shadow hidden md:block">
        <table class="w-full">
          <thead class=" border-b-2 border-gray-200">
            <tr>
              <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">
                Assets
              </th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                Balance
              </th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center"></th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                Referrals
              </th>
              <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center"></th>
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
                <button class="p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-gray-600 rounded-lg bg-opacity-50">
                  Withdraw
                </button>
              </td>
              <td class="p-3 text-sm text-center text-gray-400 whitespace-nowrap">
                0
              </td>
              <td class="p-3 text-sm text-center text-gray-400 whitespace-nowrap">
                <button class="p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-gray-600 rounded-lg bg-opacity-50">
                  Get Reward
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        <div class="bg-gray-600 space-y-3 p-4 rounded-lg shadow">
          <div class="flex items-center space-x-2 text-sm">
            <div>Assets</div>
          </div>
          <div class="flex items-center ml-10 gap-6 space-x-2 text-sm">
            <div class="text-gray-400">0</div>
            <div>
              <button class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                Withdraw
              </button>
            </div>
          </div>
          <div class="flex items-center ml-10 gap-6 space-x-2 text-sm">
            <div class="text-gray-400">0</div>
            <div>
              <button class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                Get Rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
