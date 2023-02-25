import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <h1>Welcome to ToDo APP</h1>
            <Link to="/todos">Click to continue</Link>
        </div>
    )
}

export default Landing
