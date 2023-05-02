import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const PRODUCTS = [
  {category:"Fruits", price:"$5", stocked: true, name: "Apple"},
  {category:"Fruits", price:"$3", stocked: true, name: "Orange"},
  {category:"Fruits", price:"$8", stocked: false, name: "Abrichot"},

  {category:"Vegetables", price:"$7", stocked: true, name: "Potato"},
  {category:"Vegetables", price:"$10", stocked: false, name: "Spinach"},
  {category:"Vegetables", price:"$14", stocked: true, name: "Pumpkin"},
];

const FilterableProductTable = () => {
  return (
  <div>
     <SearchBar/>
  </div>
  );
};

const SearchBar = () => {
  return (
    <form>
      <input style={{display: "block"}} type="text" placeholder="Search ..."/>
      <label>
        <input type="checkbox"/>
        {''} Only show products in stock
      </label>
    </form>
  );
}

const ProductTable = () => {
  return (
    <div>
      <ProductCategoryRow/>
      <ProductRow/>
    </div>
  )
}

const ProductCategoryRow = () => {

}

const ProductRow = () => {

}

function App() {
  const [count, setCount] = useState(0);
  return (
    <FilterableProductTable/>
  )
}

export default App
