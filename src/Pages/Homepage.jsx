import styles from '../Styles/Homepage.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';
import ProductSimple from '../Components/ProductSimple';


function Homepage() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  useEffect(() => { 
    // alert("first useEffect")
    fetchData()
  }, [])
  useEffect(() => { 
    // alert(JSON.stringify(products))
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
  const filterData = (brand,color) => { 
    let temp=[...products]
    let temp2 = temp.filter((e) => e.brand === brand&&e.color===color);
    console.log("temp2",temp2);
    setFilterProducts(temp2);
  }
  console.log("filter value", filterProducts);
  console.log("products", products);
  return (
    <div className={ styles.container}>
      <table>
        <thead>
        <tr>
<th>Id</th>
<th>Title</th>
<th>Brand</th>
{/* <th>Description</th> */}
<th>Color</th>
          </tr>
          </thead>
     <tbody>
      {
        filterProducts?.map((element) => {
          return <ProductSimple element={element} key={element.id}/>
        })
          }
          </tbody>
      </table>
      <div>
        <button onClick={() => { 
          filterData("nike","black")
        }} className={ styles.blackButton}>Nike</button>
        <button onClick={() => { 
          filterData("puma","green")
        }} className={ styles.greenButton}>Puma</button>
        <button onClick={() => { 
          filterData("addidas","red")
        }} className={ styles.redButton}>Adidas</button>
      </div>
    </div>
  );
}

export default Homepage;
