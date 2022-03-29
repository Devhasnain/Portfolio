import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Home from './Home'
import './style.css'
function Portfolio() {
    return (
        <>
            <Router>
                <div className="container-fluid sticky-top main-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className='p-3'>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <NavLink className="nav-link link-dark" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link link-dark" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link link-dark" to="/gallery">Gallery</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link link-dark" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
            </Router>
        </>
    )
}

export default Portfolio
