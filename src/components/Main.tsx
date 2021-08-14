import { Box } from '@ds-pack/components'
import { ReactNode } from 'react'

export default function Main({
  children,
  footer = null,
}: {
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <Box
      is="main"
      display="grid"
      gridTemplateRows={footer ? '60px 2fr 60px' : '60px 2fr'}
      minHeight="100vh"
    >
      {children}
      {footer}
    </Box>
  )
}
