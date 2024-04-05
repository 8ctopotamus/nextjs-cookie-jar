import { type AllSettings } from "./constants"

const PRICE_PER_COOKIE = 5 
const OUR_ZIPCODE = 84938

const _getDeliveryCost = async  (zipCode: number): number => {
  const distance = Math.abs(OUR_ZIPCODE - zipCode)
  const rate = 0.2
  return distance * rate
}

export const calculateCookiePrice = async ({ partySize, hungerLevel, zipCode }: AllSettings) => {
  let result = PRICE_PER_COOKIE * partySize * hungerLevel
  
  // zipCode
  if (zipCode) {
    result += _getDeliveryCost(zipCode)
  }

  return result.toFixed(2)
}