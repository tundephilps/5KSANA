import React from "react";

const BetHistory = () => {
  // Sample data for bet history
  const bets = [
    { amount: "0.1000BTC", time: "19:30" },
    { amount: "0.1000BTC", time: "19:30" },
    { amount: "0.1000BTC", time: "19:30" },
    { amount: "0.1000BTC", time: "19:30" },
    { amount: "0.1000BTC", time: "19:30" },
  ];

  return (
    <div className=" text-white py-8 rounded-md shadow-md w-full ">
      {/* Header */}
      <h3 className="text-lg font-semibold mb-4">Bet history</h3>

      {/* Bet List */}
      <div className="space-y-2">
        {bets.map((bet, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#303030] p-3 rounded-md"
          >
            <span>{bet.amount}</span>
            <span className="text-gray-400">{bet.time}</span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="w-full mt-4 text-[#fcc800] font-semibold text-center hover:underline">
        View more
      </button>
    </div>
  );
};

export default BetHistory;
