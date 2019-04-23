import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CatLoader = () => {
  const [catUrl, setCatUrl] = useState('')

  useEffect(() => {
    setRandomCat()
  }, [])

  const setRandomCat = async () => {
    const cat = await fetchRandomCat()
    setCatUrl(cat.file)
  }

  const fetchRandomCat = async () => {
    try {
      const response = await axios.get('http://aws.random.cat/meow')
      return response.data
    } catch (error) {
      throw new Error("Failed to fetch random cat")
    }
  }

  return (
    <div className="cat-loader">
      {catUrl &&
        <img
          src={catUrl}
          className="cat-loader__image"
          alt="Random cat"
        />}
        <div className="cat-loader__form">
          <button
            type="button"
            onClick={() => setRandomCat()}
          >
            next
          </button>
        </div>
    </div>
  )
}

export default CatLoader