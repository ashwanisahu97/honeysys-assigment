import React from 'react'

const ProductSimple = ({ element}) => {
  return (
      <tr>
          <td>{ element.id}</td>
          <td>{ element.title}</td>
          <td>{ element.brand}</td>
          {/* <td>{ element.description}</td> */}
          <td>{ element.color}</td>
   </tr>
  )
}

export default ProductSimple