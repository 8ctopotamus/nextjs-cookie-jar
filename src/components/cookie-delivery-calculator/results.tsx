'use client'

import { FC } from "react"
import { useFormStatus } from "react-dom"

import styles from './styles.module.css'

export const Results: FC<{result: string}> = ({ result }) => {
  const { pending } = useFormStatus()

  return (
    <span className={styles.results}>
      {pending ? 'Calculating...' : `Final Price: ${result}`}
    </span>
  )
}