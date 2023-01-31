import React, { FC, useContext } from 'react'
import ThemeContext from '@/context/ThemeContext'
import styles from './theme-toggler.module.scss'

const ThemeToggler: FC = () => {
  const { toggleDark, isDark } = useContext(ThemeContext)

  const themeToggleHandler = () => {
    toggleDark()
  }

  return (
    <div className={`${styles.wrapper} ${!isDark && styles['wrapper-light']}`}>
      <div
        className={`${isDark ? styles['circle-night'] : styles['circle-day']}`}
        onClick={themeToggleHandler}
      >
        <div className={`${isDark ? styles.shadow : styles.noshadow}`}></div>
      </div>
    </div>
  )
}

export default ThemeToggler
