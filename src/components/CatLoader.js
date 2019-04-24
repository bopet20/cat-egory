import React from 'react'

const CatLoader = ({ catUrl, setRandomCat }) => {
  return (
    <div className="cat-loader">
      {catUrl &&
        <img
          src={catUrl}
          className="cat-loader__image"
          alt="Random cat"
        />}
        <div className="cat-loader__actions">
          <button
            type="button"
            className="cat-loader__button"
            onClick={() => setRandomCat()}
          >
            next
          </button>
        </div>
    </div>
  )
}

export default CatLoader