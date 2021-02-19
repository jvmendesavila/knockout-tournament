import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    top: 0,
    zIndex: 2,
    position: 'sticky',
    backgroundColor: theme.palette.secondary.main
  }
}))

export default useStyles
