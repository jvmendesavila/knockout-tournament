import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    top: 0,
    zIndex: 2,
    position: 'fixed',
    backgroundColor: theme.palette.secondary.main
  },
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  logoLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 12,
    '@media (max-width: 600px)': {
      fontSize: 20
    }
  },
  logoImage: {
    cursor: 'pointer',
    height: 64,
    '@media (max-width: 600px)': {
      height: 52
    }
  }
}))

export default useStyles
