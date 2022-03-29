import React from 'react'
import Cards from './Cards';
import './style.css';
import Img1 from '../images/img.png'
import Img2 from '../images/imgthree.png'
import Img3 from '../images/my-img.png'
function About() {
  return (
    <>
      <div className="container" id='about-page-background'>
        <div className="row text-center">
          <div className="col my-4">
            <h3>About Us</h3><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem magnam, velit quae dicta eveniet laborum nihil! Facilis maxime fugit non id excepturi harum eligendi doloribus, dolore accusamus totam est, saepe eius ipsam, repellendus veritatis beatae. Possimus inventore, accusantium minus ducimus perferendis beatae commodi voluptatum eligendi deserunt nemo asperiores cupiditate?</p>
          </div>
          <div className="row">
            <div className="col d-flex">
              <Cards title='Card' img={Img1} />
              <Cards title='Card1' img={Img2} />
              <Cards title='Card2' img={Img3} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
