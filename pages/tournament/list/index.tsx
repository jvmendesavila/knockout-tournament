import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TournamentList: React.FC = () => {
  return (
    <Grid container justify="center" style={{}}>
      <Typography variant="h1" style={{ color: 'blue' }}>
        Tournament List
      </Typography>
    </Grid>
  )
}

export default TournamentList
