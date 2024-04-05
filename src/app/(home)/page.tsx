import { cookies } from 'next/headers'
import { defaultSettings, settingsKeys, type DefaultSettings } from '@/lib'
import { CookieDeliveryCalculator } from "@/components"

import styles from './page.module.css'

export default function Home() {
  async function calculateDelivery (formData: FormData) {
    'use server'

    const rawFormData = {
      [settingsKeys.partySize]: formData.get(settingsKeys.partySize),
      [settingsKeys.hungerLevel]: formData.get(settingsKeys.hungerLevel),
      [settingsKeys.zipCode]: formData.get(settingsKeys.zipCode)
    }

    // mutate data
    // revalidate cache
  }

  // load saved settings from cookies
  const cookiesStore = cookies()
  const partySize =  +(cookiesStore.get(settingsKeys.partySize)?.value ?? defaultSettings.partySize)
  const hungerLevel = +(cookiesStore.get(settingsKeys.hungerLevel)?.value ?? defaultSettings.hungerLevel) as DefaultSettings['hungerLevel']
  const zipCode =  +(cookiesStore.get(settingsKeys.zipCode)?.value ?? 0)

  return (
    <main className="main">
      <div className="center">
        <div className='card'>
          <h1>NextJS Cookie Jar</h1>
          <p className={styles.description}>A sandbox for testing NextJS Cookies</p>
          <CookieDeliveryCalculator 
            partySize={partySize}
            hungerLevel={hungerLevel}
            zipCode={zipCode}
            formAction={calculateDelivery}
          />
        </div>
      </div>
    </main>
  );
}
