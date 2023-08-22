import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center gap-2">
          <button className="text-xl font-bold">
            <img
              className="w-[70px] rounded-md"
              src="https://regalfurniturebd.com/_nuxt/img/only-logo.681c31c.svg"
              alt=""
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
