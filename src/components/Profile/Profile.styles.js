import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  loader: {
    color: theme.palette.primary.main,
  },
}))
