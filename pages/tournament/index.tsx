import React from 'react'
import { Button, Grid, IconButton, Typography } from '@material-ui/core'

// Material UI
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

// Style
import useStyle from './style'

const playersMock = [
  {
    name: 'João Victor Mendes',
    phone: '(85) 99731-8691(85)',
    email: 'joaovictormendesavila@gmail.com'
  },
  {
    name: 'Carlos Mendes',
    phone: '(85) 98545-8691',
    email: 'carlosmendesavila@gmail.com'
  },
  {
    name: 'Thiago Mendes',
    phone: '(85) 98794-8691',
    email: 'thiagomendesavila@gmail.com'
  }
]

const Tournament: React.FC = () => {
  const classes = useStyle()
  return (
    <Grid container justify="center">
      <Grid container className={classes.container}>
        <Grid container>
          <Typography style={{ fontSize: 28, marginBottom: 32 }}>
            Meu Torneio
          </Typography>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Typography style={{ fontSize: 18 }}>Participantes</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: 12 }}>
            Adicionar Participante
          </Button>
        </Grid>
        <Grid container style={{ marginTop: 24 }}>
          {playersMock.map((player, index) => (
            <Grid
              container
              key={index}
              style={{
                padding: '12px 0px',
                borderTop: index !== 0 && '1px solid gray'
              }}
            >
              {/* Name */}
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                className={classes.infoContainer}
              >
                <Typography className={classes.infoTitle}>Nome</Typography>
                <Typography style={{ overflowWrap: 'break-word' }}>
                  {player.name}
                </Typography>
              </Grid>

              {/* Phone */}
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                className={classes.infoContainer}
              >
                <Typography className={classes.infoTitle}>Telefone</Typography>
                <Typography style={{ overflowWrap: 'break-word' }}>
                  {player.phone}
                </Typography>
              </Grid>

              {/* Email */}
              <Grid item xs={12} md={3} className={classes.infoContainer}>
                <Typography className={classes.infoTitle}>Email</Typography>
                <Typography style={{ overflowWrap: 'break-word' }}>
                  {player.email}
                </Typography>
              </Grid>

              {/* Buttons */}
              <Grid item xs={12} md={3} className={classes.infoContainer}>
                <Grid container className={classes.contentActionButtons}>
                  <IconButton color="primary" style={{ margin: '0px 12px' }}>
                    <EditOutlinedIcon color="primary" />
                  </IconButton>
                  <IconButton color="primary" style={{ margin: '0px 12px' }}>
                    <DeleteOutlineIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Tournament
