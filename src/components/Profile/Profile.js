import React from 'react';
import CountPullRequest from '../pullRequest/countPullRequest';
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Avatar,
  Link,
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
      const data =
        all.items &&
        all.items.map((pr) =>
          merged.items && merged.items.find((mergedPR) => mergedPR.id === pr.id)
            ? { ...pr, state: 'merged' }
            : pr
        );
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

      <CardContent className={classes.prList}>
        {data &&
          data.map(({ html_url, title, state, number }, i) => (
            <div key={i} className={classes.content}>
              <Typography variant='body2'>
                <Link href={html_url} className={classes.title} target='_blank'>
                  <code>
                    <b>{`#${number} `}</b> {`${title}`}
                  </code>
                </Link>
              </Typography>
              <Typography variant='body2' className={classes.state}>
                <small className={classes.status}>{state}</small>
              </Typography>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}

export default Profile;
