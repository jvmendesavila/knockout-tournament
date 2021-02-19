import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  containerButtons: {
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 960px )': {
      visibility: 'hidden'
    }
  },
  contentActionButtons: {
    justifyContent: 'flex-end',
    '@media (max-width: 600px )': {
      justifyContent: 'space-between'
    }
  },
  containerItem: {
    padding: '12px 0px',
    '&:hover': {
      '& $containerButtons': { visibility: 'visible' }
    }
  }
}))

export default useStyles
