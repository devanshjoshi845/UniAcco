import React from 'react'

function Cardbig({src,detail1,detail2}) {
  return (
    <div className='Big-Card'>
     <img src={src} alt="" className='Big-cardimg' />
     <p className='col'>Collection</p>
     <h1 className='detail-Big'>{detail1} <br />{detail2}</h1>
     <button className='bt-Big'>show all</button>
    </div>
  )
}

export default Cardbig