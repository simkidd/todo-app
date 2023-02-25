import React from 'react';
import './App.css'
import Landing from './pages/Landing'
import TodoApp from './pages/TodoApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/todos' element={<TodoApp />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App


