import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'

const Header: React.FC = () => {
  const classes = useStyle()
  const { pathname } = useRouter()
  const hideHeader = ['/'].filter(route => route === pathname)
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

export default Header
