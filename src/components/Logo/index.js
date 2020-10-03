import React from 'react'
import { useStyles } from '../../styles/style'
import icon from '../../static/Icon.png'

export default () => {
  const classes = useStyles()
  return (
    <a href='#'>
      <img
        className={classes.logo}
        alt='Logo'
        width='60px'
        height='60px'
        src={icon}
      />
    </a>
  )
}
