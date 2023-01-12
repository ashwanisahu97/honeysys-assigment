import React from 'react'
import styles from '../Styles/ProductListing.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';
const ProductListing = () => {
    const [products, setProducts] = useState([])
  useEffect(() => { 
    fetchData()
  }, [])
 
  const fetchData = () => { 
    axios.get("http://localhost:8080/products").then(({ data }) => {
      console.log("data", data);
      setProducts(data);
    }).catch((error) => { 
      console.log("error",error)
    })
  }
  return (
    <div className={styles.container}>
          {
              products.map((element) => { 
                  return (<div className={ styles.card}>
                    <div className={ styles.productTitle}><h1>{ element.title}</h1></div> 
                   <div className={ styles.productDescription}> <p>{ element.description}</p></div> 
                    <div className={ styles.productImage}><img src={ element.image} alt="" /> </div>
                  </div>
                  )
              })
          }
    </div>
  )
}

export default ProductListing