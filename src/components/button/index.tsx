import { FC, type ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ className = '', ...props }) => {
  return (
    <button 
      {...props} 
      className={`${styles.button} ${className}`} 
    />
  )
}