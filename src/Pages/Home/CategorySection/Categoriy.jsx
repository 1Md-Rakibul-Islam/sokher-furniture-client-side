import React from "react";

const Categoriy = ({categoriy}) => {
    const {categoriyName, image, decription } = categoriy;
  return (
    <div className="card hover:border hover:border-primary w-80 shadow-xl">
      <figure>
        <img className="w-full h-40" src={image} alt="Categoriy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {categoriyName}
          <div className="badge badge-secondary">Category</div>
        </h2>
        <p>{decription}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Furniture</div>
        </div>
      </div>
    </div>
  );
};

export default Categoriy;
