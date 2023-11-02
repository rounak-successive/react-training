// 5. Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

import React from 'react'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import './Assignment3.css'
import Settings from './Settings'
import Profile from './Profile'

const Question5Container = () => {
  return (
    <div className='dashboard-container'>
      <nav className='navigation'>
        <ul>
          <li>
            <Link to='.'>Dashboard</Link>
          </li>
          <li>
            <Link to='profile'>Profile</Link>
          </li>
          <li>
            <Link to='settings'>Settings</Link>
          </li>
        </ul>
      </nav>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const DashboardHome = () => {
  const recentActivities = [
    { id: 1, activity: 'Logged in', date: '01-11-2023' },
    { id: 2, activity: 'Completed Assignment 3', date: '02-11-2023' },
  ]

  return (
    <div className='dashboard-section'>
      <h3 style={{ marginTop: '5px' }}>Welcome to Your Dashboard</h3>
      <p>Recent Activities:</p>
      <ul>
        {recentActivities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.activity}</strong> - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question5Container
