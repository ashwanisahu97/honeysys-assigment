import React from 'react'
import ProductListing from '../Pages/ProductListing'
import Homepage from '../Pages/Homepage'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={< Homepage/>}></Route>
          <Route path="/products" element={< ProductListing/>}></Route>
   </Routes>
  )
}

export default AllRoutes