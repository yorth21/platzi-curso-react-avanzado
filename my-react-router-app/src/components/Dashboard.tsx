import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <ul>
        <li><Link to="/dashboard/overview">Overview</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
      </ul>
      <Outlet />
    </section>
  )
}

export default Dashboard
