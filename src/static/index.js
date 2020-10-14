import React from 'react';
import { graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { darkTheme, lightTheme } from '../config/theme';
import { useThemeState } from '../utils';
import Header from '../components/Header';
import icon from '../static/Icon.png';
import Footer from '../components/Footer';
import { useStyles } from '../styles/style';
import Content from '../components/Content';

export default function Home(props) {
  const classes = useStyles();
  const [theme, setTheme] = useThemeState('light', 'theme');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <React.Fragment>
        <CssBaseline />
        <Helmet>
          <meta charSet='utf-8' />
          <title>Hacktoberfest presented by DigitalOcean</title>
          <link
            rel='canonical'
            href='https://iamdarshshah.github.io/hacktoberfest-participants'
          />
          <link rel='icon' href={icon} />
        </Helmet>
        <Header
          onChange={() => {
            setTheme((prev) => {
              let value = prev === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', value);
              return value;
            });
          }}
          theme={theme}
        />
        <Content {...props} />
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </React.Fragment>
    </ThemeProvider>
  );
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
`;
