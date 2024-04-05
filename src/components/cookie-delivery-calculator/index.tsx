import { type FC } from "react"
import  { type DefaultSettings, type AllSettings, settingsKeys, defaultSettings, hungerLevels } from "@/lib"
import { Button } from "@/components"

type Props = Partial<AllSettings> & {
  formAction(formData: FormData): void
}

export const CookieDeliveryCalculator: FC<Props> = ({
  partySize,
  hungerLevel,
  zipCode,
  formAction
}) => {
  return (
    <div className="card">
      <h2>Cookie Delivery Calculator</h2>

      <form action={formAction}>
        <label htmlFor={settingsKeys.partySize}>Party Size*</label>
        <input
          name={settingsKeys.partySize}
          value={partySize ?? defaultSettings.partySize} 
          type="number"
        />
        
        <label htmlFor="hungerLevel">Hunger Level*</label>
        <select value={hungerLevel ?? defaultSettings.partySize}>
          {hungerLevels.map(level => (
            <option value={level}>{level}</option>
          ))}
        </select>

        <label htmlFor={settingsKeys.zipCode}>Zip Code*</label>
        <input
          name={settingsKeys.zipCode}
          value={zipCode ?? ''} 
          type="number"
        />

        <Button type="submit">Calculate Price</Button>
      </form>
    </div>
  )
}