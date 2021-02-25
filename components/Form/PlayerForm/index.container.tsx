import React, { Dispatch, SetStateAction, useEffect } from 'react'

// Components
import PlayerForm from '.'

// Style
import useStyle from './style'
import { toast } from 'react-toastify'

// Types
import { PlayerFormType } from '../../../types/player'

interface PlayerFormComponentType {
  player?: PlayerFormType
  setPlayer: Dispatch<SetStateAction<PlayerFormType>>
  setPlayers: Dispatch<SetStateAction<PlayerFormType[]>>
  handleClose: () => void
}

export default function PlayerFormContainer(props: PlayerFormComponentType) {
  const classes = useStyle()

  // Functions
  function verifyName(name: string) {
    const players = JSON.parse(localStorage.getItem('players'))
    return Boolean(
      players.filter(
        p =>
          p.name.trim().toLowerCase() === name.trim().toLowerCase() &&
          p.id !== props.player?.id
      ).length > 0
    )
  }

  function addPlayer(values: PlayerFormType) {
    const players: PlayerFormType[] = JSON.parse(
      localStorage.getItem('players')
    )

    // Add Frist Player
    if (!players) {
      localStorage.setItem('players', JSON.stringify([{ ...values, id: 0 }]))
      props.setPlayers([{ ...values, id: 0 }])
    }

    // Edit Player
    else if (players.length && props.player) {
      if (verifyName(values.name)) {
        toast.warning('Já existe um jogador com esse nome')
        return
      } else {
        const newPlayers: PlayerFormType[] = players.map(p =>
          p.id === props.player.id ? { ...values, id: props.player.id } : p
        )
        localStorage.setItem('players', JSON.stringify([...newPlayers]))
        props.setPlayers([...newPlayers])
      }
    }

    // Add Others Players
    else {
      if (verifyName(values.name)) {
        toast.warning('Já existe um jogador com esse nome')
        return
      } else {
        localStorage.setItem(
          'players',
          JSON.stringify([...players, { ...values, id: players.length }])
        )
        props.setPlayers([...players, { ...values, id: players.length }])
      }
    }
    props.handleClose()
  }

  // UseEffect
  useEffect(() => {
    return () => {
      props.setPlayer(null)
    }
  }, [])

  return (
    <PlayerForm
      {...props}
      addPlayer={addPlayer}
      handleClose={props.handleClose}
    />
  )
}
