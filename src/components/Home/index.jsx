import React from "react";
import TransactionHistory from "./TransactionHistory";
import Header from "../../layout/Header";
import PaymentHistory from "./PaymentHistory";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full ">
      <Header />

      <main className="flex-grow bg-white px-8 py-6 space-y-10">
        <Cards />
        <div className="flex sm:flex-col md:flex-row space-x-9">
          <PaymentHistory />
          <TransactionHistory />
        </div>
      </main>
    </div>
  );
};

export default Home;
