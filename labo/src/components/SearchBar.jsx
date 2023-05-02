const SearchBar = ({onFilterTextChange, onInStockOnlyChange, filterText, inStockOnly}) => {
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
};

export default SearchBar;