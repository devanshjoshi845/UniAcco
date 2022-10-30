import React from 'react'
import Cardsmall from './Cardsmall'
import { useEffect } from 'react';
function Lastsection() {
 let box;
 

 useEffect(()=>{
  box=document.querySelector('.card-wraper')
 },[])

 function left(){
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft-width;
 
 }
 function right(){
 
  let width=box.clientWidth;
box.scrollLeft=box.scrollLeft+width;

 }
 
  return (
    <div className='latsection'>
    <div className='mid-one'>
     <h1  className="heading">Plan a trip with help from local Hosts around the world</h1>
     <div className='bar c'>
      <div className='no'>show(9)</div>
     <span className="material-symbols-outlined worlds leftlast"  onClick={left} >
arrow_back_ios
</span> 
<span className="material-symbols-outlined worlds rightlast"  onClick={right}> 
arrow_forward_ios
</span>
     </div>
     </div>

     <div className='card-wraper cd'>
      <Cardsmall src="/4img.avif" country="UnitedStates"  price="1556"/>
      <Cardsmall src="/5img.avif" country="Austria"  price="3119"/>
      <Cardsmall src="/6img.avif" country="Spain"  price="3475"/>
      <Cardsmall src="/7img.avif" country="Mexico"  price="6224"/>
      <Cardsmall src="/8img.avif" country="SouthKorea"  price="2060"/>
      <Cardsmall src="/9img.avif" country="Italy"  price="985"/>
      <Cardsmall  src="/10img.avif" country="Denmark"  price="2462"/>
      <Cardsmall src="/11img.avif" country="Sweden"  price="989"/>
      <Cardsmall  src="/12img.avif" country="Greece"  price="1730"/>
     </div>
    </div>
  )
}

export default Lastsection