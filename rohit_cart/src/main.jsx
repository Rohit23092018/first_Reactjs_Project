import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/navbar.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import AddItem from './components/Additem.jsx';

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
  let [productList, setProductList] = useState(initialproductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const increamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount = newTotalAmount + newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount = newTotalAmount - newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () =>{
    let newProductList = [...productList];
    newProductList.map((initialproductList)=>{
      initialproductList.quantity=0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem=(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem=(name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0
    });
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <AddItem addItem={addItem}/>
        {/* Pass the product list and increment function as props */}
        <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeItem={removeItem} />
      </main>
      {/* Pass totalAmount to Footer */}
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
