import { useState } from 'react'


const PRODUCTS = [
  { category: "Fruits", price: "$5", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$3", stocked: true, name: "Orange" },
  { category: "Fruits", price: "$8", stocked: false, name: "Abrichot" },

  { category: "Vegetables", price: "$7", stocked: true, name: "Potato" },
  { category: "Vegetables", price: "$10", stocked: false, name: "Spinach" },
  { category: "Vegetables", price: "$14", stocked: true, name: "Pumpkin" },
];


const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
         />
    </div>
  );
};

const SearchBar = (onFilterTextChange, onInStockOnlyChange, filterText, inStockOnly) => {
  return (
    <form>
      <input
        value={filterText}
        style={{ display: "block" }}
        type="text"
        placeholder="Search ..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          checked={inStockOnly}
          type="checkbox"
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {''} Only show products in stock
      </label>
    </form>
  );
}

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = []; // array to add category in row
  let lastCategory = null;

  products.forEach((product) => {//loop to get the category of product
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }
    if (inStockOnly && !product.stocked) { // if user checked the checkbox and the product not stocked then we don't need to return it 
      return
    }

    if (product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />); // to add product row
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
      <tbody>{rows}</tbody>
    </table>
  )
}

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}

export default App
