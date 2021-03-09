import React from 'react'

import { Grid, Flex } from '@chakra-ui/core'

const Home = (): JSX.Element => {
  return (
    <Grid
      as="main"
      height="100%"
      width="100%"
      gridAutoColumns="3fr 7fr"
      gridAutoRows="2fr 2fr 2fr"
      templateAreas="
    'calendar scheduler'
    'calendar scheduler'
    'calendars scheduler'
  "
      alignItems="center"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        gridArea="calendar"
        height="90%"
        width="90%"
        bg="tomato"
        borderRadius="md"
      >
        Calendário
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        gridArea="calendars"
        height="90%"
        width="90%"
        bg="tomato"
        borderRadius="md"
      >
        Agendas
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        gridArea="scheduler"
        height="90%"
        width="90%"
        bg="tomato"
        borderRadius="md"
      >
        Agenda
      </Flex>
    </Grid>
  )
}

export default Home
