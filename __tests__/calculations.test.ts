// import { calculateCookiePrice } from '../src/lib/calculations'
import { calculateCookiePrice } from '@/calculations'

describe('Testing Jest', () => {
  test('Testing Jest....', () => {

    const result =  calculateCookiePrice({
      partySize: 1,
      hungerLevel: 2,
      zipCode: 12345
    })

    expect(result).toBe("14528.60")
  })
})