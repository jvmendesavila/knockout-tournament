import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

// Custom Components
import PlayerList from '../../components/Player/PlayerList'

// Types
import { PlayerFormType } from '../../types/player'

// Material UI
import TrophyIcon from '@material-ui/icons/EmojiEvents'
import SortRoundedIcon from '@material-ui/icons/SortRounded'

// Style
import useStyle from './style'
import PlayerDialog from '../../components/Dialog'
import PlayerForm from '../../components/Form/PlayerForm'
import Link from 'next/link'

export default function Tournament() {
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
          <PlayerList
            players={players}
            setPlayers={setPlayers}
            setOpen={setOpen}
            setPlayer={setPlayer}
          />
          {/* Generate Keys */}
          <Grid container justify="flex-end" style={{ marginTop: 24 }}>
            <Link href="/tournament/keys">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <SortRoundedIcon color="secondary" />
                Gerar Chaves
              </Button>
            </Link>
          </Grid>
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
