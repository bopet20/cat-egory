import React from 'react'

const CatList = ({ category, cats }) => {
  return (
    <div className="cat-list">
      <h3>{category}</h3>
      {cats && cats.map((cat, index) => (
        <img
          src={cat}
          alt={`${category} ${index}`}
          key={`${category} ${index}`}
          className="cat-list__image"
        />
      ))}
    </div>
  )
}

export default CatList