import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 24,
    maxWidth: 1200,
    margin: '0px 24px',
    backgroundColor: theme.palette.secondary.main
  },
  infoContainer: {
    padding: 12
  },
  infoTitle: {
    marginBottom: 8,
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  contentActionButtons: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    '@media (max-width: 600px )': {
      justifyContent: 'space-between'
    }
  }
}))

export default useStyles
