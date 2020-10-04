import React from 'react'
import config from '../../config/constants'

const CountPullRequest = ({ totalPullRequests }) => (
  <span>
    <span>{totalPullRequests}</span> / {config.REQUIRED_PULL_REQUEST}
  </span>
)

export default CountPullRequest
