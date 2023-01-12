import React from 'react'

const ProductSimple = ({ element}) => {
  return (
      <tr>
          <td>{ element.id}</td>
          <td>{ element.title}</td>
          <td>{ element.brand}</td>
          {/* <td>{ element.description}</td> */}
          <td><button style={{background:element.color}}>{ element.color}</button></td>
   </tr>
  )
}

export default ProductSimple