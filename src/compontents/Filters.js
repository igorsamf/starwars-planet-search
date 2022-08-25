import React, { useContext } from 'react';
import myContext from './MyContext';

function Filters() {
  const { columnFilter /* setColumnFilter */ } = useContext(myContext);

  return (
    <div className="filters">
      <select
        data-testid="column-filter"
      >
        {
          columnFilter.map((key) => (
            <option key={ key }>{ key }</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
      >
        Option2
      </select>
      <input
        data-testid="value-filter"
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Pesquisar

      </button>
    </div>
  );
}

export default Filters;
