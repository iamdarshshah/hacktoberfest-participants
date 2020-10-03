import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { useStyles } from '../styles/style'
import {
  AppBar,
  Button,
  Card,
  Grid,
  Typography,
  Container,
  Divider,
} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { graphql } from 'gatsby'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Helmet } from 'react-helmet'
import icon from '../static/Icon.png'

export default function Home({ data }) {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#072540',
      },
    },
  })
  const classes = useStyles()

  const edges = data.allContributorsJson.edges
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Hacktoberfest presented by DigitalOcean</title>
          <link
            rel='canonical'
            href='https://iamdarshshah.github.io/hacktoberfest-participants'
          />
          <link rel='icon' href={icon} />
        </Helmet>
        <CssBaseline />
        <AppBar position='static' className={classes.root}>
          <Toolbar
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'space-between',
            }}
          >
            <Logo />
            <Typography variant='h4' color='textPrimary'>
              <a href='#' style={{ textDecoration: 'none', color: 'inherit' }}>
                Hacktoberfest'20 🚀
              </a>
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth='sm'>
              <Typography
                component='h1'
                variant='h3'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Are you participating? 🤔
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
                is the time to come together and make the open-source world a
                better place. 👍 Go raise a PR and add yourself in the list.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button
                      className={classes.btn}
                      variant='contained'
                      component='a'
                      href='https://github.com/iamdarshshah/hacktoberfest-participants#steps-to-add-yourself-in-the-list'
                      color='primaryDark'
                      target='_blank'
                    >
                      Create a Pull Request
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {edges.map((edge, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
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
                              <GitHubIcon color='secondary' />
                            </Link>
                          ) : null}
                          {edge.node.twitter ? (
                            <Link
                              className={classes.iconCls}
                              href={edge.node.twitter}
                              component='a'
                              target='_blank'
                            >
                              <TwitterIcon color='secondary' />
                            </Link>
                          ) : null}
                          {edge.node.linkedin ? (
                            <Link
                              className={classes.iconCls}
                              href={edge.node.linkedin}
                              component='a'
                              target='_blank'
                            >
                              <LinkedInIcon color='secondary' />
                            </Link>
                          ) : null}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant='h6' align='center'>
            Thank you for supporting the Open-Source community! 😄
          </Typography>
        </footer>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}
export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          name
          desc
          github
          twitter
          linkedin
        }
      }
    }
  }
`
