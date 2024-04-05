import { type FC } from "react"
import  { settingsKeys, defaultSettings, hungerLevels, type AllSettings } from "@/lib"
import { Button } from "@/components"

import styles from './styles.module.css'

type Props = AllSettings & {
  formAction(formData: FormData): void
}

export const CookieDeliveryCalculator: FC<Props> = ({
  partySize,
  hungerLevel,
  zipCode,
  formAction
}) => {
  return (
    <>
      <form action={formAction} className={styles.form}>
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

        <Button type="submit">Calculate Price</Button>
      </form>
    </>
  )
}