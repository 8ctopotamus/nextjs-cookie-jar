'use client'

import { FC } from "react"
import { useFormStatus } from "react-dom"
import { AllSettings } from "@/lib"
import { calculateCookiePrice } from "@/lib"

import styles from './styles.module.css'

export const Results: FC<AllSettings> = () => {
  const { pending } = useFormStatus()

  const result = calculateCookiePrice({
    partySize: 12,
    hungerLevel: 2,
    zipCode: 0,
  })

  return (
    <span className={styles.results}>
      {pending ? 'Calculating...' : `Final Price: ${result}`}
    </span>
  )
}