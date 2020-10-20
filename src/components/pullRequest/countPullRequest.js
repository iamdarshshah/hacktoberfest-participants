import { Typography } from '@material-ui/core'
import React from 'react'
import config from '../../config/constants'

const CountPullRequest = ({ totalPullRequests }) => (
  <Typography variant='h7'>
    {`${totalPullRequests} / ${config.REQUIRED_PULL_REQUEST}`}
  </Typography>
)

export default CountPullRequest
