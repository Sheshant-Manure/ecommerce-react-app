import React from 'react';
import ProductsList from './components/ProducstsList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const toggle = useSelector((state)=>state.navReducer.toggle);

  return (
    <>
      <Navbar />
      { toggle ? <ProductsList /> : <Cart /> }
    </>
  );
}

export default App;
