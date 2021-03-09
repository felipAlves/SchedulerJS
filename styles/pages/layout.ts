import { extendTheme } from '@chakra-ui/react'
// 2. Extend the theme with new layer styles
export const themeLayout = extendTheme({
  layerStyles: {
    listItem: {
      padding: '10px'
    }
  }
})
