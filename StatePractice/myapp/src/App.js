import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Counter from './Components/Counter';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  // Getting Data from  Counter.js
  let [totalCartCount, setCartCount]=useState(0);
  function increaseCartCount(a){
  // Setting Cart value;
    setCartCount(a)
  }
 
  return (
    <div className="App">
      <Card type="Product" name="jaiten" />
      < Counter increasecartCount={increaseCartCount}/>
      < Cart name="jaiten" cartCount={totalCartCount}/>
    </div>
  );
}

export default App;
