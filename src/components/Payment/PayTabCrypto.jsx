import React, { useState } from "react";

const International = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <p>Total</p>
          <p>To Pay</p>
        </div>

        <div>
          <p>0.10000BTC</p>
          <p className="text-[#fccb00]">0.10000BTC</p>
        </div>
      </div>
      <p className="text-xs text-[#cfcfcf] py-6">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </p>
      <button
        type="submit"
        className="bg-[#fccb00] hover:bg-[#fccb00]/80 text-black font-medium rounded-full text-center w-full py-2.5 justify-center inline-flex items-center"
      >
        Pay
      </button>
    </>
  );
};

const PayTabCrypto = () => {
  const [selectedOption, setSelectedOption] = useState("international-free");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <p>Painting Embrodery- Unknown Bitcoin x1</p>
        <p className="text-[#fcc800]">0.10000BTC</p>
      </div>
      <p className="py-4 text-2xl font-semibold">Shipping method</p>

      <div className="bg-black text-white  rounded-lg">
        <div className="flex flex-col gap-4 items-start  mb-4">
          <div className="bg-[#1a1a1a] px-6 rounded-xl w-full py-6">
            <label className="mr-4 font-medium flex items-center">
              <input
                type="radio"
                name="payment-option"
                value="international-free"
                checked={selectedOption === "international-free"}
                onChange={() => handleOptionChange("international-free")}
                className="mr-2  text-[#fccb00] focus:ring-[#fccb00] accent-white  h-4 w-4"
              />
              International-Free
            </label>
          </div>

          <div className="bg-[#1a1a1a] px-6 rounded-xl w-full py-6">
            <label className="font-medium flex items-center">
              <input
                type="radio"
                name="payment-option"
                value="btc"
                checked={selectedOption === "btc"}
                onChange={() => handleOptionChange("btc")}
                className="mr-2  text-[#fccb00] focus:ring-[#fccb00] accent-white h-4 w-4"
              />
              BTC
            </label>
          </div>
        </div>
        {selectedOption === "international-free" ? (
          <International />
        ) : (
          <p>You selected BTC payment option.</p>
        )}
      </div>
    </div>
  );
};

export default PayTabCrypto;
