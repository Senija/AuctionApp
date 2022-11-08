import React from 'react'
import "./SingleCategory.css"

const SingleCategory :React.FC<{
   categoryName: string;
   categoryId: number;
}>= ({categoryName, categoryId}) => {
  return (
    <div className='categoryDiv'>{categoryName}</div>
  )
}

export default SingleCategory