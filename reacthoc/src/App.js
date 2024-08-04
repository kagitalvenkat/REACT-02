import React from 'react'
import withAuth from './pages/withAuth'
import Dashboard from './pages/Dashboard'
const App = () => {
  const AuthDashBoard = withAuth(Dashboard)
  return (
    <div>
      <AuthDashBoard/>
    </div>
  )
}

export default App