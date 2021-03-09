import React from 'react'
import { Grid, Flex } from '@chakra-ui/core'
import { Box } from '@chakra-ui/react'

interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: IPropsLayout): JSX.Element => {
  return (
    <Grid
      as="main"
      height="100vh"
      templateRows="1fr 8fr 1fr"
      templateColumns="10fr"
      templateAreas="
        'header'
        'mainContainer'
        'footer'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="header"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Box bg="gray.600" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </Flex>
      <Flex
        gridArea="mainContainer"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        {children}
      </Flex>
      <Flex
        gridArea="footer"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        Footer
      </Flex>
    </Grid>
  )
}
