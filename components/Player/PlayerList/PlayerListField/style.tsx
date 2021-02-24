import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  infoContainer: {
    padding: 12
  },
  infoTitle: {
    marginBottom: 8,
    fontWeight: 600,
    color: theme.palette.primary.main
  }
}))

export default useStyles
