import { ThemeProvider, Reset, Box } from '@ds-pack/components'
import Head from 'next/head'
import { useReducer } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import { UserProvider, User } from '../hooks/user'

interface Action {
  type: 'login' | 'logout'
  user?: User
}

type State = User | void

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case 'login': {
      return action.user
    }
    case 'logout': {
      return undefined
    }
    default: {
      throw new Error(`Error in userReducer.\n\n${action.toString()}`)
    }
  }
}

function Fallback() {
  return (
    <ThemeProvider>
      <Reset />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Oh No!</title>
      </Head>
      <Box>Uh Oh! It looks like an error occured!</Box>
    </ThemeProvider>
  )
}

let simulateLoggedInUser = true

let fakeUser = {
  id: 0,
  name: 'Matt',
  email: 'matthewjameshamlin@gmail.com',
}

export default function App({ Component, pageProps }) {
  let [state, dispatch] = useReducer(
    userReducer,
    simulateLoggedInUser ? fakeUser : undefined,
  )
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <UserProvider user={state}>
        <ThemeProvider>
          <Reset />
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <title>Saves ♥️</title>
          </Head>
          <Component {...pageProps} userDispatch={dispatch} />
        </ThemeProvider>
      </UserProvider>
    </ErrorBoundary>
  )
}
