import React from 'react';
import { useState } from "react";

const CalcForm = () => {

  const [amount, setAmount] = useState(0);
  const [profit, setProfit] = useState(0);

  function calculateTotal() {
    setProfit(amount*0.042);
  }


  return (
    <div
      className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
      data-aos='fade-up'
      data-aos-offset='500'
    >
      {/* form */}
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
        <input
          className='input placeholder:text-darkblue'
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          placeholder='Enter total amount (USDT)'
        />
        {/* btn */}
        <button className='btn text-white px-8 flex self-start' onClick={calculateTotal} type="button">
          Calculate
        </button>
      </form>
      {/* text */}
      Note: With compound daily interest, your total amount increases every 24 hrs. Subsequently, daily profit will increase @ 3.2% every day.
      <div className='mt-24'>
        <div className='text-blue font-medium mb-4'>
          ESTIMATED 24 HOUR REVENUE:
        </div>
        <div className='text-[32px] font-bold mb-3'>
          <span className='text-blue'>${profit.toFixed(4)}</span>
        </div>
        <div className='text-gray-500 tracking-[1%]'>
          Revenue will change based on mining difficulty and Ethereum price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
