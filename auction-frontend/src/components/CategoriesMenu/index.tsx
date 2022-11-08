import React from 'react'
import "./CategoriesMenu.css"
import categories from "../../data/categories.json"
import SingleCategory from '../SingleCategory'

interface CategoryProps{
    id:Number;
    categoryName: string;
    parentId: number;
}

const CategoriesMenu = () => {
  return (
    
        <div className='ulDiv'>
            CATEGORIES
            {categories.map(category =>(
                <SingleCategory categoryName={category.categoryName} categoryId={category.id} />
            ))}
        </div>

    
  )
}

export default CategoriesMenu