import { AppBar, Typography, Toolbar } from '@material-ui/core'
import React from 'react'
import Toggle from '../common/Toggle'
import Logo from '../Logo'
import useStyles from './Header.styles'
function Header(props) {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Typography variant='h4' color='textPrimary'>
          <a href='#' style={{ textDecoration: 'none', color: 'inherit' }}>
            Hacktoberfest'20 🎃
          </a>
        </Typography>
        <Toggle onChange={props.onChange} />
      </Toolbar>
    </AppBar>
  )
}
export default Header
