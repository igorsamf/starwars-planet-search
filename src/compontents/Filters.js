import React, { useContext, useState, useEffect } from 'react';
import myContext from './MyContext';

function Filters() {
  const {
    columnFilter,
    setColumnFilter,
    setNumericFilter,
    numericFilter,
    removeFilter,
    removeAllFilters,
  } = useContext(myContext);
  const filterCompare = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const [compareValue, setCompareValue] = useState(filterCompare[0]);
  const [inputNumber, setInputNumber] = useState(0);
  const [columnnValue, setColumnValue] = useState(columnFilter[0]);

  useEffect(() => {
    setColumnValue(columnFilter[0]);
  }, [columnFilter]);

  const handleClick = () => {
    // ADICIONANDO UM FILTRO NUMERICO
    setNumericFilter([
      ...numericFilter,
      {
        column: columnnValue,
        comparison: compareValue,
        value: inputNumber,
      },
    ]);
    // REMOVER O COLUMN DO COLUMNFILTER
    setColumnFilter(columnFilter.filter((FILTER) => FILTER !== columnnValue));
  };

  const disabled = columnFilter.length <= 0;

  return (
    <div className="filters">
      <select
        data-testid="column-filter"
        value={ columnnValue }
        onChange={ (event) => setColumnValue(
          event.target.value,
        ) }
      >
        {
          columnFilter.map((key) => (
            <option key={ key }>{ key }</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ compareValue }
        onChange={ (event) => setCompareValue(
          event.target.value,
        ) }
      >
        {filterCompare.map((filt) => (
          <option key={ filt }>{filt}</option>
        )) }
      </select>
      <input
        value={ inputNumber }
        onChange={ (event) => setInputNumber(
          event.target.value,
        ) }
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ () => handleClick() }
        type="button"
        data-testid="button-filter"
        disabled={ disabled }
      >
        Pesquisar
      </button>
      {
        numericFilter.map((FILTER, index) => {
          const { column, comparison, value } = FILTER;
          return (
            <h2 key={ index } data-testid="filter">
              { `${column}, ${comparison}, ${value}` }
              <button
                type="button"
                onClick={ () => removeFilter(index) }
              >
                X
              </button>
            </h2>
          );
        })
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => removeAllFilters() }
      >
        Remover Todas as Filtragens
      </button>
    </div>
  );
}

export default Filters;
