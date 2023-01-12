import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav style={{display:"flex",gap:"20px" ,alignItems:'center',justifyContent:"center"}}>
          <div><Link to="/"> Homepage</Link></div>
          <div><Link to="/products"> Product Listing page</Link></div>
    </nav>
  )
}

export default Navbar