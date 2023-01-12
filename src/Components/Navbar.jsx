import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav style={{display:"flex",gap:"20px" ,alignItems:'center',justifyContent:"center"}}>
          <div><Link> Homepage</Link></div>
          <div><Link> Product Listing page</Link></div>
    </nav>
  )
}

export default Navbar