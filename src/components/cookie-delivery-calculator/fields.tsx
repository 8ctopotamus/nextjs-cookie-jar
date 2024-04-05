'use client'

import { type FC } from "react"
import { useFormStatus } from "react-dom"
import { settingsKeys, defaultSettings, hungerLevels, type AllSettings } from "@/lib"
import { Button } from "@/components"

import styles from './styles.module.css'

export const FormFields: FC<AllSettings> = ({
  partySize,
  hungerLevel,
  zipCode,
}) => {
  const { pending } = useFormStatus()

  return (
    <>
      <div className={styles.formRow}>
        <label htmlFor={settingsKeys.partySize}>Party Size*</label>
        <input
          name={settingsKeys.partySize}
          defaultValue={partySize ?? defaultSettings.partySize}
          type="number"
        />
      </div>

      <div className={styles.formRow}>
        <label htmlFor={settingsKeys.hungerLevel}>Hunger Level*</label>
        <select
          name={settingsKeys.hungerLevel}
          defaultValue={hungerLevel ?? defaultSettings.hungerLevel}
        >
          {hungerLevels.map(level => (
            <option value={level} key={level}>{level}</option>
          ))}
        </select>
      </div>

      <div className={styles.formRow}>
        <label htmlFor={settingsKeys.zipCode}>Zip Code*</label>
        <input
          name={settingsKeys.zipCode}
          defaultValue={zipCode ?? ''}
          type="number"
        />
      </div>

      <Button
        disabled={pending}
        type="submit"
      >
        {pending ? 'Calculating...' : 'Calculate Price'}
      </Button>
    </>
  )
}