import React, {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useContext,
} from 'react'
import ThemeContext from '@/context/ThemeContext'
import styles from './input.module.scss'

interface InputProps {
  label: string
  name: string
  value: string
  type: 'text' | 'password'
  onChange: Dispatch<SetStateAction<string>>
}

const Input: FC<InputProps> = ({ label, name, value, onChange, type }) => {
  const { isDark } = useContext(ThemeContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={name}
        className={`${styles.label} ${!isDark && styles['label-light']}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${!isDark && styles['input-light']}`}
        autoComplete="off"
      />
    </div>
  )
}

export default Input
