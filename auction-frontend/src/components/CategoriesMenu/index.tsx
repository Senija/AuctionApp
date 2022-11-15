import React from "react";
import "./CategoriesMenu.css";
import categories from "../../data/categories.json";
import SingleCategory from "../SingleCategory";
import Container from "react-bootstrap/Container";
import axios 

interface CategoryProps {
  id: Number;
  categoryName: string;
  parentId: number;
}

const CategoriesMenu = () => {
  return (
    //<Container fluid="md">
      <div className="ulDiv">
        CATEGORIES
        {categories.map((category) => (
          <SingleCategory
            categoryName={category.categoryName}
            categoryId={category.id}
          />
        ))}
      </div>
     //</Container>
  );
};

export default CategoriesMenu;
