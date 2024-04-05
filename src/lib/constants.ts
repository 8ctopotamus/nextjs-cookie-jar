const hungerLevels = [1, 2, 3, 4, 5] as const

type DefaultSettings = {
  partySize: number
  hungerLevel: typeof hungerLevels[number]
}

export const settingsKeys = {
  partySize: 'partySize',
  hungerLevel: 'hungerLevel'
}

export const defaultSettings: DefaultSettings = {
  partySize: 1,
  hungerLevel: 3
}