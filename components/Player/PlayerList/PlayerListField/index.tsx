import React from 'react'
import { Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'

interface PlayerFieldType {
  label: string
  name: string
}

const PlayerListField: React.FC<PlayerFieldType> = ({ label, name }) => {
  const classes = useStyle()
  return (
    <Grid item xs={12} sm={6} md={3} className={classes.infoContainer}>
      <Typography className={classes.infoTitle}>{label}</Typography>
      <Typography style={{ overflowWrap: 'break-word' }}>{name}</Typography>
    </Grid>
  )
}

export default PlayerListField
