import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Material UI
import { Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'

export default function Header() {
  const classes = useStyle()
  const { pathname }: { pathname: string } = useRouter()
  const hideHeader: string[] = ['/'].filter(route => route === pathname)

  return hideHeader.length ? null : (
    <Grid container className={classes.container} justify="center">
      <Link href="/">
        <Grid item className={classes.containerLogo}>
          <img className={classes.logoImage} src="/img/logo.png" />
          <Typography color="primary" className={classes.logoLabel}>
            Knockout Tournament
          </Typography>
        </Grid>
      </Link>
    </Grid>
  )
}
