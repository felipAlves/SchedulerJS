import DefaultTheme from './DefaultTheme'

const { colorsDefault, ...defaultConfigs } = DefaultTheme

const theme = {
  title: 'dark',

  ...defaultConfigs,
  colors: {
    ...colorsDefault,
    text: '#ebf1f7',
    background: '#0d1117',
    backgroundSecondary: '#161b22'
  }
}

export default theme
