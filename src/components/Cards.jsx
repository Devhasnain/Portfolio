import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'
// import Img1 from '../images/img.png'
function Cards(props) {
    return (
        <>
            <div className='mx-5'>
                <div className="card my-card-com" style={{width: "18rem"}}>
                    <img className="card-img-top" src={props.img} alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                            <NavLink to="/gallery" className="btn btn-outline-dark">See more</NavLink>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Cards
