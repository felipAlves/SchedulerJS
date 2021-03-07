import DefaultTheme from './DefaultTheme'

const { colorsDefault, ...defaultConfigs } = DefaultTheme
const theme = {
  title: 'light',

  ...defaultConfigs,
  colors: {
    ...colorsDefault,
    text: '#435f84',
    background: '#f4f6fa',
    backgroundSecondary: '#ffffff'
  }
}

export default theme
