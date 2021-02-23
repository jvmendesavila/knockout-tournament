import React, { Dispatch, SetStateAction, useEffect } from 'react'

// Material UI
import { Button, Grid, Typography } from '@material-ui/core'

// Form
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

// Style
import useStyle from './style'
import { toast } from 'react-toastify'

// Types
import { PlayerFormType } from '../../../types/player'
import FormTextField from '../FormTextField'

interface PlayerFormComponentType {
  player?: PlayerFormType
  setPlayer: Dispatch<SetStateAction<PlayerFormType>>
  setPlayers: Dispatch<SetStateAction<PlayerFormType[]>>
  handleClose?: () => void
}

const schema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string()
    .email('Este email não é valido')
    .required('Este campo é obrigatório')
    .test(
      'email-teste',
      `Este email não é valido pois não termina com '.com'`,
      function (value: string | undefined) {
        if (value && value.split('.')[1] !== 'com') {
          return false
        }
        return true
      }
    ),
  phone: Yup.string()
    .length(15, 'Número inválido')
    .required('Este campo é obrigatório')
})

export default function PlayerForm(props: PlayerFormComponentType) {
  const classes = useStyle()

  const formInitialValues = {
    name: props.player?.name || '',
    phone: props.player?.phone || '',
    email: props.player?.email || ''
  }

  // Functions
  function verifyName(name) {
    const players = JSON.parse(localStorage.getItem('players'))
    return Boolean(
      players.filter(
        p =>
          p.name.trim().toLowerCase() === name.trim().toLowerCase() &&
          p.id !== props.player?.id
      ).length > 0
    )
  }

  const addPlayer = player => () => {
    const players = JSON.parse(localStorage.getItem('players'))

    // Add Frist Player
    if (!players) {
      localStorage.setItem('players', JSON.stringify([{ ...player, id: 0 }]))
      props.setPlayers([{ ...player, id: 0 }])
    }

    // Edit Player
    else if (players.length && props.player) {
      if (verifyName(player.name)) {
        toast.warning('Já existe um jogador com esse nome')
        return
      } else {
        const newPlayers = players.map(p =>
          p.id === props.player.id ? { ...player, id: props.player.id } : p
        )
        localStorage.setItem('players', JSON.stringify([...newPlayers]))
        props.setPlayers([...newPlayers])
      }
    }

    // Add Others Players
    else {
      if (verifyName(player.name)) {
        toast.warning('Já existe um jogador com esse nome')
        return
      } else {
        localStorage.setItem(
          'players',
          JSON.stringify([...players, { ...player, id: players.length }])
        )
        props.setPlayers([...players, { ...player, id: players.length }])
      }
    }
    props.handleClose()
  }

  function ActionButtons({ formik }) {
    return (
      <>
        <Button
          onClick={props.handleClose}
          color="secondary"
          variant="outlined"
        >
          Fechar
        </Button>
        <Button
          onClick={addPlayer(formik.values)}
          color="primary"
          variant="contained"
          style={{ marginLeft: 12 }}
        >
          Salvar
        </Button>
      </>
    )
  }

  // UseEffect
  useEffect(() => {
    return () => {
      props.setPlayer(null)
    }
  }, [])

  return (
    <Formik
      onSubmit={props => console.log(props)}
      initialValues={formInitialValues}
      validationSchema={schema}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          {/* Form */}
          <Grid container className={classes.formContainer}>
            {/* Name */}
            <Grid container className={classes.formItem}>
              <FormTextField fullWidth name="name" label="Nome Completo" />
            </Grid>

            {/* Celular */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                name="phone"
                label="Celular"
                mask={'(99) 99999-9999'}
              />
            </Grid>

            {/* Email */}
            <Grid container className={classes.formItem}>
              <FormTextField fullWidth name="email" label="Email" />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Grid
            container
            justify="flex-end"
            style={{ borderTop: '1px solid #e0e0e0', padding: 16 }}
          >
            <ActionButtons formik={formik} />
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
