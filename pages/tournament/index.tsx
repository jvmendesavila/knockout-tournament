import React, { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'

// Custom Components
import PlayerDialog from '../../components/Dialog'
import PlayerFormContainer from '../../components/Form/PlayerForm/index.container'
import PlayerListContainer from '../../components/Player/List/index.container'

// Alert
import { toast } from 'react-toastify'

// Types
import { PlayerFormType } from '../../types/player'

// Material UI
import TrophyIcon from '@material-ui/icons/EmojiEvents'
import SortRoundedIcon from '@material-ui/icons/SortRounded'
import { Button, Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'

export default function Tournament() {
  const classes = useStyle()
  const router: NextRouter = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [player, setPlayer] = useState<PlayerFormType>()
  const [players, setPlayers] = useState<PlayerFormType[]>([])

  useEffect(() => {
    const playersLS: PlayerFormType[] = JSON.parse(
      localStorage.getItem('players')
    )
    if (playersLS) setPlayers(playersLS)
  }, [])

  const handleGenerateKeys = () => {
    if (players.length < 2)
      toast.warning('Cadastre pelo menos dois participantes no campeonato')
    else router.push('/tournament/keys')
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container justify="center" style={{ padding: '120px 0px' }}>
        <Grid container className={classes.container}>
          {/* Title */}
          <Grid container>
            <TrophyIcon color="primary" fontSize="large" />
            <Typography style={{ fontSize: 28, margin: '0px 0px 32px 12px' }}>
              Meu Torneio
            </Typography>
          </Grid>

          {/* Add Button */}
          <Grid container className={classes.containerSubtitle}>
            <Typography style={{ fontSize: 18 }}>Participantes</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              className={classes.button}
            >
              Adicionar Participante
            </Button>
          </Grid>

          {/* Player List */}
          <PlayerListContainer
            players={players}
            setPlayers={setPlayers}
            setOpen={setOpen}
            setPlayer={setPlayer}
          />
          {/* Generate Keys */}
          <Grid container justify="flex-end" style={{ marginTop: 24 }}>
            <Button
              color="primary"
              onClick={handleGenerateKeys}
              variant="contained"
              className={classes.button}
            >
              <SortRoundedIcon color="secondary" />
              Gerar Chaves
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Player Dialog */}
      <PlayerDialog
        open={open}
        handleClose={handleClose}
        DialogTitle={player ? 'Editar Participante' : 'Adicionar Participante'}
        DialogContent={
          <PlayerFormContainer
            player={player}
            setPlayer={setPlayer}
            handleClose={handleClose}
            setPlayers={setPlayers}
          />
        }
      />
    </>
  )
}
