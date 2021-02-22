import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

// Types
import { PlayerFormType } from '../../../types/player'
import { TournamentType, playerTableType } from '../../../types/tournament/keys'

// Utility
import { GenerateKeys } from '../../../shared/utility'

// Style
import useStyle from './style'

export default function TournamentKeys() {
  const classes = useStyle()
  const [tournament, setTournament] = useState<TournamentType>()
  useEffect(() => {
    const playersLS: PlayerFormType[] = JSON.parse(
      localStorage.getItem('players')
    )
    const playerTable: playerTableType[] = playersLS.map(pLS => ({
      jogador: pLS.name,
      header: false
    }))
    console.log(playerTable)
    setTournament(GenerateKeys({ players: playerTable }))
  }, [])

  return (
    <>
      <Grid container justify="center" style={{ padding: '120px 24px' }}>
        <Grid container style={{ maxWidth: 1280 }}>
          <Grid container>
            <Typography style={{ color: 'white', fontSize: 24 }}>
              Tournament Keys
            </Typography>
          </Grid>

          {/* Rounds */}
          <Grid container style={{ marginTop: 12 }}>
            {tournament?.rounds.map((round, iR) => (
              <Grid
                container
                direction="column"
                justify="space-around"
                style={{
                  maxWidth: `${100 / tournament?.rounds.length}%`
                }}
              >
                {/* Games */}
                {round.games.map((game, iG) => (
                  <Grid
                    container
                    style={{
                      alignItems:
                        game.players.length === 1 ? 'center' : 'initial',
                      margin: iR === 0 ? '25px 0' : 0,
                      border: game.players.length > 1 && '4px solid white',
                      borderLeft: 'none',
                      height: iR < 2 ? (iR + 2) * 50 : 150 * Math.pow(2, iR - 1)
                    }}
                  >
                    {game.players.map((player, iP) =>
                      !player.header || iR > 0 ? (
                        <>
                          <Grid container justify="center" alignItems="center">
                            <Typography className={classes.playerLabel}>
                              {player.jogador}
                            </Typography>
                          </Grid>
                          {iP === 0 && (
                            <Grid
                              container
                              justify="center"
                              alignItems="center"
                            >
                              <Typography className={classes.gameLabel}>
                                {game.game}
                              </Typography>
                            </Grid>
                          )}
                        </>
                      ) : (
                        <hr
                          className={classes.hr}
                          style={{
                            marginBottom: iG % 2 === 0 ? 0 : 4,
                            marginTop: iG % 2 === 0 ? 4 : 0
                          }}
                        />
                      )
                    )}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
