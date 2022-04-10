import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {

    const navstyle={
        color:'white',
        textDecoration: 'none' 
      }



    return (
        <div className='nav'>
    
          <div className='title'>VOCAL FOR LOCAL</div>
          <ul>
          <Link to='/' style={navstyle}><li >Home</li></Link>
          <Link to='/shop' style={navstyle}><li >Shop</li></Link>
          <Link to='/explore' style={navstyle}><li >Explore</li></Link>
         
         
          </ul>
        </div>
      )
}

export default Navbar