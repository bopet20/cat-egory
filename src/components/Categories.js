import React, { useState, useEffect } from 'react'

const Categories = ({ catUrl }) => {
  const [categories, setCategories] = useState({})

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem('categories'))
    if (savedCategories) {
      setCategories(savedCategories)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  const handleSubmit = (e) => {
    e.preventDefault()
    const category = e.target[0].value
    const oldCategories = JSON.parse(localStorage.getItem('categories'))
    let newCategories = {}
    // Checks if saved categories exist
    if (oldCategories && !!Object.keys(oldCategories).length) {
      // Checks if category already exists
      if (oldCategories[category]) {
        const updatedCategory = [...oldCategories[category]]
        updatedCategory.push(catUrl)
        newCategories = {
          ...oldCategories,
          [category]: updatedCategory
        }
      } else {
        newCategories = {
          ...oldCategories,
          [category]: [catUrl]
        }
      }
    } else {
      newCategories = { [category]: [catUrl] }
    }
    setCategories(newCategories)
    e.target[0].value = ''
  }

  return (
    <div className="categories">
      <form
        className="categories__form"
        onSubmit={handleSubmit}
      >
        <label>
          Cat-egorize:
          <input
            type="text"
            name="category"
            id="category"
          />
        </label>
        <button
          type="submit"
          className="cat-loader__button"
        >
          Save
        </button>
      </form>
      <div className="categories__list">
      {!!Object.keys(categories).length &&
        Object.keys(categories).map((label) => (
          <div className="categories__item" key={label}>
            {`${label} ${categories[label].length}`}
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Categories