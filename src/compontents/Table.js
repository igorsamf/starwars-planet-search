import React, { useContext } from 'react';
import Filters from './Filters';
import myContext from './MyContext';

function Table() {
  const {
    planets,
    nameFilter,
    setNameFilter,
    numericFilter,
  } = useContext(myContext);

  // filtrando pelo name
  const planetsFiltered = planets.filter((planet) => planet.name
    .toLowerCase().includes(nameFilter.toLowerCase()));
  console.log(numericFilter);
  // filtrando pelo numeric Values
  const planetsTotalFiltered = numericFilter
    .reduce((ACUMULADOR, FILTER) => {
      const { column, comparison, value } = FILTER;
      switch (comparison) {
      case 'maior que':
        return ACUMULADOR
          .filter((planet) => parseFloat(planet[column]) > parseFloat(value));
      case 'menor que':
        return ACUMULADOR
          .filter((planet) => parseFloat(planet[column]) < parseFloat(value));
      default:
        return ACUMULADOR
          .filter((planet) => parseFloat(planet[column]) === parseFloat(value));
      }
    }, planetsFiltered);

  return (
    <div>
      <div>
        <label htmlFor="pesquisar">
          <input
            type="text"
            name="pesquisar"
            data-testid="name-filter"
            onChange={ (event) => setNameFilter(event.target.value) }
            value={ nameFilter }
          />
          Pesquisar
        </label>
      </div>
      <Filters />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetsTotalFiltered
              .map((planet) => {
                const {
                  climate,
                  created,
                  diameter,
                  edited,
                  films,
                  gravity,
                  name,
                  orbital_period: orbitalPeriod,
                  population,
                  rotation_period: rotationPeriod,
                  surface_water: surfaceWater,
                  url,
                  terrain,
                } = planet;
                return (
                  <tr key={ name }>
                    <td>{name}</td>
                    <td>{rotationPeriod}</td>
                    <td>{orbitalPeriod }</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{gravity}</td>
                    <td>{terrain}</td>
                    <td>{surfaceWater}</td>
                    <td>{population}</td>
                    <td>{films}</td>
                    <td>{created}</td>
                    <td>{edited}</td>
                    <td>{url}</td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
