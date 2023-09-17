import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const localValue = localStorage.getItem('darkTheme')

  if (localValue) {
    return localValue === 'true'
  }

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  return prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')

  // * For Dark Theme
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)

    return () => {}
  }, [isDarkTheme])

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    document.body.classList.toggle('dark-theme', newTheme)
    localStorage.setItem('darkTheme', newTheme)
  }

  const handleSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, handleSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
