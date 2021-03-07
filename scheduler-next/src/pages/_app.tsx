import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from '../../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import { Layout } from '../components/layout/Layout'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
