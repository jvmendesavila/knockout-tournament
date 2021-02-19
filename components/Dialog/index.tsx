import React from 'react'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography style={{ fontSize: 18, marginTop: 2 }}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: 0
  }
}))(MuiDialogContent)

interface DialogInterface {
  open: boolean
  DialogTitle: string
  DialogContent: JSX.Element
  handleClose: () => void
}

const DialogComponent: React.FC<DialogInterface> = props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        {props.DialogTitle}
      </DialogTitle>
      <DialogContent dividers>{props.DialogContent}</DialogContent>
    </Dialog>
  )
}

export default DialogComponent
