import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 24,
    maxWidth: 1200,
    margin: '0px 24px',
    backgroundColor: theme.palette.secondary.main
  },
  button: {
    '@media (max-width: 380px )': {
      marginBottom: 24
    }
  },
  containerSubtitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 380px )': {
      flexDirection: 'column-reverse',
      alignItems: 'initial'
    }
  }
}))

export default useStyles
