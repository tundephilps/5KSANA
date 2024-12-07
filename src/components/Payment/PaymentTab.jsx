import React, { useState } from "react";
import { FaCreditCard, FaMoneyBillAlt } from "react-icons/fa";
import PayTabCrypto from "./PayTabCrypto";
import PayTabCard from "./PayTabCard";

const CryptoPayTab = () => {
  return (
    <div>
      {/* Crypto pay content */}
      <h2 className="text-2xl font-bold mb-4">Crypto Pay</h2>
      <p>
        This is where the crypto payment options and functionality would be
        displayed.
      </p>
    </div>
  );
};

const CardPayTab = () => {
  return (
    <div>
      {/* Card pay content */}
      <h2 className="text-2xl font-bold mb-4">Card Pay</h2>
      <p>
        This is where the card payment options and functionality would be
        displayed.
      </p>
    </div>
  );
};

const PaymentTabs = () => {
  const [activeTab, setActiveTab] = useState("crypto-pay");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" text-white lg:p-8 p-0 rounded-lg">
      <div className="p-2 bg-[#1a1a1a] block rounded-lg w-40 mx-auto px-1">
        <div className="flex justify-center">
          <div
            className={`px-2 py-2  cursor-pointer transition-colors text-xs duration-300 ${
              activeTab === "crypto-pay"
                ? "bg-[#434343] text-white rounded-lg"
                : "bg-[#1a1a1a] "
            }`}
            onClick={() => handleTabClick("crypto-pay")}
          >
            {/* <FaMoneyBillAlt className="inline-block mr-2" /> */}
            Crypto Pay
          </div>
          <div
            className={`px-4 py-2  cursor-pointer transition-colors text-xs duration-300 ${
              activeTab === "card-pay"
                ? "bg-[#434343] text-white rounded-lg"
                : "bg-[#1a1a1a] "
            }`}
            onClick={() => handleTabClick("card-pay")}
          >
            {/* <FaCreditCard className="inline-block mr-2" /> */}
            Card Pay
          </div>
        </div>
      </div>

      {activeTab === "crypto-pay" ? <PayTabCrypto /> : <PayTabCard />}
    </div>
  );
};

export default PaymentTabs;
