'use server'

import { cookies } from 'next/headers'
import { settingsKeys } from '@/lib'

export async function calculateDelivery (formData: FormData) {
  
  const cookiesStore = cookies()

  const rawFormData = {
    [settingsKeys.partySize]: formData.get(settingsKeys.partySize),
    [settingsKeys.hungerLevel]: formData.get(settingsKeys.hungerLevel),
    [settingsKeys.zipCode]: formData.get(settingsKeys.zipCode)
  }

  // update cookies
  for (const key of Object.values(settingsKeys)) {
    if (rawFormData[key]) {
      cookiesStore.set(key, rawFormData[key] as string)
    }
  }
}