import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { useGlobalContext } from './context'

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" type="button" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default React.memo(ThemeToggle)
