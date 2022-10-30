import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Cardbig from './Cardbig'

function Midsection() {
 
 let box;
 let smallbox;

 useEffect(()=>{
  box=document.querySelector('.box')
 },[])
 useEffect(()=>{
  smallbox=document.querySelector('.right-side')

 },[])
 function rights(){
  let width=smallbox.clientWidth;
 smallbox.scrollLeft=smallbox.scrollLeft+width;

 }
 function lefts(){
  let width=smallbox.clientWidth;
 smallbox.scrollLeft=smallbox.scrollLeft-width;

 }
 function left(){
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft-width;
 
 }
 function right(){
 
  let width=box.clientWidth;
box.scrollLeft=box.scrollLeft+width;

 }
  
  return (
    <div className='mid-section'>
     <div className='mid-one'>
     <h1  className="new">New this week</h1>
     <div className='bar'>
     <span className="material-symbols-outlined worlds left" onClick={left} >
arrow_back_ios
</span> 
<span className="material-symbols-outlined worlds right" onClick={right}> 
arrow_forward_ios
</span>
     </div>
     </div>
    

    <div id='bigcard-wraper' className='box' > 
    <Cardbig src="/1img.webp" detail1="Most popular" detail2="around the world"/>
    <Cardbig src="/2img.webp" detail1="Great for team" detail2="building" />
    <Cardbig src="/3img.webp" detail1="Fun for the family" detail2=""/>
    <Cardbig src="/1img.webp" detail1="Most popular" detail2="around the world"/>
    <Cardbig src="/2img.webp" detail1="Great for team" detail2="building" />
    <Cardbig src="/3img.webp" detail1="Fun for the family" detail2=""/>
    <Cardbig src="/1img.webp" detail1="Most popular" detail2="around the world"/>
    <Cardbig src="/2img.webp" detail1="Great for team" detail2="building" />
    <Cardbig src="/3img.webp" detail1="Fun for the family" detail2=""/>
    <Cardbig src="/1img.webp" detail1="Most popular" detail2="around the world"/>
    <Cardbig src="/2img.webp" detail1="Great for team" detail2="building" />
    <Cardbig src="/3img.webp" detail1="Fun for the family" detail2=""/>
    </div>


    <div className='row-item'>

    <div className='left-side'>
      <div className='left-cir'>Dates</div>
      <div className='left-cir'> Size</div>
      <div className='left-cir'> Filter</div>
      <p className='line'>|</p>
    </div>
    <span className="material-symbols-outlined worlds arrow-air"  onClick={lefts}>
arrow_back_ios
</span> 
   <div className='right-side'>

   
      <div className='right-cir'>Animals</div>
      <div className='right-cir'>Dance</div>
      <div className='right-cir'>Drinks</div>
      <div className='right-cir'>Enterainment</div>
      <div className='right-cir'>Baking</div>
      <div className='right-cir'>Cooking</div>
      <div className='right-cir'>Dance</div>
      <div className='right-cir'>Drinks</div>
      <div className='right-cir'>Dance</div>
      <div className='right-cir'>Drinks</div>
      <div className='right-cir'>Baking</div>
      <div className='right-cir'>Cooking</div>
      <div className='right-cir'>Dance</div>
      <div className='right-cir'>Drinks</div>
      <div className='right-cir'>Wellnes</div>
      <div className='right-cir'>Dance</div>
      <div className='right-cir'>Music</div>
      <div className='right-cir'>Magic</div>
   </div>
   <span className="material-symbols-outlined arrow-cir" onClick={rights}> 
arrow_forward_ios
</span>
    </div>
      </div>
  )
}

export default Midsection