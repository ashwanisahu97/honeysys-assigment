import logo from './logo.svg';
import './App.module.css'; 
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => { 
    fetchData()
  }, [])
  const fetchData = () => { 
    axios.get("http://localhost:8080/products").then(({ data }) => {
      console.log("data", data);
    }).catch((error) => { 
      console.log("error",error)
    })
  }
  return (
    <div>
      <table>
        <thead></thead>
        <tr>
<th>id</th>
<th>id</th>
<th>id</th>
<th>id</th>
        </tr>
      </table>
      {
        products?.map((element) => {
          return <ProductSimple element={element} key={element.id}/>
        })
      }
    </div>
  );
}

export default App;
