import React, { ElementType } from 'react'
import Link from 'next/link'

// Material UI
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import { Button, Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'

interface buttonType {
  link: string
  label: string
  icon: JSX.Element
}

const buttons: buttonType[] = [
  {
    link: '/tournament',
    label: 'Montar Torneio',
    icon: <EmojiEventsIcon style={{ fontSize: 32 }} />
  }
]

export default function Home() {
  const classes = useStyle()
  return (
    <Grid container justify="center">
      <Grid item className={classes.container}>
        <Grid item>
          <img className={classes.logoImage} src="/img/logo.png" />
        </Grid>
        <Grid item>
          <Typography color="primary" className={classes.logoLabel}>
            Knockout Tournament
          </Typography>
        </Grid>
        {buttons.map((button, i) => (
          <Link href={button.link} key={i}>
            <Grid item>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                startIcon={button.icon}
              >
                {button.label}
              </Button>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Grid>
  )
}
