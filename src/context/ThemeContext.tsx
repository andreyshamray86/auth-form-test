import React, { createContext, useState, ReactNode } from 'react'

type ContextType = {
  toggleDark: () => void
  isDark: boolean
}

const defaultContext: ContextType = {
  toggleDark: () => {
    console.info('method to toggle theme')
  },
  isDark: true,
}

const ThemeContext = createContext(defaultContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const context: ContextType = {
    toggleDark: () => {
      setIsDark(!isDark)
    },
    isDark,
  }

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
