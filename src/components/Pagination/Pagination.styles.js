import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    marginTop: '24px',
  },
  paginationButton: {
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
    borderRadius: '4px',
    outilne: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px 0',
    transition: 'background-color .3s',
    '&>span': {
      position: 'relative',
      top: '-3px',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    '&:focus': {
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(230,230,230,.1)'
    },
  },
  paginationCount: {
    padding: '24px 16px',
    color: theme.palette.primary.contrastText,
    borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
  },
}));
