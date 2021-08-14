import { Suspense } from 'react'
import { Box, Text } from '@ds-pack/components'
import { useCache } from '@matthamlin/simple-cache'
import Header from '../components/Header'

async function request() {
  let res = await fetch('/api/get')
  return await res.json()
}

let cache = new Map()

export default function Saves() {
  return (
    <Box>
      <Header title="Saved Links" />
      <Suspense fallback="loading...">
        <List />
      </Suspense>
    </Box>
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
