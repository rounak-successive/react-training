import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Assignment1 from './Assignment-Day-1/Assignment1'
import Assignment1Copy from './Assignment-Day-1_class/Assignment1'
import Assignment2 from './Assignment-Day-2/Assignment2'
import Assignment3 from './Assignment-Day-3/Assignment3'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/assignment-1/:questionNo?/*' element={<Assignment1 />} />
        <Route
          path='/assignment-1-class/:questionNo?/*'
          element={<Assignment1Copy />}
        />
        <Route path='/assignment-2/:questionNo?/*' element={<Assignment2 />} />
        <Route path='/assignment-3/:questionNo?/*' element={<Assignment3 />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
