import { cookies } from 'next/headers'
import { defaultSettings, settingsKeys, type DefaultSettings } from '@/lib'
import { calculateDelivery } from './actions'
import { Card, CookieDeliveryCalculator } from "@/components"

import styles from './page.module.css'

export default function Home() {
  
  // load saved settings from cookies
  const cookiesStore = cookies()
  const partySize =  +(cookiesStore.get(settingsKeys.partySize)?.value ?? defaultSettings.partySize)
  const hungerLevel = +(cookiesStore.get(settingsKeys.hungerLevel)?.value ?? defaultSettings.hungerLevel) as DefaultSettings['hungerLevel']
  const zipCode =  +(cookiesStore.get(settingsKeys.zipCode)?.value ?? 0)

  return (
    <main className="main">
      <div className="center">
        <div>
          <h1 className={styles.h1}>🍪 NextJS Cookie Jar 🍪</h1>
          <p className={styles.description}>A sandbox for testing NextJS Cookies</p>
          <Card title='Calculate Cookie Delivery'>
            <CookieDeliveryCalculator 
              partySize={partySize}
              hungerLevel={hungerLevel}
              zipCode={zipCode}
              formAction={calculateDelivery}
            />
          </Card>
        </div>
      </div>
      <p>This website uses cookies, obviously.</p>
    </main>
  );
}
