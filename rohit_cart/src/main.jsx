import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.jsx'
import ProductList from './components/ProductList.jsx'
import Footer from './components/Footer.jsx'

const initialproductList = [
  {
    name: "iPhone 16pro max",
    price: 99999,
    quantity: 0
  },
  {
    name: "Redmi note 13pro",
    price: 16999,
    quantity: 0
  }
];

const Main = () => {
  // Initialize state with the initial product list
  const [productList, setProductList] = useState(initialproductList);

  const increamentQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity=0 
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        {/* Pass the product list and increment function as props */}
        <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} />
      </main>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <Footer />
  </StrictMode>
);
