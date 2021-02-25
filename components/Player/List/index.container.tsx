import React, { Dispatch, SetStateAction } from 'react'

// Custom Components
import PlayerList from '.'

// Style
import useStyle from './style'
import { PlayerFormType } from '../../../types/player'

interface PlayerListType {
  players: PlayerFormType[]
  setOpen: Dispatch<SetStateAction<boolean>>
  setPlayer: Dispatch<SetStateAction<PlayerFormType>>
  setPlayers: Dispatch<SetStateAction<PlayerFormType[]>>
}

export default function PlayerListContainer(props: PlayerListType) {
  const classes = useStyle()

  function handleEdit(player: PlayerFormType) {
    props.setPlayer(player)
    props.setOpen(true)
  }

  function handleDelete(player: PlayerFormType) {
    let newPlayers: PlayerFormType[] = props.players.filter(
      p => p.id !== player.id
    )
    newPlayers = newPlayers.map(p => ({
      ...p,
      id: p.id > player.id ? p.id - 1 : p.id
    }))
    localStorage.setItem('players', JSON.stringify([...newPlayers]))
    props.setPlayers([...newPlayers])
    props.setOpen(false)
  }

  return (
    <PlayerList
      {...props}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
