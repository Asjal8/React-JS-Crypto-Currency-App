import React, { useState } from "react";
import { cardFarm, cardStake } from "../../data";
import Referrals from "./Referrals";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("farming");
  return (
    <div className="w-full">
      <div
        className="border-b border-gray-200 p-4"
        data-aos="fade-up"
        data-aos-offset="400"
      >
        <button
          className={`text-sm font-semibold ${
            activeTab === "farming"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 mr-2 lg:ml-[400px] focus:outline-none`}
          onClick={() => setActiveTab("farming")}
        >
          Farming
        </button>
        <button
          className={`text-sm font-semibold ${
            activeTab === "staking"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 mr-2 focus:outline-none`}
          onClick={() => setActiveTab("staking")}
        >
          Stacking
        </button>
        <button
          className={`text-sm font-semibold ${
            activeTab === "referral"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 mr-2 focus:outline-none`}
          onClick={() => setActiveTab("referral")}
        >
          Referrals
        </button>
      </div>
      <div className="p-4">
        {activeTab === "farming" && (
          <div
            className="grid lg:grid-cols-3 gap-6 mt-14"
            data-aos="fade-down"
            data-aos-offset="400"
          >
            {cardFarm.map((card) => (
              <div className="shadow-lg rounded-lg">
                <div className="p-5">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-lg font-normal text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "staking" && (
          <div
            className="grid lg:grid-cols-3 gap-6 mt-14"
            data-aos="fade-down"
            data-aos-offset="400"
          >
            {cardStake.map((card) => (
              <div className="shadow-lg rounded-lg">
                <div className="p-5">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-lg font-normal text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "referral" && (
          <div>
            <Referrals />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
