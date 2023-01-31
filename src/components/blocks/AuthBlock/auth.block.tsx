import React, { FC, useContext, useState } from 'react'
import ThemeContext from '@/context/ThemeContext'
import styles from './auth.module.scss'

import Input from '@/components/ui/Form/Input/input.form'
import Button from '@/components/ui/Button/button.ui'
import Loader from '@/components/ui/Loader/loader.ui'

const AuthBlock: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const [user, setUser] = useState<string | null>(null)
  const { isDark } = useContext(ThemeContext)

  const loginHandler = async () => {
    setError(null)
    setLoading(true)
    const user = {
      email,
      password,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }

    try {
      const response = await fetch('/api/auth', requestOptions)
      const data = await response.json()
      if (data.token) {
        setUser(data.email)
      }
      if (data.error) {
        setError(data.error)
      }
    } catch (error: unknown) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const clearHandler = () => {
    setEmail('')
    setPassword('')
    setError(null)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={`${styles.wrapper} ${!isDark && styles['wrapper-light']}`}>
      {!user ? (
        <>
          <p className={`${styles.title} ${!isDark && styles['title-light']}`}>
            Enter your martian credentials to login
          </p>
          <div className={styles['inputs-wrapper']}>
            <Input
              label="Email"
              name="email"
              value={email}
              onChange={setEmail}
              type="text"
            />
            <Input
              label="Password"
              name="password"
              value={password}
              onChange={setPassword}
              type="password"
            />
          </div>
          {error ? (
            <p className={styles['error-message']}>{error as string}</p>
          ) : null}
          <div className={styles['buttons-wrapper']}>
            <Button label="Login" onClick={loginHandler} />
            <Button label="Clear" onClick={clearHandler} />
          </div>
        </>
      ) : (
        <p className={styles.title}>Hello {user}</p>
      )}
    </div>
  )
}

export default AuthBlock
