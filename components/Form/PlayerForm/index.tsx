import React, { Dispatch, SetStateAction } from 'react'

// Material UI
import { Button, Grid } from '@material-ui/core'

// Form
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

// Style
import useStyle from './style'

// Types
import { PlayerFormType } from '../../../types/player'
import FormTextField from '../FormTextField'

export interface PlayerFormComponentType {
  player?: PlayerFormType
  setPlayer: Dispatch<SetStateAction<PlayerFormType>>
  setPlayers: Dispatch<SetStateAction<PlayerFormType[]>>
  addPlayer: (values: PlayerFormType) => void
  handleClose: () => void
}

export default function PlayerForm(props: PlayerFormComponentType) {
  const classes = useStyle()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome Obrigatório'),
    email: Yup.string()
      .email('Email Inválido')
      .required('Email Obrigatório')
      .test(
        'email-teste',
        `Email inválido pois não termina com '.com'`,
        function (value: string | undefined) {
          if (value && value.split('.')[1] !== 'com') {
            return false
          }
          return true
        }
      ),
    phone: Yup.string()
      .length(15, 'Celular Inválido')
      .required('Celular Obrigatório')
      .matches(/\(\d{2}\)\s\d{4,5}\-\d{4}/g, 'Celular Inválido')
  })

  const formInitialValues = {
    id: props.player?.id || null,
    name: props.player?.name || '',
    phone: props.player?.phone || '',
    email: props.player?.email || ''
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={formInitialValues}
      onSubmit={props.addPlayer}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit} data-testid="form">
          {/* Form */}
          <Grid container className={classes.formContainer}>
            {/* Name */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                data-testid="name"
                name="name"
                label="Nome Completo"
              />
            </Grid>

            {/* Celular */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                data-testid="phone"
                name="phone"
                label="Celular"
                mask={'(99) 99999-9999'}
              />
            </Grid>

            {/* Email */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                data-testid="email"
                name="email"
                label="Email"
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Grid
            container
            justify="flex-end"
            style={{ borderTop: '1px solid #e0e0e0', padding: 16 }}
          >
            <Button
              color="secondary"
              variant="outlined"
              onClick={props.handleClose}
            >
              Fechar
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              data-testid="submit-user-button"
              disabled={!formik.isValid}
              style={{ marginLeft: 12 }}
            >
              Salvar
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
