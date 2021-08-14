import { createContext, useContext, ReactNode } from 'react'

export interface User {
  loggedIn: boolean
  userId: number
  name: string
  email: string
}

let userContext = createContext<User | void>(undefined)

export function useUser(): User | void {
  return useContext(userContext)
}

export function UserProvider({
  user,
  children,
}: {
  user: User
  children: ReactNode
}) {
  return <userContext.Provider value={user}>{children}</userContext.Provider>
}
