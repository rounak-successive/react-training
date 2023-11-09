// 1.Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

const Question1Container = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<h1>Loading Home...</h1>}>
            <Home />{' '}
          </Suspense>
        }
      />
      <Route
        path='/about'
        element={
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Question1Container
