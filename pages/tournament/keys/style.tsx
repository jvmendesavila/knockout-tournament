import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  roundContainer: {
    width: '100%',
    padding: '12px 0'
  },
  playerLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  gameLabel: {
    padding: '0 20px',
    backgroundColor: `${theme.palette.secondary.main}`,
    color: `${theme.palette.background.default}`,
    boxShadow: '1px 2px 1px 1px rgb(0 0 0 / 20%)',
    fontWeight: 'bold',
    borderRadius: 20
  },
  hr: {
    height: 4,
    width: '100%',
    border: 'none',
    backgroundColor: 'white'
  }
}))

export default useStyles
