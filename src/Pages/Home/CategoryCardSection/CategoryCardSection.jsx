import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriyCard from './CategoriyCard';

const CategoryCardSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/productsCategories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    }, []);
    return (
      <section className=' md:my-20 my-10'>
        <h2 className="text-left font-bold text-primary text-2xl my-10 mx-5">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-2 justify-center items-center md:mx-80">
            {categories.map((categoriy) => (
              <Link to={`/categories/${categoriy.categoriyName}`}>
                <CategoriyCard key={categoriy._id} categoriy={categoriy}></CategoriyCard>
              </Link>
            ))}
          </div>
      </section>
      )};

export default CategoryCardSection;
