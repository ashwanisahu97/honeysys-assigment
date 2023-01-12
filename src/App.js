import styles from './App.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';
import ProductSimple from './Components/ProductSimple';

function App() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState(products)
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
    let temp=[...products]
    let temp2 = temp.filter((e) => e.brand === brand&&e.color===color);
    console.log("temp2",temp2);
    setFilterProducts(temp2);
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
          filterData("adidas","red")
        }} className={ styles.redButton}>Adidas</button>
      </div>
    </div>
  );
}

export default App;
