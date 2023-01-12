import React from 'react'
import ProductListing from '../Pages/ProductListing'
import Homepage from '../Pages/Homepage'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={< Homepage/>}></Route>
          <Route path="/productListing" element={< ProductListing/>}></Route>
   </Routes>
  )
}

export default AllRoutes