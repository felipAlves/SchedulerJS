import React from 'react'
import { Grid, Link, ListItem, ListIcon } from '@chakra-ui/core'
import { Box, UnorderedList, Switch } from '@chakra-ui/react'

import { CalendarIcon } from '@chakra-ui/icons'
interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: IPropsLayout): JSX.Element => {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 100vw 1fr"
      templateRows="100px 1fr 1fr"
      templateAreas="
      '. header .'
      '. . .'
      '. . .'
    "
      justifyContent="center"
      alignItems="center"
    >
      <Box
        gridArea="header"
        height="100%"
        lineHeight="base"
        backgroundColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        <Switch size="md" />
        <UnorderedList display="flex" listStyleType="none">
          <ListItem display="flex" alignItems="center" marginRight="20px">
            <ListIcon as={CalendarIcon} color="blue.600" />
            <Link
              p="10px"
              fontSize="sm"
              color="blue.600"
              fontWeight="bold"
              _hover={{ color: 'blue.500' }}
            >
              Agenda
            </Link>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginRight="20px">
            <ListIcon as={CalendarIcon} color="gray.400" />
            <Link
              p="10px"
              fontSize="sm"
              color="gray.400"
              fontWeight="bold"
              _hover={{ color: 'blue.500' }}
            >
              Pesquisa
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Grid>
  )
}
