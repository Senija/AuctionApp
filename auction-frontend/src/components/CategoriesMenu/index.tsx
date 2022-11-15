import React from "react";
import "./CategoriesMenu.css";
import categories from "../../data/categories.json";
import SingleCategory from "../SingleCategory";
import Container from "react-bootstrap/Container";

interface CategoryProps {
  id: Number;
  categoryName: string;
  parentId: number;
}

const CategoriesMenu = () => {
  return (
    
      <div className="categoriesContainer">
        CATEGORIES
        {categories.map((category) => (
          <SingleCategory
            categoryName={category.categoryName}
            categoryId={category.id}
          />
        ))}
      </div>
     
  );
};

export default CategoriesMenu;
