import { Box, Button, Text } from '@ds-pack/components'

export default function Footer({ userDispatch }) {
  return (
    <Box
      is="footer"
      p="$4"
      backgroundColor="$red-1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button variant="text" onClick={() => userDispatch({ type: 'logout' })}>
        Logout
      </Button>
      <Box>
        <Text>©️ {new Date().getFullYear()}</Text>
      </Box>
    </Box>
  )
}
