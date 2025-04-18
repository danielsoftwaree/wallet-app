import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PaymentDueBlock: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-xs text-black">No Payment Due</h3>
      </div>

      <p className="text-xs text-[#727272] mt-2 leading-relaxed">
        You&apos;ve paid your September balance.
      </p>

      <div className="flex-grow flex items-center justify-center mt-auto">
        <div className=" rounded-full p-4 mb-4">
          <FontAwesomeIcon
            size="2xl"
            icon={faCheckCircle}
            className="h-16 w-16 text-green-400"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDueBlock;
