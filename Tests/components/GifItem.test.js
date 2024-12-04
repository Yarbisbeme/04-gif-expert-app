import { render, screen, fireEvent } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';
import '@testing-library/jest-dom';


describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el título en el componente cuando el modal está abierto', () => {
        render(<GifItem title={title} url={url} />);
        
        // Simular el clic en la tarjeta para abrir el modal
        fireEvent.click(screen.getByRole('img', { name: title }));

        // Verificar que el modal se haya abierto y contenga el título
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});
