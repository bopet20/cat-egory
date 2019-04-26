import React from 'react'

const CatList = ({ category, cats }) => {
  return (
    <div className="cat-list">
      <h3 className="cat-list__header">
        <span className="cat-list__category">
          {category}
        </span>
        <span className="cat-list__count">
          {cats.length}
        </span>
      </h3>
      <div className="cat-list__content">
        {cats && cats.map((cat, index) => (
          <img
            src={cat}
            alt={`${category} ${index}`}
            key={`${category} ${index}`}
            className="cat-list__image"
          />
        ))}
      </div>
    </div>
  )
}

export default CatList