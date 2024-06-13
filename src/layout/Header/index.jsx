import React from "react";
import Images from "../../assets/Images";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center px-8 py-6">
      <div className="space-y-3">
        <h1 className="text-payrole-black text-3xl font-semibold">
          Good morning, Chris
        </h1>
        <p className="text-base text-gray-700 font-normal">
          Here's your dashboard overview.
        </p>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex justify-center items-center px-3 py-3 bg-blue-500 text-white rounded-full space-x-3">
          <span className="text-sm font-medium">Create A Contract</span>
          <img src={Images.plus} alt="plus" />
        </button>
        <img src={Images.notification} alt="notification" />
        <div className="flex items-center">
          <img
            src={Images.profile}
            alt="Chris"
            className="w-8 h-8 rounded-ful mr-2"
          />
          <div>
            <p className="text-sm font-medium text-payrole-black">
              Chris Miguel
            </p>
            <p className="text-xs font-normal text-payrole-gray">Freelancer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
