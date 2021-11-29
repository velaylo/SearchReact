import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  function handlerFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  function handlerInStockChange(inStockOnly) {
    setInStockOnly(inStockOnly);
  }

  return (
    <div>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handlerFilterTextChange}
        onInStockChange={handlerInStockChange}
      />
      <ProductTable 
        products={props.products} 
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )

}

export default FilterableProductTable

