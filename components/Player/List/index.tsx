import React, { Dispatch, SetStateAction } from 'react'
import { Grid, IconButton } from '@material-ui/core'

// Material UI
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

// Custom Components
import PlayerField from './Field'

// Style
import useStyle from './style'
import { PlayerFormType } from '../../../types/player'

interface PlayerListType {
  players: PlayerFormType[]
  setOpen: Dispatch<SetStateAction<boolean>>
  setPlayer: Dispatch<SetStateAction<PlayerFormType>>
  setPlayers: Dispatch<SetStateAction<PlayerFormType[]>>
  handleEdit: (player: PlayerFormType) => void
  handleDelete: (player: PlayerFormType) => void
}

export default function PlayerList(props: PlayerListType) {
  const classes = useStyle()

  return (
    <Grid container style={{ marginTop: 24 }} data-testid="players-list">
      {props.players.map((player, index) => (
        <Grid
          container
          key={index}
          className={classes.containerItem}
          style={{ borderTop: index !== 0 && '1px solid gray' }}
        >
          {/* Name */}
          <PlayerField name={player.name} label="Nome" />

          {/* Phone */}
          <PlayerField name={player.phone} label="Celular" />

          {/* Email */}
          <PlayerField name={player.email} label="Email" />

          {/* Buttons */}
          <Grid item xs={12} md={3} className={classes.containerButtons}>
            <Grid container className={classes.contentActionButtons}>
              <IconButton
                color="primary"
                style={{ margin: '0px 12px' }}
                onClick={() => props.handleEdit(player)}
              >
                <EditOutlinedIcon color="primary" />
              </IconButton>
              <IconButton
                data-testid={`delete-button-${player.id}`}
                color="primary"
                style={{ margin: '0px 12px' }}
                onClick={() => props.handleDelete(player)}
              >
                <DeleteOutlineIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
