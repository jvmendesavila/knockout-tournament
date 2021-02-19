import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import colors from './colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.main
    },
    secondary: {
      main: colors.secondary.main
    },
    error: {
      main: red.A400
    },
    background: {
      default: colors.background.main
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 16
      },
      containedPrimary: {
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#17b159'
        },
        boxShadow: 'none',
        color: 'white'
      }
    }
  }
})

export default theme
