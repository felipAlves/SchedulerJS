import React from 'react'
import { Props } from 'framer-motion/types/types'

import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core'

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from '../../styles/theme'

const ThemeContainer = ({ children }: Props): JSX.Element => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer
