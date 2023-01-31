import React, { FC, MouseEventHandler } from 'react'
import styles from './button.module.scss'

interface ButtonProps {
  label: string
  onClick: MouseEventHandler
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  )
}

export default Button
