import React from "react";

const PaymentForm = () => {
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
        <button
          type="submit"
          className="bg-[#fccb00] hover:bg-[#fccb00]/80 text-black font-medium rounded-full px-6 py-2.5 text-center inline-flex items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
