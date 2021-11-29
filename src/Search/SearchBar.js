import React from 'react';

function SearchBar(props) {

    function handlerFilterTextChange(e) {
      props.onFilterTextChange(e.target.value);
    };
  
    function handlerInStockChange(e) {
      props.onInStockChange(e.target.checked);
    };
  
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={props.filterText}
          onChange={handlerFilterTextChange} />
        <p>
          <input 
            type="checkbox" 
            checked={props.inStockOnly}
            onChange={handlerInStockChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
};

export default SearchBar
  