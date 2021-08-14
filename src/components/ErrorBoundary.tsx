import { Component, ReactNode } from 'react'

interface Props {
  fallback: ReactNode
  children: ReactNode
}

interface State {
  error: null | Error
}

export default class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    let { error } = this.state

    if (error) {
      return this.props.fallback
    }

    return this.props.children
  }
}
