import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& dt': {
      marginTop: theme.spacing(2),
    },
    color: '#000',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
}))
