import React from "react";
import Or from "../assets/or.png";

import Card1 from "../assets/Card1.png";

import Card2 from "../assets/Card2.png";

const PayTabCard = () => {
  return (
    <div className="py-8">
      <p className="py-4 text-2xl font-semibold">Shipping method</p>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Name on Card *
        </label>
        <input
          type="text"
          placeholder="Name"
          className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Card Number *
        </label>
        <input
          type="text"
          placeholder="0000 000 0000"
          className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium mb-2"
          >
            Expiry
          </label>
          <input
            type="date"
            placeholder=""
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-medium mb-2">
            CVV
          </label>
          <input
            type="text"
            placeholder="xxxx"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            required
          />
        </div>
      </div>
      <img src={Or} className="w-full py-4" />

      <button
        type="button"
        class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm w-full justify-center py-1 text-center inline-flex items-center  me-2 mb-2"
      >
        <img src={Card1} className="h-9 object-cover" />
      </button>
      <button
        type="button"
        class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm w-full justify-center py-3.5 text-center inline-flex items-center  me-2 mb-2"
      >
        <img src={Card2} className="h-4 object-cover" />
      </button>

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
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <button
          type="submit"
          className="bg-[#fccb00] hover:bg-[#fccb00]/80 text-black font-medium rounded-full text-center w-full py-2.5 justify-center inline-flex items-center"
        >
          Pay
        </button>
      </>
    </div>
  );
};

export default PayTabCard;
