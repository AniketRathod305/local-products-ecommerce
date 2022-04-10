import React from 'react'
import './Products.css'

function Products({price,title,imgsrc}) {


  return (
    
    
    <div className='wlayout'>
    
         
         <img className='pimg' src={imgsrc}/>
         <h3 className='heading2'>{title}</h3>
         <div className="priceflex">
         <h4>Rs.{price}/-</h4> 
         <button id="buybtn">BUY</button>  
         </div>

    </div>
        
      
    
    
    
  )
}

export default Products