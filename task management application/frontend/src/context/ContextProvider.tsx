import   { ReactNode } from 'react'
import { AuthProvider } from './Auth.context'
import { TaskProvider } from './Task.context'

const ContextProvider = ({children}:{children:ReactNode}) => {
  return (
    <AuthProvider>
      <TaskProvider>
          {children}
      </TaskProvider>
    </AuthProvider>
  )
}

export default ContextProvider