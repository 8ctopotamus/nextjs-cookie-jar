'use client'

import { FC } from "react"
import { useFormStatus } from "react-dom"
import { AllSettings } from "@/lib"
import { calculateCookiePrice } from "@/lib"

import styles from './styles.module.css'

export const Results: FC<AllSettings> = ({
  partySize,
  hungerLevel,
  zipCode
}) => {
  const { pending } = useFormStatus()

  const result = calculateCookiePrice({
    partySize,
    hungerLevel,
    zipCode,
  })

  return (
    <span className={styles.results}>
      {pending ? 'Calculating...' : `Final Price: ${result}`}
    </span>
  )
}