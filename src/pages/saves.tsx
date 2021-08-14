import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Suspense } from 'react'
import { Box, Text } from '@ds-pack/components'
import { useCache } from '@matthamlin/simple-cache'

async function request() {
  let res = await fetch('/api/get')
  return await res.json()
}

let cache = new Map()

export default function Saves({ userDispatch }) {
  return (
    <Main footer={<Footer userDispatch={userDispatch} />}>
      <Header title="Saved Links" />
      <Box is="section" p="$2">
        <Suspense fallback="loading...">
          <List />
        </Suspense>
      </Box>
    </Main>
  )
}

function List() {
  let [res] = useCache(cache, 'get', request)
  return res.map(({ fields, id }) => (
    <Box forwardedAs="pre" key={id}>
      {JSON.stringify(fields, null, 2)}
    </Box>
  ))
}
