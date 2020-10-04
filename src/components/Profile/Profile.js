import React from 'react'
import { Link } from 'gatsby'
import CountPullRequest from '../pullRequest/countPullRequest'
import {
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
} from '@material-ui/core'
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
        console.log(result)
        setData(result)
      })
  }, [])
  if (!data) {
    return <CircularProgress size={40} className={classes.loader} />
  }
  const { items } = data

  return (
    <Card className={classes.card}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardHeader
          title={items[0].user.login}
          style={{ fontSize: 32 }}
          subheader={<CountPullRequest totalPullRequests={data.total_count} />}
          avatar={<Avatar src={items[0].user.avatar_url} />}
        />
      </div>

      <CardMedia className={classes.media} title='User Avatar' />

      <CardContent style={{ overflow: 'auto', maxHeight: '60vh' }}>
        {data.items.map(({ html_url, title, state }, i) => (
          <div key={i}>
            <Typography variant='body2' className={classes.title}>
              <Link href={html_url}>
                <code>{title}</code>
              </Link>
            </Typography>
            <Typography variant='body2' className={classes.state}>
              <code>{state}</code>
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Profile
