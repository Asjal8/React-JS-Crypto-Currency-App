import React from "react";
import Tabs from "./Tabs";

import { HiUser } from "react-icons/hi";

const AccountComp = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* item */}
        <div className="flex items-center gap-x-6">
          {/* item icon */}
          <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
            <HiUser />
          </div>
          {/* item text */}
          <div>
            <div className="text-2xl font-bold lg:text-[25px] lg:mb-1">
              Wallet ID
            </div>
            <div className="text-gray">0x454894f5sa4f8966</div>
            <button className="btn px-6 mt-2">Learn more</button>
          </div>
        </div>
        <Tabs />
      </div>
    </section>
  );
};

export default AccountComp;
