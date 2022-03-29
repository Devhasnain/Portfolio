import React from 'react'

function Images(props) {
  return (
      <>
      <div className='d-flex'>
          <img src={props.src} alt="" />
      </div>
      </>
  )
}

export default Images
