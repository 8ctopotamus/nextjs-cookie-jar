import type { FC, PropsWithChildren } from 'react'
import styles from './card.module.css'

type Props = PropsWithChildren & {
  title?: string
  className?: string
}

export const Card: FC<Props> = ({ children, className = '', title, ...props }) => {
  return (
    <div 
      {...props} 
      className={`${styles.card} ${className}`} 
    >
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {children}
    </div>
  )
}