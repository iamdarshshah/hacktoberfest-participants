import React from 'react';
import { Link } from 'gatsby';
import CountPullRequest from '../pullRequest/countPullRequest';
import {
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
} from '@material-ui/core';
import config from '../../config/constants';
import useStyles from './Profile.styles';
import { CircularProgress } from '@material-ui/core';
function Profile({ id }) {
  const classes = useStyles();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const promises = [];
    promises.push(
      fetch(`${config.API_URL}${id}`).then((response) => response.json()),
      fetch(`${config.API_URL_MERGED}${id}`).then((response) => response.json())
    );
    Promise.all(promises).then(([all, merged]) => {
      const data = all.items.map((pr) =>
        merged.items.find((mergedPR) => mergedPR.id === pr.id)
          ? { ...pr, state: 'merged' }
          : pr
      );
      console.log(data);
      setData(data);
    });
  }, []);
  if (!data) {
    return <CircularProgress size={40} className={classes.loader} />;
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={data[0].user.login}
        titleTypographyProps={{ variant: 'h4' }}
        subheader={<CountPullRequest totalPullRequests={data.length} />}
        avatar={
          <Avatar src={data[0].user.avatar_url} className={classes.image} />
        }
      />

      <CardMedia className={classes.media} title='User Avatar' />

      <CardContent className={classes.prList}>
        {data.map(({ html_url, title, state, number }, i) => (
          <div key={i}>
            <Typography variant='body2'>
              <Link href={html_url} className={classes.title}>
                <code>{`#${number} ${title} `}</code>
              </Link>
            </Typography>
            <Typography variant='body2' className={classes.state}>
              <code>{state}</code>
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Profile;
