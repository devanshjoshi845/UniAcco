import React from 'react'

function Cardsmall({country,price,src}) {
  return (
    <div className='smallcard'>
     <img src={src} alt=""  className='card-img'/>
     <div className='like'><span class="material-symbols-outlined" style={{fontSize:"40px" ,color:"white"}} >
favorite
</span></div>

<div className='detail-flex'>
<span class="material-symbols-outlined">
star
</span>
<p style={{fontSize:"20px"}}>4.99 <span style={{color:"gray"}}>(153).{country}</span> </p>
</div>
  <div className='detail-smal'>Plan a trip to amazing </div>
  <div className='price'> <h3>From ₹{price} <span style={{color:"gray"}}>/Person</span></h3></div>
    </div>
  )
}

export default Cardsmall