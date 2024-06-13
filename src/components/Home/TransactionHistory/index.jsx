import React from "react";
import Images from "../../../assets/Images";
import { TransferHistory } from "../../../constants";

const TransactionHistory = () => {
  return (
    <div className="w-full md:w-2/4 border border-payrole-borderColor p-6 rounded-2xl space-y-5">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium text-payrole-lightBlack">
          Transaction History
        </p>
        <p className="text-sm font-semibold text-payrole-primary">See All</p>
      </div>
      {TransferHistory?.map((item, index) => (
        <div className="flex justify-between mb-3" key={index}>
          <div className="flex space-x-3">
            <img src={Images.paypal} alt="paypal" />
            <div>
              <p className="text-base font-medium text-payrole-black">
                {item?.name}
              </p>
              <p className="text-sm font-medium text-payrole-darkGray">
                {item?.company}
              </p>
            </div>
          </div>
          <div>
            <p className="text-base font-medium text-payrole-black">
              {item?.amount}
            </p>
            <p className="text-sm font-medium text-payrole-darkGray">
              {item?.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
