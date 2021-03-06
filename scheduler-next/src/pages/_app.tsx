import React from 'react'
import { AppProps } from 'next/app'
import ThemeContainer from '../../contexts/theme/ThemeContainer'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
