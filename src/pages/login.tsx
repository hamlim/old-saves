import { Suspense } from 'react'
import { Box, Text } from '@ds-pack/components'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Login({ userDispatch }) {
  return (
    <Main>
      <Header title="Login" />
      <Box is="section"></Box>
    </Main>
  )
}
