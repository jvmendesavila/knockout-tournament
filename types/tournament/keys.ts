import { playerTableType } from '../player'

export interface DefineHeadersType {
  symmetric: number
  players: playerTableType[]
}

export interface DefineRoundsType {
  symmetric: number
  customPlayers: playerTableType[]
}

export interface gameType {
  game?: string
  players: playerTableType[]
}

export interface roundType {
  games: gameType[]
}

export interface GenerateKeysType {
  players: playerTableType[]
}

export interface TournamentType {
  rounds: roundType[]
  winner: string
}
