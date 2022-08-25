import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('tests', () => {
  test('I am your test', () => {
    render(<App />);
    // PEGANDO TODOS OS FILTROS
    const removeAllFilters = screen.getByRole('button', { name: /remover todas as filtragens/i });
    const column = screen.getByTestId('column-filter');
    const comparison = screen.getByTestId('comparison-filter');
    const value = screen.getByTestId('value-filter');
    const name = screen.getByTestId('name-filter');
    const pesquisar = screen.getByRole('button', { name: /pesquisar/i });
    // INSERINDO VALORES NOS FILTROS (ONCHANGE)

    // TESTE N1
    userEvent.selectOptions(column, 'orbital_period');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.type(value, '304');
    userEvent.type(name, 'a');
    userEvent.click(pesquisar);
    userEvent.click(screen.getByText('X'));
    userEvent.click(removeAllFilters);

    // TESTE N2
    userEvent.selectOptions(column, 'orbital_period');
    userEvent.selectOptions(comparison, 'menor que');
    userEvent.type(value, '10000');
    userEvent.type(name, 'a');
    userEvent.click(pesquisar);
    userEvent.click(screen.getByText('X'));
    userEvent.click(removeAllFilters);

    // TESTE N3
    userEvent.selectOptions(column, 'orbital_period');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.type(value, '10000');
    userEvent.type(name, 'a');
    userEvent.click(pesquisar);
    userEvent.click(screen.getByText('X'));
    userEvent.click(removeAllFilters);
    
    screen.logTestingPlaygroundURL();
  });
})


