import React from "react";

const Categoriy = ({categoriy}) => {
    const {categoriyName, image, decription } = categoriy;
  return (
    <div className="w-[180px] h-[150px] flex flex-col justify-center items-center">
      <figure>
        <img className="w-[120px] h-[120px]  rounded-full" src={image} alt="Categoriy" />
      </figure>
      <h2 className="text-lg font-semibold">{categoriyName}</h2>
    </div>
  );
};

export default Categoriy;
