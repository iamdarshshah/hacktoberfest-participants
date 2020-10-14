import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Divider,
  Fade,
  Grid,
  Modal,
  Typography,
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import useStyles from './Content.styles';
import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Profile from '../Profile';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SearchTextField from './SearchTextField';

const getGithubUsernameFromURL = (URL) => {
  return URL.split('.com/')[1].toLowerCase();
};

function Content(props) {
  const { edges } = props.data.allContributorsJson;
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  const [filteredParticipants, setFilteredParticipants] = React.useState(edges);
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = ({ target: { value } }) => {
    setSearchText(value);
  };

  React.useEffect(() => {
    if (searchText) {
      const caseFreeSearchText = searchText.trim().toLowerCase();
      if (!edges || !edges.length) return;

      const fileredResult = edges.filter(({ node: { name, github } }) => {
        return (
          name.toLowerCase().includes(caseFreeSearchText) ||
          getGithubUsernameFromURL(github).includes(caseFreeSearchText)
        );
      });

      setFilteredParticipants(fileredResult);
    } else {
      setFilteredParticipants(edges);
    }
  }, [searchText]);

  const [id, setID] = React.useState(null);
  return (
      <main>

      <head>
      <meta http-equiv="content-type" content="text/html" charset="ISO-8859-1" />
      </head>

      <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h3'
            align='center'
            color='inherit'
            gutterBottom
          >
            Are you participating?{' '}
            <span role='img' aria-label='thinking'>
              🤔
            </span>
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            <u>
              <a
                href='https://hacktoberfest.digitalocean.com/'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Hacktoberfest
              </a>
            </u>{' '}
            is the time to come together and make the open-source world a better
            place. 👍 Go raise a PR and add yourself in the list.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <AwesomeButtonSocial
                  className={classes.btn}
                  type='github'
                  target='_blank'
                  href='https://github.com/iamdarshshah/hacktoberfest-participants#steps-to-add-yourself-in-the-list'
                >
                  Create a Pull Request
                </AwesomeButtonSocial>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container maxWidth='md'>
          <Grid container spacing={1} justify='center'>
            <Grid item xs={12} sm={8} md={5}>
              <SearchTextField
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                }
                onChange={handleSearch}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginTop: 40 }}
                fullWidth
                margin='normal'
                variant='outlined'
                placeholder='Search by name or Github username'
                id='input-with-icon-grid'
                color='secondary'
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {Boolean(filteredParticipants.length) &&
            filteredParticipants.map((edge, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => {
                      setModal(true);
                      const githubID = edge.node.github.split('.com/')[1];
                      setID(githubID);
                    }}
                  >
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        align='center'
                        component='h2'
                      >
                        <b>
                          <u>
                            <i>{`${edge.node.name}`}</i>
                          </u>
                        </b>
                      </Typography>
                      <Typography />
                      <Typography
                        gutterBottom
                        variant='h6'
                        align='center'
                        component='h2'
                      >{`${edge.node.desc}`}</Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Typography className={classes.extraMargin}>
                        {edge.node.github ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.github}
                            component='a'
                            target='_blank'
                          >
                            <GitHubIcon />
                          </Link>
                        ) : null}
                        {edge.node.twitter ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.twitter}
                            component='a'
                            target='_blank'
                          >
                            <TwitterIcon />
                          </Link>
                        ) : null}
                        {edge.node.linkedin ? (
                          <Link
                            className={classes.iconCls}
                            href={edge.node.linkedin}
                            component='a'
                            target='_blank'
                          >
                            <LinkedInIcon />
                          </Link>
                        ) : null}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          {!Boolean(filteredParticipants.length) && (
            <Grid item xs={12}>
              <Typography
                component='div'
                variant='h5'
                align='center'
                color='inherit'
                gutterBottom
              >
                {' '}
                <span role='img' aria-label='user not found'>
                  🤕
                </span>{' '}
                No participant found
              </Typography>
            </Grid>
          )}
          <Modal
            disableEnforceFocus
            disableAutoFocus
            closeAfterTransition
            open={modal}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClose={() => setModal(false)}
          >
            <div className={classes.modalContainer}>
              <Fade in={modal}>
                <Profile id={id} />
              </Fade>
            </div>
          </Modal>
        </Grid>
      </Container>
    </main>
  );
}

export default Content;
