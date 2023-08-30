import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoriyCard = ({ categoriy }) => {
  const { categoriyName, image, decription } = categoriy;

  console.log(categoriy);
  return (
    <div className="w-full sm:max-w-[260px] h-[350px] mx-auto bg-white ">
      <Link to={`/categories/${categoriy.categoriyName}`}>
        <div>
          <img
            src={image}
            className="w-full max-w-[260px] h-[350px] shadow-2xl"
            alt=""
          />
          <div className="flex justify-center items-center -mt-24">
            <button className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 mx-2">
              {categoriyName}
              <FaArrowRight className="text-2xl bg-purple-700 p-1 text-white rounded-full   animate-pulse" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriyCard;
