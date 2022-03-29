import React from 'react'
import Img from '../images/img.png'
import Img1 from '../images/imgthree.png'
import Img2 from '../images/my-img.png'
import Img3 from '../images/img.png'
import Img4 from '../images/img1.png'
import Img5 from '../images/img2.png'
import Img6 from '../images/img3.png'
import Images from './Images'



function Gallery() {
  return (
    <>
    <div className="container">
      <div className="row text-center my-3">
        <h2>Gallery</h2>
      </div>
      <div className="row d-flex">
        <Images src={Img}/>
        <Images src={Img1}/>
        <Images src={Img2}/>
        <Images src={Img3}/>
      </div>
    </div>
    </>
  )
}

export default Gallery
