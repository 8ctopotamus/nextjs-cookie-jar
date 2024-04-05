import { cookies } from 'next/headers'
import { defaultSettings, settingsKeys, type DefaultSettings } from '@/lib'
import { Card, CookieDeliveryCalculator } from "@/components"

import { calculateDelivery } from './actions'

import styles from './page.module.css'

export default function Home() {
  // load saved settings from cookies
  const cookiesStore = cookies()
  
  const cookieData = {
    partySize: +(cookiesStore.get(settingsKeys.partySize)?.value ?? defaultSettings.partySize),
    hungerLevel: +(cookiesStore.get(settingsKeys.hungerLevel)?.value ?? defaultSettings.hungerLevel) as DefaultSettings['hungerLevel'],
    zipCode: +(cookiesStore.get(settingsKeys.zipCode)?.value ?? ''),
  }

  return (
    <main className="main">
      <div className="center">
        <div>
          <h1 className={styles.h1}>🍪 NextJS Cookie Jar 🍪</h1>
          <p className={styles.description}>A sandbox for testing NextJS Cookies</p>
          <Card title='Calculate Cookie Delivery'>
            <CookieDeliveryCalculator 
              {...cookieData}
              formAction={calculateDelivery}
            />
          </Card>
        </div>
      </div>
      <pre>{JSON.stringify(cookieData, null, 2)}</pre>
      <p>This website uses cookies, obviously.</p>
    </main>
  )
}
