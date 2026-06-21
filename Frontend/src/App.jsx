import React from 'react'
import AppRouter from './AppRouter.jsx'
import { AuthProvider } from './Features/Auth/auth.context.jsx'
import { PostContextProvider } from './Features/Post/post.context.jsx'

// Application Root Component
const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRouter />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App