import { Typography } from '@material-ui/core'
import React from 'react'
import config from '../../config/constants'

const CountPullRequest = ({ totalPullRequests }) => (
  <Typography variant='h6'>
    {`${totalPullRequests} / ${config.REQUIRED_PULL_REQUEST}`}
  </Typography>
)

export default CountPullRequest
