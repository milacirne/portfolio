import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [darkThemeIsOn, setDarkThemeIsOn] = useState(false)

  function changeTheme() {
    setDarkThemeIsOn(!darkThemeIsOn)
  }

  return (
    <ThemeProvider theme={darkThemeIsOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
