import { PlayerTableType } from '../../types/player'
import {
  TournamentType,
  DefineHeadersType,
  DefineRoundsType,
  GenerateKeysType,
  roundType,
  gameType
} from '../../types/tournament/keys'

export function DefineHeaders({ symmetric, players }: DefineHeadersType) {
  let customPlayers: PlayerTableType[] = players
  if (symmetric % 1 !== 0) {
    let headerPosition: number = 0
    let headers: number = Math.pow(2, Math.ceil(symmetric)) - players.length
    while (headers > 0) {
      // Distribute Headers
      if (headerPosition < customPlayers.length) {
        customPlayers = customPlayers.map((cP, i) =>
          i === headerPosition ? { ...cP, header: true } : cP
        )
      }

      // Distribute Other Headers
      else {
        // Get the last element without header
        customPlayers = customPlayers.reverse()
        const addHeader: number = customPlayers.findIndex(cP => !cP.header)
        customPlayers = customPlayers.map((cP, i) =>
          i === addHeader ? { ...cP, header: true } : cP
        )
        customPlayers = customPlayers.reverse()
      }
      headers--
      headerPosition += 3
    }
  }
  return customPlayers
}

export function DefineRounds({ symmetric, customPlayers }: DefineRoundsType) {
  let gamesNumber: number = 1
  let roundsNumber: number = 0
  let rounds: roundType[] = []
  while (roundsNumber < Math.ceil(symmetric)) {
    // First Round
    if (roundsNumber === 0) {
      let position: number = 0
      let firstRound: gameType[] = []
      while (position < customPlayers.length) {
        if (customPlayers[position].header) {
          firstRound.push({
            players: [{ ...customPlayers[position] }]
          })
          position++
        } else {
          firstRound.push({
            game: `Partida ${gamesNumber}`,
            players: [
              { ...customPlayers[position] },
              { ...customPlayers[position + 1] }
            ]
          })
          position += 2
          gamesNumber++
        }
      }
      rounds.push({ games: firstRound })
    }

    // Other Rounds
    else {
      let position: number = 0
      let roundGames: gameType[] = []
      let playersRound = []
      while (position < rounds[roundsNumber - 1].games.length) {
        if (rounds[roundsNumber - 1].games[position].players.length > 1) {
          playersRound.push({
            jogador: `Vencedor da ${
              rounds[roundsNumber - 1].games[position].game
            }`,
            header: false
          })
          position++
        } else {
          playersRound.push(rounds[roundsNumber - 1].games[position].players[0])
          position++
        }
      }
      while (playersRound.length > 0) {
        roundGames.push({
          game: `Partida ${gamesNumber}`,
          players: [playersRound[0], playersRound[1]]
        })
        playersRound.splice(0, 2)
        gamesNumber++
      }
      rounds.push({ games: roundGames })
    }
    roundsNumber++
  }
  return rounds
}

export function GenerateKeys({ players }: GenerateKeysType) {
  // Symmetric between players length and base 2
  const symmetric = Math.log(players.length) / Math.log(2)

  // Define Headers
  const customPlayers = DefineHeaders({ symmetric, players })

  // Define Rounds
  const rounds: roundType[] = DefineRounds({ symmetric, customPlayers })

  let tournament: TournamentType = {
    rounds: rounds,
    winner: rounds[rounds.length - 1].games[0].game
  }

  return tournament
}
