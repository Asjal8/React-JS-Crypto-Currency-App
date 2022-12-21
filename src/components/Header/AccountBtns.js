import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const AccountBtns = () => {
  const { currentAccount, connectWallet, handleChange, apprTransaction } =
    useContext(TransactionContext);
  const handleSubmit = (e) => {
    //const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    //if (!addressTo || !amount || !keyword || !message) return;

    //sendTransaction();
    apprTransaction();
  };

  return (
    <div className="flex items-center font-medium">
      {/* link btn */}
      {/* <a className='hover:text-blue transition' href='#'> */}
      {/* Login */}
      {/* </a> */}

      {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          // className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">Connect Now</p>
        </button>
      )}

      {/* separator */}
      {/* <span className='mx-6 text-white/20 font-thin'>|</span> */}
      {/* register btn */}
      {/* <button className='btn h-[52px] text-base px-8'>Connect</button> */}
    </div>
  );
};

export default AccountBtns;
