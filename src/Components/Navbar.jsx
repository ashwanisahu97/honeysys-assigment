import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"
const Navbar = () => {
  return (
      <nav style={{display:"flex",gap:"20px" ,alignItems:'center',justifyContent:"space-around", backgroundColor:"#232f3e", color:"white",width:"100%",height:"50px"}}>
          <div><Link to="/"> <span  style={{color:"white"}}>Homepage</span></Link></div>
          <div><Link to="/products"> <span  style={{color:"white"}} >Product Listing page </span> </Link> </div>
    </nav>
  )
}

export default Navbar