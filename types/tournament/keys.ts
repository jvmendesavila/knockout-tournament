import { PlayerTableType } from '../player'

export interface DefineHeadersType {
  symmetric: number
  players: PlayerTableType[]
}

export interface DefineRoundsType {
  symmetric: number
  customPlayers: PlayerTableType[]
}

export interface gameType {
  game?: string
  players: PlayerTableType[]
}

export interface roundType {
  games: gameType[]
}

export interface GenerateKeysType {
  players: PlayerTableType[]
}

export interface TournamentType {
  rounds: roundType[]
  winner: string
}
