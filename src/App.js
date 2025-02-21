import './App.css';
import { useState } from 'react';
import ProductList from './hooks/productList';

function App() {
  // const [count, setCount] = useState(0);

  // const countClick = () => {
  //   setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : "Reached limit!"));
  // };

  // const minusClick = () => {
  //   setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  // };

  // return (
  //   <div>
  //     <button onClick={countClick}>+</button>
  //     <p>The value is {count}</p>
  //     <button onClick={minusClick}>-</button>
  //   </div>
  // );
  return (
    <div>
      <h1>E-Commerce Store 🛒</h1>
      <ProductList />
    </div>
  );
}

export default App;


