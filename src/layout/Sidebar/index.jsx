import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "../../assets/Images";
import { SidebarItem } from "../../constants";

const SideNav = () => {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "Home"
  );

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const handleItemClick = (text) => {
    setActiveItem(text);
  };

  return (
    <div className="flex w-64 py-8 pl-6 pr-8 border-r border-payrole-borderColor">
      <div className="bg-white-800 w-64 flex flex-col justify-between md:block md:w-auto ">
        <div className="flex gap-2 pl-6 pr-8 text-payrole-black text-2xl font-bold mb-8">
          <img src={Images.payrole} alt="payrole"></img>
          <span>Payrole</span>
        </div>
        <div className="space-y-3">
          {SidebarItem?.map((item) => (
            <NavLink
              to={item?.to}
              onClick={() => handleItemClick(`${item?.text}`)}
              className={`flex gap-2 pl-6 pr-8 py-3 text-base font-medium ${
                activeItem === item?.text
                  ? "bg-payrole-lightGrey border border-solid border-payrole-borderColor rounded-lg text-payrole-primary"
                  : "text-payrole-gray"
              }`}
            >
              <img src={item?.img} alt="images"></img>
              <span>{item?.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
