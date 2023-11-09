// 2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.

import React from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

const Question2Container = () => {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<h1>Loading Home...</h1>}>
              <Home />
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
    </ErrorBoundary>
  )
}

export default Question2Container
