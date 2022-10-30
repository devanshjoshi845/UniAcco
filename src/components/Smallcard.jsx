import React from 'react'

function Lastcard({country,price,src}) {
  return (
    <div className='last-card'>
     <div className='small-left'>
     <img src={src} alt=""  className='smallimg'/>
     </div>
     <div className='small-right'>
<div className='small-rate'>

<div className='detail-flex'>
<span class="material-symbols-outlined">
star
</span>
<p style={{fontSize:"20px"}}>4.99 <span style={{color:"gray"}}>(153).{country}</span> </p>
</div>


<div className='detail-smal'>Hideen jazz club </div>

 <div className='price'> <h3>From ₹{price} <span style={{color:"gray"}}>/Person</span></h3></div>
</div>

<div className='small-time'>
<button className='time'>8.30 Pm</button>
<button className='time'>9.30 Pm</button>
</div>


<span class="material-symbols-outlined fav"  style={{fontSize:"40px" ,color:"black"}} >
favorite
</span>

     </div>
    </div>
  )
}

export default Lastcard