import { Box, Text, Heading } from '@ds-pack/components'
import Header from '../components/Header'
import Main from '../components/Main'

export default function App() {
  return (
    <Main>
      <Header />
      <Box is="section" p="$2">
        <Heading textAlign="center" mt="$8" is="p" variant="h1">
          Welcome to{' '}
          <Text is="span" color="$red-4">
            Saves ♥️
          </Text>
        </Heading>
      </Box>
    </Main>
  )
}
