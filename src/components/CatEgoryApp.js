import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CatLoader from './CatLoader';
import Categories from './Categories';

const CatEgoryApp = () => {
  const [catUrl, setCatUrl] = useState('')

  useEffect(() => {
    fetchRandomCat()
  }, [])

  const fetchRandomCat = async () => {
    try {
      const response = await axios.get('http://aws.random.cat/meow')
      const cat = await response.data
      setCatUrl(cat.file)
    } catch (error) {
      throw new Error("Failed to fetch random cat")
    }
  }

  return (
      <div className="container">
        <h2>Cat-egory</h2>
        <CatLoader catUrl={catUrl} fetchRandomCat={fetchRandomCat} />
        <Categories catUrl={catUrl}/>
      </div>
  )
}

export default CatEgoryApp;
