import React from 'react'
import ThemeContainer from '../../contexts/theme/ThemeContainer'

import { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeContainer>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContainer>
  )
}

export default MyApp
