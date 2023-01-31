import React, { FC, useContext } from 'react'
import ThemeContext from '@/context/ThemeContext'
import styles from './main.module.scss'

import AuthBlock from '@/components/blocks/AuthBlock/auth.block'
import ThemeToggler from '@/components/blocks/ThemeToggler/theme-toggler.block'

const MainPage: FC = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className={`${styles.wrapper} ${!isDark && styles['wrapper-light']}`}>
      <AuthBlock />
      <ThemeToggler />
    </div>
  )
}

export default MainPage
