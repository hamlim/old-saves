import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Text, Box } from '@ds-pack/components'

export default function Save({ userDispatch }) {
  return (
    <Main footer={<Footer userDispatch={userDispatch} />}>
      <Header title="Save" />
      <Box is="section" p="$2">
        <Text>Save!</Text>
      </Box>
    </Main>
  )
}
