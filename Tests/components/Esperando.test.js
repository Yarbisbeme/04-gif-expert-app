import { render, screen } from '@testing-library/react';
import { Esperando } from '../../src/components/Esperando'; 
import '@testing-library/jest-dom';


describe('Pruebas en <Esperando />', () => {
  
  test('debe de mostrar el mensaje y el SVG cuando no hay categorías', () => {
    const categories = [];
    
    render(<Esperando categories={categories} />);
    
    expect(screen.getByText('Esperando busqueda')).toBeInTheDocument();
    
    const svgElement = screen.getByTestId('esperando-svg');
    expect(svgElement).toBeInTheDocument();


  });

  test('no debe mostrar nada cuando hay categorías', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    
    render(<Esperando categories={categories} />);
    
    // Verificar que no se muestra nada
    expect(screen.queryByText('Esperando busqueda')).toBeNull();
    expect(screen.queryByRole('img')).toBeNull();
  });

});
