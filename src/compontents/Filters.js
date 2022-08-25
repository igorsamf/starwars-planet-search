import React, { useContext, useState } from 'react';
import myContext from './MyContext';

function Filters() {
  const { columnFilter, setNumericFilter, numericFilter } = useContext(myContext);
  const filterCompare = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [collumnValue, setCollumnValue] = useState(columnFilter[0]);
  const [compareValue, setCompareValue] = useState(filterCompare[0]);
  const [inputNumber, setInputNumber] = useState(0);

  const handleClick = () => {
    setNumericFilter([
      ...numericFilter,
      {
        column: collumnValue,
        comparison: compareValue,
        value: inputNumber,
      },
    ]);
  };

  return (
    <div className="filters">
      <select
        data-testid="column-filter"
        value={ collumnValue }
        onChange={ (event) => setCollumnValue(
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
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Filters;
