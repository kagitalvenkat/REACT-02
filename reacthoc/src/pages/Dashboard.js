import React from 'react'
import withAuth from './withAuth'
import withDarkMode from './withDarkMode'

const Dashboard = () => {
  return (
    <div>
        <h3>Dashboard Component</h3>
    </div>
  )
}
const AuthDashBoard = withDarkMode( withAuth(Dashboard))

export default AuthDashBoard