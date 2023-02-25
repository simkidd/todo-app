import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landingPage.scss'
import TodoBg from '../assets/To-Do-List-Background.jpeg'

const Landing = () => {
    return (
        <div className='landingPage'>
            <div className="landingLeft">
                <div className="imgWrapper">
                    <img src={TodoBg} alt='' />

                </div>
            </div>
            <div className="landingRight">
                <h1>Welcome to Go Task</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non nam quod nesciunt cumque aliquam, facilis iste voluptatum! Asperiores, rerum?</p>
                <Link to="/todos" >Let's Start</Link>
            </div>
        </div>
    )
}

export default Landing
