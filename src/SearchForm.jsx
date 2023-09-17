import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { handleSearchTerm } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value

    if (!searchValue) return
    handleSearchTerm(searchValue)
  }

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="cat"
          className="form-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
