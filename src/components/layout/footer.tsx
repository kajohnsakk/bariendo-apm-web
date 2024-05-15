import React from "react";
import Link from "next/link";

const menus = [
  {
    name: "Booking",
    link: "/services",
  },
  {
    name: "My Appointments",
    link: "/appointments",
  },
  {
    name: "Setting",
    link: "/setting",
  },
];

const Footer = () => {
  return (
    <div className="shadow-md bottom-0 bg-white w-full border-2 h-16">
      <div className="grid grid-cols-3 text-center h-full font-semibold">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.link}
            className="flex justify-center items-center text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
