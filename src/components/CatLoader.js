import React from 'react'

const CatLoader = ({ catUrl, fetchRandomCat }) => {
  return (
    <div className="cat-loader">
      {catUrl &&
        <img
          src={catUrl}
          className="cat-loader__image"
          alt="Random cat"
        />}
        <div className="cat-loader__action">
          <button
            type="button"
            className="button button--lg cat-loader__button"
            onClick={() => fetchRandomCat()}
          >
            New Picture
          </button>
        </div>
    </div>
  )
}

export default CatLoader