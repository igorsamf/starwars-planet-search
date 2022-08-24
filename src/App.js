import React from 'react';
import './App.css';
import Table from './compontents/Table';
import PlanetsProvider from './compontents/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
