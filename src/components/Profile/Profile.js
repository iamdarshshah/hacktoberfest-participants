import React from 'react';
import CountPullRequest from '../pullRequest/countPullRequest';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@material-ui/core';
import config from '../../config/constants';
import useStyles from './Profile.styles';
import { CircularProgress } from '@material-ui/core';
import SimpleBarReact from 'simplebar-react';
import "simplebar/src/simplebar.css";
import PRStatus from '../PRStatus/PRStatus';

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
      <Divider />
      <CardContent className={classes.cardContent}>
        <SimpleBarReact autoHide={false} style={{maxHeight:'60vh', paddingRight: 8 }}>
          <List component="nav">
            {data &&
                data.map(({ html_url, title, state, number }, i) => (
                  <ListItem
                    button
                    onClick={() => window.location.href=html_url}
                    key={i}
                  >
                    <ListItemIcon className={classes.icon}>
                      <PRStatus status={state}/>
                    </ListItemIcon>
                    <ListItemText 
                      secondary={<code className={classes.state}>{`#${number} - ${state}`}</code>} 
                      primaryTypographyProps='className={classes.cardContentList}'>
                      {`${title}  `}
                    </ListItemText>
                  </ListItem>
                  ))}
          </List>
        </SimpleBarReact>
      </CardContent>
    </Card>
  );
}

export default Profile;
