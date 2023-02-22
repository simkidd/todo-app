import React from 'react';
import './App.css'
import Landing from './pages/Landing'
import TodoApp from './pages/TodoApp'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>To-Do App</h1>
      <Landing />
      <TodoApp />
    </div>
  )
}

export default App


