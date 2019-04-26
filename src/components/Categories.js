import React, { useState, useEffect } from 'react'
import CatList from './CatList'

const Categories = ({ catUrl }) => {
  const [categories, setCategories] = useState({})
  const [catFocus, setCatFocus] = useState('')

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
    const category = e.target[0].value.trim().toLowerCase()
    if (category) {
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
      setCatFocus(category)
      e.target[0].value = ''
    }
  }

  return (
    <>
      <div className="categories">
        <form
          className="categories__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="category" />
          <input
            autoComplete="off"
            className="categories__input"
            type="text"
            name="category"
            id="category"
            placeholder="Cat-egorize"
          />
          <button
            type="submit"
            className="button"
          >
            Save
          </button>
        </form>
        <div className="categories__list">
        {!!Object.keys(categories).length &&
          Object.keys(categories).map((label) => (
            <button
              key={label}
              type="button"
              className="button button--secondary categories__item"
              onClick={() => setCatFocus(label)}
            >
              <span className="categories__label">
                {label}
              </span>
              <span className="categories__count">
                {categories[label].length}
              </span>
            </button>
          ))
        }
        </div>
      </div>
      {catFocus &&
        <CatList category={catFocus} cats={categories[catFocus]}/>
      }
    </>
  )
}

export default Categories