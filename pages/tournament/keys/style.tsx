import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '90px 24px',
    '@media (max-width: 600px )': {
      padding: '70px 0px'
    }
  },
  roundContainer: {
    width: '100%',
    padding: '12px 0'
  },
  keysContainer: {
    '@media (max-width: 600px )': {
      overflowX: 'scroll'
    }
  },
  headerLink: {
    top: 62,
    zIndex: 1,
    position: 'sticky',
    padding: '20px 12px',
    backgroundColor: `${theme.palette.background.default}`,
    borderBottom: '1px solid #027936',
    '@media (max-width: 600px )': {
      top: 50
    }
  },
  linkLabel: {
    color: `${theme.palette.secondary.main}`,
    fontWeight: 'bold',
    fontSize: 14
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 24
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
    fontSize: 14,
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
