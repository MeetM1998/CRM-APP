import React, { useState } from "react";
import ApexChart from "../../Charts";

const PaymentHistory = () => {
  const [chartData, setChartData] = useState(generateData(30));
  const [activeButton, setActiveButton] = useState(30);

  function generateData(days) {
    const series = [];
    const now = new Date();
    for (let i = 0; i < days; i++) {
      const randomValue = Math.floor(Math.random() * 100) + 1;
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      series.push([date.getTime(), randomValue]);
    }
    return series.reverse();
  }

  const handleTimestampChange = (days) => {
    setActiveButton(days);
    const newData = generateData(days);
    setChartData(newData);
  };

  return (
    <div className="w-full md:w-2/3 border border-payrole-borderColor p-6 rounded-2xl">
      <div className="flex justify-between mb-6">
        <div className="space-y-5">
          <h1 className="text-xl font-medium text-payrole-black">
            Payment History
          </h1>
          <h1 className="text-4xl font-medium text-payrole-black">
            $12,135
            <span className="text-2xl font-medium text-payrole-gray">.69</span>
          </h1>
          <h1 className="text-base font-normal text-payrole-gray">
            <span className="bg-payrole-lightGreen text-payrole-green px-2 py-1 rounded-full mr-2">
              +23%
            </span>
            vs last month
          </h1>
        </div>
        <div>
          <button
            onClick={() => handleTimestampChange(30)}
            className={`${
              activeButton === 30 ? "bg-payrole-gray100" : ""
            } px-4 py-2 rounded-full mr-2 text-sm font-medium`}
          >
            1M
          </button>
          <button
            onClick={() => handleTimestampChange(180)}
            className={`${
              activeButton === 180 ? "bg-payrole-gray100" : ""
            } px-4 py-2 rounded-full mr-2 text-sm font-medium`}
          >
            6M
          </button>
          <button
            onClick={() => handleTimestampChange(365)}
            className={`${
              activeButton === 365 ? "bg-payrole-gray100" : ""
            } px-4 py-2 rounded-full text-sm font-medium`}
          >
            1Y
          </button>
        </div>
      </div>
      <ApexChart chartData={chartData} />
    </div>
  );
};

export default PaymentHistory;
