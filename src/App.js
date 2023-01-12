import styles from './App.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';
import ProductSimple from './Components/ProductSimple';

function App() {
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
  const filterData = (brand,color) => { 
    console.log("products",products)
    let temp2 = products.filter((e) => e.brand === brand&&e.color===color);
    console.log("temp2",temp2);
    setProducts(temp2);
  }
 
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
        products?.map((element) => {
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
          filterData("nike","black")
        }} className={ styles.greenButton}>Puma</button>
        <button onClick={() => { 
          filterData("nike","black")
        }} className={ styles.redButton}>Adidas</button>
      </div>
    </div>
  );
}

export default App;
