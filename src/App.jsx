import { useContext } from 'react'
import { ThemeContext } from './contexts/theme-context'
import './App.css'
import { getPokemon } from './services/pokeApi'
import { Logo } from './components/logo/logo'
import { Main } from './components/main/main'
import { ButtonBackHome } from './components/button-back-home/button-back-home'
import { ThemeProvider } from './contexts/theme-context'
import { GlobalStyle } from './globalStyle'
import { ButtonLeadMore } from './components/button-lead-more/button-lead-more'


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Logo />
      <Main />
      <ButtonLeadMore />
    </ThemeProvider>
  );
}



export default App;