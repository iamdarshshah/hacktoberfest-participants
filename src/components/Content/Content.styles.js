import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  btn: {
    textTransform: 'none',
  },
  cardGrid: {
    width: '100%',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  cardMedia: {
    width: '100%',
    height: 'auto',
  },
  cardContent: {
    flexGrow: 1,
  },
  chipActions: {
    display: 'block',
  },
  chip: {
    margin: '8px 0 3px 8px',
  },
  iconCls: {
    color: theme.palette.text.primary,
  },
  extraMargin: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}))
