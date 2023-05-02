
import {PRODUCTS } from "./data/product";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}

export default App
