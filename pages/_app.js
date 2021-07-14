import { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import GlobalStyles from '../src/commons/globalStyles'

export const GlobalContext = createContext({
  isMoblie: Boolean
})

function MyApp({ Component, pageProps }) {
  const isMoblie = useMediaQuery({ maxWidth: 768 })

  return (
    <GlobalContext.Provider value={{isMoblie}}>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
