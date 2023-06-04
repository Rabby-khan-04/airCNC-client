import React from "react";
import Container from "../shared/Container/Container";
import { categories } from "./categoriesData.js";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  console.log(categories);
  return (
    <section>
      <Container>
        <div className="pt4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((category, i) => (
            <CategoryBox key={i} label={category.label} icon={category.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
