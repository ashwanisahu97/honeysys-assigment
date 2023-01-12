import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav style={{display:"flex",gap:"20px" ,alignItems:'center',justifyContent:"center", backgroundColor:"#232f3e",width:"100%",height:"50px"}}>
          <div><Link to="/"> Homepage</Link></div>
          <div><Link to="/products"> Product Listing page</Link></div>
    </nav>
  )
}

export default Navbar