import React, { useState } from "react";

const PaymentForm = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="bg-black text-white py-8 rounded-lg">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium mb-2"
            >
              First name*
            </label>
            <input
              type="text"
              placeholder="Name"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium mb-2"
            >
              Last name*
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Company name (optional)
          </label>
          <input
            placeholder="Company name"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium mb-2">
            Country / Region *
          </label>
          <select
            placeholder="Country / Region"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            required
          >
            <option value="">Select a country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium mb-2"
          >
            Street address *
          </label>
          <input
            type="text"
            placeholder="Street Address"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc"
            className="mt-6 bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium mb-2">
            Town / City *
          </label>
          <input
            type="text"
            placeholder="Town / City"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium mb-2">
            State *
          </label>
          <input
            type="text"
            placeholder="State"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip-code" className="block text-sm font-medium mb-2">
            Zip code *
          </label>
          <input
            type="text"
            placeholder="ZIP Code"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="phone"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Email address *
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Order notes (optional)
          </label>
          <textarea
            placeholder="Order notes"
            className="bg-[#212121] border-[#212121] text-sm rounded-md h-44 focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Custom Checkbox */}
          <div
            onClick={handleCheckboxChange}
            className={`w-5 h-5  flex items-center justify-center cursor-pointer rounded-md ${
              checked ? "bg-[#fcc800]" : "bg-black border border-yellow-500"
            }`}
          >
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>

          {/* Label */}
          <label
            onClick={handleCheckboxChange}
            className="text-white text-sm cursor-pointer"
          >
            Ship to a different address?
          </label>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
