import { Box, Heading, Text } from '@ds-pack/components'
import Link from './Link'
import { useRouter } from 'next/router'

function ActiveLink({ href, ...props }) {
  let router = useRouter()
  if (href === router.pathname) {
    return <Text display="inline" is="span" {...props} />
  }
  return <Link {...props} href={href} />
}

export default function Header({ title = '' }) {
  return (
    <Box
      p="$4"
      backgroundColor="$red-1"
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Heading pr="$2" is="h1" variant="h3">
          <Link href="/">Saves ♥️</Link>
        </Heading>
        {title ? <Text>{title}</Text> : null}
      </Box>
      <Box>
        <ActiveLink pr="$2" href="/save">
          Save Link
        </ActiveLink>
        <ActiveLink href="/saves">View Saved Links</ActiveLink>
      </Box>
    </Box>
  )
}
