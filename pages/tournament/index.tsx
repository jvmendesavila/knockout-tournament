import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

// Custom Components
import PlayerList from '../../components/Player/PlayerList'

// Types
import { PlayerFormType } from '../../types/player'

// Style
import useStyle from './style'
import PlayerDialog from '../../components/Dialog'
import PlayerForm from '../../components/Form/PlayerForm'

const Tournament: React.FC = () => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const [player, setPlayer] = useState<PlayerFormType>()
  const [players, setPlayers] = useState<PlayerFormType[]>([])

  useEffect(() => {
    const playersLS = JSON.parse(localStorage.getItem('players'))
    if (playersLS) setPlayers(playersLS)
  }, [])

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
            <Typography style={{ fontSize: 28, marginBottom: 32 }}>
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
          <PlayerList
            players={players}
            setPlayers={setPlayers}
            setOpen={setOpen}
            setPlayer={setPlayer}
          />
        </Grid>
      </Grid>

      {/* Player Dialog */}
      <PlayerDialog
        open={open}
        handleClose={handleClose}
        DialogTitle="Adicionar Participante"
        DialogContent={
          <PlayerForm
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

export default Tournament
