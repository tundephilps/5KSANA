import React from "react";
import PaymentForm from "../components/PaymentForm";
import PaymentTabs from "../components/PaymentTab";

const Payment = () => {
  return (
    <div className=" lg:px-[80px] px-4 py-8 bg-black text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <PaymentForm />
        <PaymentTabs />
      </div>
    </div>
  );
};

export default Payment;
