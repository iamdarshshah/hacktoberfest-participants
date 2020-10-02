import React from "react"
import { useStyles } from "../styles/style"

export default () => {
  const classes = useStyles()
  return (
    <a href="#">
      <img
        className={classes.logo}
        alt="Logo"
        width="60px"
        height="60px"
        src="icon.png"
      />
    </a>
  )
}
