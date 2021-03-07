import React, { useContext } from 'react'
import Switch from 'react-switch'
import styled, { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
  toggleTheme(): void
  page: number
}

// Estilo

const LayoutComponent = styled.main`
  width: 100vw;
  height: 100vh;
`

const HeaderComponent = styled.main`
  padding: 10px 20px 10px 20px;

  width: 100%;
  height: 70px;
  background: ${props => props.theme.colors.backgroundSecondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    cursor: pointer;
    display: flex;
  }

  img {
    width: 20px;
  }

  section img {
    cursor: pointer;
  }

  section img:nth-child(2) {
    margin-left: 30px;
  }

  ul a {
    padding: 10px 15px 10px 10px;
    cursor: pointer;
    display: flex;
  }
`

export const Layout = ({
  children,
  toggleTheme,
  page
}: IPropsLayout): JSX.Element => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <LayoutComponent>
      <HeaderComponent>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secondary}
        />

        <ul>
          <li>
            <img src="/assets/icons/appointments.svg" />{' '}
            <a style={page === 1 ? { color: '#a3aefd' } : {}}>Agendamentos</a>
          </li>
          <li>
            <img src="/assets/icons/calendar.svg" />
            <a style={page === 2 ? { color: '#a3aefd' } : {}}>Agenda</a>
          </li>
          <li>
            <img src="/assets/icons/search.svg" />
            <a style={page === 3 ? { color: '#a3aefd' } : {}}>Buscas</a>
          </li>
        </ul>

        <section>
          <img src="/assets/icons/notifications.svg" alt="" />
          <img src="/assets/icons/bookmark.svg" alt="" />
        </section>
      </HeaderComponent>
      {children}
    </LayoutComponent>
  )
}
