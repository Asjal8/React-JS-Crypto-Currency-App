import React, { useState } from "react";
import Balance from "./Balance";
import Details from "./Details";
import Lists from "./Lists";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("balance");
  return (
    <div className="w-full mt-10">
      <div
        className="border-b border-gray-200 p-4"
        data-aos="fade-up"
        data-aos-offset="400"
      >
        <button
          className={`text-sm font-semibold ${
            activeTab === "balance"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 ml-5 lg:ml-[450px] focus:outline-none`}
          onClick={() => setActiveTab("balance")}
        >
          Balance
        </button>
        <button
          className={`text-sm font-semibold ${
            activeTab === "details"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 mr-2 focus:outline-none`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`text-sm font-semibold ${
            activeTab === "list"
              ? "border-b-2 border-teal-500"
              : "border-transparent"
          } rounded-t py-2 px-4 mr-2 focus:outline-none`}
          onClick={() => setActiveTab("list")}
        >
          Lists
        </button>
      </div>
      <div className="p-4">
        {activeTab === "balance" && (
          <div
            className="grid lg:grid-cols-1 gap-6 mt-14"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <Balance />
          </div>
        )}
        {activeTab === "details" && (
          <div
            className="grid lg:grid-cols-1 gap-6 mt-14"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <Details />
          </div>
        )}
        {activeTab === "list" && (
          <div
            className="grid lg:grid-cols-1 gap-6 mt-14"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <Lists />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
