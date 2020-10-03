import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& dt': {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      display: 'flex',
    },
  },
}))
