export const hungerLevels = [1, 2, 3] as const

export type DefaultSettings = {
  partySize:   number
  hungerLevel: typeof hungerLevels[number]
}

export type AllSettings = DefaultSettings & {
  zipCode: number
}

export const settingsKeys = {
  partySize:   'partySize',
  hungerLevel: 'hungerLevel',
  zipCode:     'zipCode'
} as const

export const defaultSettings: DefaultSettings = {
  partySize:   1,
  hungerLevel: 2
} as const