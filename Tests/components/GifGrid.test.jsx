import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGif } from '../../src/hooks';
import '@testing-library/jest-dom'; 


jest.mock('../../src/hooks/useFetchGif');
jest.mock('../../src/hooks/useColor', () => ({
  useColor: jest.fn().mockReturnValue({
    shadowColor: 'rgb(100, 150, 200)', // Color simulado
  }),
}));

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGif.mockReturnValue({
      images: []
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.queryByRole('img')).toBeNull();
  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGif', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
    ];

    useFetchGif.mockReturnValue({
      images: gifs
    });

    render(<GifGrid category={category} />);

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(2);
    expect(imageElements[0]).toHaveAttribute('alt', 'Saitama');
    expect(imageElements[1]).toHaveAttribute('alt', 'Goku');
  });
});
