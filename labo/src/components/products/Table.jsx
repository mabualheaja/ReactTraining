

import ProductCategoryRow from "./CategoryRow";
import ProductRow from "./Row";

export const ProductTable = ({ products, filterText, inStockOnly }) => {
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
};
