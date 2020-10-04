import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    border: '4px solid white',
    height: '75%',
    width: '75%',
  },
  title: {
    color: theme.palette.text.primary,
  },
  state: {
    color: theme.palette.text.secondary,
  },
  loader: {
    color: theme.palette.primary.main,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[4],
    '&:hover': {
      boxShadow: theme.shadows[20],
      cursor: 'pointer',
    },
  },
}))
