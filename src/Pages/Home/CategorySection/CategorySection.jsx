import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categoriy from "./Categoriy";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://sokher-furniture.vercel.app/productsCategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <section>
      <dir className="mx-auto">
        <h2 className="text-center text-primary text-4xl my-16">Categories</h2>
        <div className="grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((categoriy) => (
            <Link to={`/categories/${categoriy.categoriyName}`}>
              <Categoriy key={categoriy._id} categoriy={categoriy}></Categoriy>
            </Link>
          ))}
        </div>
      </dir>
    </section>
  );
};

export default CategorySection;
