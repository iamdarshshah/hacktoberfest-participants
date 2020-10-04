import React from 'react'
import { Paper } from '@material-ui/core'
import config from '../../config/constants'
import useStyles from './Profile.styles'
import { CircularProgress } from '@material-ui/core'
function Profile({ id }) {
  const classes = useStyles()
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    fetch(`${config.API_URL}${id}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
  }, [])
  if (!data) {
    return <CircularProgress size={40} className={classes.loader} />
  }
  return (
    <Paper className={classes.container}>
      <img src={data.items[0].user.avatar_url} />
    </Paper>
  )
}

export default Profile
