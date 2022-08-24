import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContex from './MyContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const data = await response.json();
    const planetas = data.results;
    // console.log(planetas);
    planetas.forEach((planet) => {
      delete planet.residents;
    });
    setPlanets(planetas);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <MyContex.Provider value={ { planets } }>
      {children}
    </MyContex.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default PlanetsProvider;
