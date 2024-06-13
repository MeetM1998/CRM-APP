import React from "react";
import Images from "../../../assets/Images";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-9">
      <div className="w-full md:w-2/3 border border-payrole-borderColor p-6 rounded-2xl flex justify-around">
        <div className="flex items-start space-x-5">
          <img src={Images.outstanding} alt="outstanding" />
          <div className="flex flex-col">
            <h1 className="text-base font-medium text-payrole-darkGray mb-4">
              Total Outstanding
            </h1>
            <p className="text-3xl font-medium text-payrole-black">
              $58,764
              <span className="text-lg text-payrole-gray">.25</span>
            </p>
          </div>
        </div>
        <div className="border border-payrole-borderColor"></div>
        <div className="flex items-start space-x-5">
          <img src={Images.upcoming} alt="outstanding" />
          <div className="flex flex-col">
            <h1 className="text-base font-medium text-payrole-darkGray mb-4">
              Upcoming Payment
            </h1>
            <p className="text-3xl font-medium text-payrole-black">
              April 1st
              <span className="text-lg text-payrole-gray">, 2022</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 border border-payrole-borderColor p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-base font-medium text-payrole-darkGray">
            Withdraw Method
          </h1>
          <img src={Images.menu} alt="menu" />
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <img src={Images.paypal} alt="paypal" />
            <div>
              <p className="text-base font-medium text-payrole-black">PayPal</p>
              <p className="text-base font-medium text-payrole-darkGray">
                Verified
              </p>
            </div>
          </div>
          <img src={Images.connected} alt="connected" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
