import React, { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Link from 'next/link'

// Types
import { PlayerFormType, PlayerTableType } from '../../../types/player'
import { TournamentType } from '../../../types/tournament/keys'

// Alerta
import { toast } from 'react-toastify'

// Material UI
import { Grid, Typography } from '@material-ui/core'
import TrophyIcon from '@material-ui/icons/EmojiEvents'
import BackIcon from '@material-ui/icons/ArrowBackIosRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CircularProgress from '@material-ui/core/CircularProgress'

// Utility
import { GenerateKeys } from '../../../shared/utility'

// Style
import useStyle from './style'

export default function TournamentKeys() {
  const classes = useStyle()
  const router: NextRouter = useRouter()
  const [loading, setLoading] = useState<boolean>(true)
  const [tournament, setTournament] = useState<TournamentType>()

  // UseEffect
  useEffect(() => {
    const playersLS: PlayerFormType[] = JSON.parse(
      localStorage.getItem('players')
    )
    if (playersLS.length < 2) {
      router.push('/tournament')
      toast.warning('Cadastre pelo menos dois participantes no campeonato')
    } else {
      const playerTable: PlayerTableType[] = playersLS.map(pLS => ({
        jogador: pLS.name,
        header: false
      }))
      setTournament(GenerateKeys({ players: playerTable }))
      setLoading(false)
    }
  }, [])

  return (
    <Grid container justify="center" className={classes.container}>
      {loading ? (
        <CircularProgress color="secondary" style={{ marginTop: 120 }} />
      ) : (
        <Grid container style={{ maxWidth: 1280 }}>
          {/* Back Link */}
          <Grid container className={classes.headerLink}>
            <Link href="/tournament">
              <Grid item className={classes.linkContainer}>
                <BackIcon
                  color="secondary"
                  fontSize="small"
                  style={{ marginRight: 4 }}
                />
                <Typography className={classes.linkLabel}>
                  Editar Integrantes
                </Typography>
              </Grid>
            </Link>

            {/* Title */}
            <Grid container alignItems="center">
              <Typography
                style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}
              >
                Tournament Keys
              </Typography>
            </Grid>
          </Grid>

          {/* Keys */}
          <Grid container wrap="nowrap" className={classes.keysContainer}>
            {/* Rounds */}
            {tournament?.rounds.map((round, iR) => (
              <Grid
                key={iR}
                container
                direction="column"
                justify="space-around"
                style={{
                  maxWidth: `${100 / tournament?.rounds.length}%`,
                  minWidth: 220
                }}
              >
                {round.games.map((game, iG) => (
                  <Grid
                    key={iG}
                    container
                    style={{
                      alignItems:
                        game.players.length === 1 ? 'center' : 'initial',
                      margin: iR === 0 ? '32px 0' : 0,
                      border: game.players.length > 1 && '4px solid white',
                      borderLeft: 'none',
                      height: iR < 2 ? (iR + 2) * 64 : 192 * Math.pow(2, iR - 1)
                    }}
                  >
                    {game.players.map((player, iP) =>
                      !player.header || iR > 0 ? (
                        <React.Fragment key={iP}>
                          <Grid container justify="center" alignItems="center">
                            {player.jogador.split('Vencedor').length > 1 ? (
                              <TrophyIcon
                                color="disabled"
                                style={{ marginRight: 8 }}
                              />
                            ) : (
                              <AccountCircleIcon
                                color="disabled"
                                style={{ marginRight: 8 }}
                              />
                            )}
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
                        </React.Fragment>
                      ) : (
                        <hr
                          key={iP}
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

            {/* Champion */}
            <Grid container direction="column" justify="space-around">
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                style={{ paddingRight: 12 }}
              >
                <Grid container style={{ minWidth: 48 }}>
                  <hr className={classes.hr} />
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <TrophyIcon color="secondary" style={{ fontSize: 128 }} />
                  <p className={classes.playerLabel}>
                    {'Vencedor da ' + tournament?.winner}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
