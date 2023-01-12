import logo from './logo.svg';
import './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => { 
    fetchData()
  }, [])
  const fetchData = () => { 
    axios.get("")
  }
  return (
    <div>
     
    </div>
  );
}

export default App;
