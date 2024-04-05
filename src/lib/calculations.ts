import { 
  OUR_ZIPCODE,
  PRICE_PER_COOKIE,
  type AllSettings 
} from "./constants"

const _getDeliveryCost = (zipCode: number): number => {
  const distance = Math.abs(OUR_ZIPCODE - zipCode)
  const rate = 0.2
  return distance * rate
}

export const calculateCookiePrice = ({ partySize, hungerLevel, zipCode }: AllSettings) => {
  let result = PRICE_PER_COOKIE * partySize * hungerLevel
  
  // zipCode
  if (zipCode) {
    result += _getDeliveryCost(zipCode)
  }

  return result.toFixed(2)
}