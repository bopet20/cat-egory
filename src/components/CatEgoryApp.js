import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CatLoader from './CatLoader';
import Categories from './Categories';
import { CatList } from './CatList';

const CatEgoryApp = () => {
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
      <div className="container">
        <h2>Cat-egory</h2>
        <CatLoader catUrl={catUrl} setRandomCat={setRandomCat} />
        <Categories catUrl={catUrl}/>
        <CatList />
      </div>
  )
}

export default CatEgoryApp;
