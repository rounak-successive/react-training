// 3.creat pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import { Routes, Route, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound'
import About from './About'

const Home = () => {
  const navigate = useNavigate()
  const navigateToAbout = () => {
    navigate('about')
  }

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={navigateToAbout}>Go to About </button>
    </div>
  )
}

const Question3Container = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Question3Container
