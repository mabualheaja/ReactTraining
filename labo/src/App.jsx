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

const FilterableProductTable = ({products}) => {
  return (
  <div>
     <SearchBar/>
     <ProductTable products={products}/>
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

const ProductTable = ({products}) => {
  const rows =[]; // array to add category in row
  let lastCategory = null;

  products.forEach((product) => { //loop to get the category of product
    if(product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category = {product.category}
          key = {product.category}
         />
      );
    }

    rows.push(<ProductRow product ={product} key = {product.name} />); // to add product row
    lastCategory = product.category
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody> {rows} </tbody>
    </table>
  )
}

const ProductCategoryRow = ({category}) => {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
};

const ProductRow = ({product}) => {
  return (
    <tr>
      <td style={{color: product.stocked ? "black" : "red"}}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function App() {
  return (
    <FilterableProductTable products = {PRODUCTS}/>
  )
}

export default App
