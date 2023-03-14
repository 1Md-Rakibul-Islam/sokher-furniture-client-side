import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categoriy from "./Categoriy";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/productsCategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <section>
        <h2 className="text-center font-bold text-primary text-3xl my-16">Categories</h2>
        <div className="flex flex-wrap gap-5 justify-items-center items-center">
          {categories.map((categoriy) => (
            <Link to={`/categories/${categoriy.categoriyName}`}>
              <Categoriy key={categoriy._id} categoriy={categoriy}></Categoriy>
            </Link>
          ))}
        </div>
    </section>
  );
};

export default CategorySection;
