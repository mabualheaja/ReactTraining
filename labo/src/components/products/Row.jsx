const ProductRow = ({ product }) => {
    return (
        <tr>
        <td style={{ color: product.stocked ? "black" : "red" }}>{product.name}</td>
        <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;