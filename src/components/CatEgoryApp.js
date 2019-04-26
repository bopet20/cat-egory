import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header'
import CatLoader from './CatLoader';
import Categories from './Categories';

const CatEgoryApp = () => {
  const [catUrl, setCatUrl] = useState('')

  useEffect(() => {
    fetchRandomCat()
  }, [])

  const fetchRandomCat = async () => {
    try {
      const response = await axios.get('https://aws.random.cat/meow')
      const cat = await response.data
      setCatUrl(cat.file)
    } catch (error) {
      throw new Error("Failed to fetch random cat")
    }
  }

  return (
    <>
      <Header/>
      <div className="container">
        <main className="content-container">
          <CatLoader catUrl={catUrl} fetchRandomCat={fetchRandomCat} />
          <Categories catUrl={catUrl}/>
        </main>
      </div>
    </>
  )
}

export default CatEgoryApp;
