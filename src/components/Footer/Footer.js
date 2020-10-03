import React from 'react'
import { Link, Typography } from '@material-ui/core'
import useStyles from './Footer.styles'

function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant='body1' align='center'>
        Made with{' '}
        <Link color='textPrimary' href='https://gatsbyjs.com'>
          Gatsby
        </Link>{' '}
        <span role='img' aria-label='heart'>
          💘
        </span>
        , Deployed on{' '}
        <Link color='textPrimary' href='https://www.netlify.com/'>
          Netlify
        </Link>{' '}
        <span role='img' aria-label='rocket'>
          🚀
        </span>
      </Typography>
      <Typography variant='body1' align='center'>
        Thank you for supporting the Open-Source community!{' '}
        <span role='img' aria-label='smile'>
          😄
        </span>
      </Typography>
      <Typography variant='body1' align='center' color='textPrimary'>
        iamdarshshah &copy; 2020
      </Typography>
    </div>
  )
}

export default Footer
