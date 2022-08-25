import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContex from './MyContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const removeAllFilters = () => {
    setColumnFilter([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setNumericFilter([]);
  };

  const removeFilter = (index) => {
    setNumericFilter(numericFilter.filter((FILTER, INDEX) => INDEX !== index));
  };

  const fetchApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const data = await response.json();
    const planetas = data.results;
    planetas.forEach((planet) => {
      delete planet.residents;
    });
    setPlanets(planetas);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const context = {
    planets,
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    numericFilter,
    setNumericFilter,
    removeFilter,
    removeAllFilters,
  };

  return (
    <MyContex.Provider value={ context }>
      {children}
    </MyContex.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default PlanetsProvider;
