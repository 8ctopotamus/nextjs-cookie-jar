import { cookies } from 'next/headers'
import { settingsKeys } from '@/lib'
// import { CookieDeliveryCalculator } from "@/components"

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
  // const partySize = JSON.parse(cookiesStore.get(settingsKeys.partySize)?.value ?? '')
  // const hungerLevel = JSON.parse(cookiesStore.get(settingsKeys.hungerLevel)?.value ?? '')
  // const zipCode = JSON.parse(cookiesStore.get(settingsKeys.zipCode)?.value ?? '')

  return (
    <main className="main">
      <div className="center">
        <div>
          <h1>NextJS Cookie Jar</h1>
          <p>A sandbox for testing NextJS Cookies</p>
          {/* <CookieDeliveryCalculator 
            partySize={partySize}
            hungerLevel={hungerLevel}
            zipCode={zipCode}
            formAction={calculateDelivery}
          /> */}
        </div>
      </div>
    </main>
  );
}
