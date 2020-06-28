import * as React from 'react'
import { Box, Text, Button, Label } from '@ds-pack/components'
import { useCache } from '@matthamlin/simple-cache'

async function request() {
  let res = await fetch('/api/get')
  return await res.json()
}

let cache = new Map()

export default function App() {
  return (
    <Box>
      <Text>Hello, World!</Text>
      <React.Suspense fallback="loading...">
        <List />
      </React.Suspense>
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
