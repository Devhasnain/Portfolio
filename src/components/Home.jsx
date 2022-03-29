import React, { useState } from 'react'
import './Home.css';
import './style.css'
import { NavLink } from 'react-router-dom';
import Imgone from '../images/img.png';
import Imgtwo from '../images/my-img.png';
import imgthree from '../images/imgthree.png';
import Cards from './Cards';
function Home() {
    const ary = [
        Imgone,
        Imgtwo,
        imgthree
    ]
    var i = 0;
    const [img, setImg] = useState(ary[i]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col my-5 p-3">
                        <div className="my-5">
                        <div className="row ">
                            <h2>Hi I'm,</h2>
                            <h1>Hasnain Alam</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Quo nostrum ipsam quidem rerum aliquam delectus aspernatur,<br /> laborum fugit, alias quam dolorum voluptatem<br /> perferendis saepe sequi et aut<br /> harum velit minus?</p>
                        </div>
                        <NavLink to='/contact' className='btn btn-outline-dark'>Contact Me</NavLink>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="slider-img">
                            <img  src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col d-flex ">
                        <Cards title='this is card' img={imgthree}/>
                        <Cards title='this is card' img={Imgone}/>
                        <Cards title='this is card' img={Imgtwo}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
