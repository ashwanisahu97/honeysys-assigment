import React from 'react'
import styles from '../style/ProductListing.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';
import ProductSimple from './Components/ProductSimple';
const ProductListing = () => {
    const [products, setProducts] = useState([])
  useEffect(() => { 
    fetchData()
  }, [])
  useEffect(() => { 
    setFilterProducts(products);
  },[products.length])
  const fetchData = () => { 
    axios.get("http://localhost:8080/products").then(({ data }) => {
      console.log("data", data);
      setProducts(data);
    }).catch((error) => { 
      console.log("error",error)
    })
  }
  return (
      <div className={ styles.container}>
          {
              products.map((element) => { 
                  return (<div className={ styles.card}>
                      <h1>{ element.title}</h1>
                      <p>{ element.title}</p>
                      <div><img src={ element.image} alt="" /> </div>
                  </div>
                  )
              })
          }
    </div>
  )
}

export default ProductListing