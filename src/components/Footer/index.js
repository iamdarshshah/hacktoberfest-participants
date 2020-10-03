import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { useStyles } from '../../styles/style'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' color='textPrimary'>
          iamdarshshah &copy; 2020
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
