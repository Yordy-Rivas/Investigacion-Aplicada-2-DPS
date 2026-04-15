import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App, { incrementarValor } from './App';

//prueba unitaria
describe('Pruebas unitarias', () =>{
  test('IncrementarValor debe sumar 1 al numero recibido', () =>{
    expect(incrementarValor(0)).toBe(1);
    expect(incrementarValor(10)).toBe(11);
    expect(incrementarValor(-1)).toBe(0);
  })
})
//prueba de integracion
describe('Pruebas de Integración App Contador', () => {
  
  test('debe iniciar el contador en 0', () => {
    const { getByText } = render(<App />);
    expect(getByText('Total: 0')).toBeTruthy();
  });

  test('debe incrementar el contador al presionar el botón', () => {
    const { getByText } = render(<App />);
    const boton = getByText('Incrementar');
    
    // Simulamos el clic
    fireEvent.press(boton);
    
    // Verificamos que el estado cambió en la UI
    expect(getByText('Total: 1')).toBeTruthy();
  });
});
