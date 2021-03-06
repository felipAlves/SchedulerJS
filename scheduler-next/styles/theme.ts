import { theme, DefaultTheme } from '@chakra-ui/core'

const customThem: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
    full: '100%'
  },
  fontSizes: {
    ...theme.fontSizes,
    '6xl': '54px'
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      200: '#2baeff',
      500: '#1479ff'
    },
    gray: {
      ...theme.colors.gray,
      400: '#435f84'
    }
  }
}

export default customThem
