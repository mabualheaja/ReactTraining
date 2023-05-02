import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const PRODUCTS = [
  {id:1, title:""},
];

const FilterableProductTable = () => {

}
const SearchBar = () => {

}

const ProductTable = () => {

}

const ProductCategoryRow = () => {

}

const ProductRow = () => {

}

function App() {
  const [count, setCount] = useState(0);
  const [primaryColor, setPrimaryColor] = useState("pink");
  const [secondaryColor, setSecondaryColor] = useState("brown");
  return (
    <FilterableProductTable/>
  )
}

export default App
