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
      <section className='mx-5 mb-20'>
        <h2 className="text-center font-bold text-2xl my-6 mx-5">Categories</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((categoriy) => (
              <Link to={`/categories/${categoriy.categoriyName}`}>
                <CategoriyCard key={categoriy._id} categoriy={categoriy}></CategoriyCard>
              </Link>
            ))}
          </div>
      </section>
      )};

export default CategoryCardSection;
