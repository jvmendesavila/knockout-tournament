import React, { Dispatch, SetStateAction } from 'react'
import { Grid, IconButton } from '@material-ui/core'

// Material UI
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

// Custom Components
import PlayerListField from './PlayerListField'

// Style
import useStyle from './style'
import { PlayerType } from '../../../types/player'

interface PlayerListType {
  players: PlayerType[]
  setOpen: Dispatch<SetStateAction<boolean>>
  setPlayer: Dispatch<SetStateAction<PlayerType>>
  setPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

const PlayerList: React.FC<PlayerListType> = props => {
  const classes = useStyle()

  const handleEdit = player => () => {
    props.setPlayer(player)
    props.setOpen(true)
  }

  const handleDelete = player => () => {
    let newPlayers = props.players.filter(p => p.id !== player.id)
    newPlayers = newPlayers.map(p => ({
      ...p,
      id: p.id > player.id ? p.id - 1 : p.id
    }))
    localStorage.setItem('players', JSON.stringify([...newPlayers]))
    props.setPlayers([...newPlayers])
    props.setOpen(false)
  }

  return (
    <Grid container style={{ marginTop: 24 }}>
      {props.players.map((player, index) => (
        <Grid
          container
          key={index}
          className={classes.containerItem}
          style={{ borderTop: index !== 0 && '1px solid gray' }}
        >
          {/* Name */}
          <PlayerListField name={player.name} label="Nome" />

          {/* Phone */}
          <PlayerListField name={player.phone} label="Celular" />

          {/* Email */}
          <PlayerListField name={player.email} label="Email" />

          {/* Buttons */}
          <Grid item xs={12} md={3} className={classes.containerButtons}>
            <Grid container className={classes.contentActionButtons}>
              <IconButton
                color="primary"
                style={{ margin: '0px 12px' }}
                onClick={handleEdit(player)}
              >
                <EditOutlinedIcon color="primary" />
              </IconButton>
              <IconButton
                color="primary"
                style={{ margin: '0px 12px' }}
                onClick={handleDelete(player)}
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

export default PlayerList
