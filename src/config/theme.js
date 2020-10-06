import { createMuiTheme } from '@material-ui/core'

const typography = {
  fontFamily: ['Roboto'].join(','),
}

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 360,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#183d5e',
    },
    text: { primary: '#ffffff', secondary: '#c2cad2' },
    primary: {
      main: '#183d5e',
    },
    secondary: {
      main: '#072540',
    },
  },
  typography,
  breakpoints,
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#F1F7FA',
    },
    text: { primary: '#000000', secondary: '#c2cad2' },
    primary: {
      main: '#F1F7FA',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography,
  breakpoints,
})

export { lightTheme, darkTheme }
