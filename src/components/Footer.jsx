import React from 'react'
import Lastcard from './Smallcard'
import { useEffect } from 'react';
function Footer() {
 let box;
 

 useEffect(()=>{
  box=document.querySelector('.smallcard-wrap')
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
    <div className='footer'>
     <div className='mid-one'>
     <h1 className='heading' id='h'>Starting in the next 6 hours</h1>
     <div className='bar c'>
      <div className='no'>show(9)</div>
     <span class="material-symbols-outlined worlds leftfoot"  onClick={left} >
arrow_back_ios
</span> 
<span class="material-symbols-outlined worlds rightfoot" onClick={right} > 
arrow_forward_ios
</span>
     </div>
     </div>
     <div className='smallcard-wrap'>
     <Lastcard  src="/11img.avif" country="USA" price="2000"/>
     <Lastcard  src="/10img.avif" country="Denmark"  price="2462"/>
     <Lastcard  src="/9img.avif" country="Italy"  price="985"/>
     <Lastcard  src="/8img.avif" country="SouthKorea"  price="2060"/>
     <Lastcard  src="/12img.avif" country="Greece"  price="1730"/>
     <Lastcard  src="/7img.avif" country="Mexico"  price="6224"/>
     <Lastcard  src="/6img.avif" country="Spain"  price="3475"/>
     <Lastcard  src="/5img.avif" country="Austria"  price="3119"/>
     </div>
    </div>
  )
}

export default Footer