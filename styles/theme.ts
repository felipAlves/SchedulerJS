import { theme, DefaultTheme } from '@chakra-ui/core'

const customTheme: DefaultTheme = {
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
    md: '8px'
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      300: '#f4f6fa',
      400: '#868d96',
      600: '#25313d',
      700: '#202024',
      800: '#121214'
    },

    blue: {
      ...theme.colors.blue,
      500: '#5c6efb',
      600: '#455af7'
    }
  }
}

export default customTheme
