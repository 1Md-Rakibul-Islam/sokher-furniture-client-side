import React from "react";

const Categoriy = ({categoriy}) => {
    const {categoriyName, image, decription } = categoriy;
  return (
    <div className="avatar md:w-[160px] md:h-[150px] w-[100px] h-[120px] flex flex-col items-center">
      <div className="md:w-24 w-16 mask mask-hexagon">
        <img src={image} alt="Categoriy"/>
      </div>
      <h2 className="md:text-lg text-md font-semibold text-center">{categoriyName}</h2>
    </div>
  );
};

export default Categoriy;
