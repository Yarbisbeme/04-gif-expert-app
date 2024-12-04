import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGif } from '../../src/hooks';
import { getGifs } from '../../src/helpers/gegif';


jest.mock('../../src/helpers/gegif', () => ({
    getGifs: jest.fn(),
}));

describe('Pruebas en el hook useFetchGif', () => {
    
    test('debe de regresar un array vacío si la categoría está vacía', async () => {
        const { result } = renderHook(() => useFetchGif(''));
        
        await waitFor(() => expect(result.current.images.length).toBe(0));
        
        const { images } = result.current;
        expect(images.length).toBe(0);
    });

    test('debe de retornar un arreglo de imagenes cuando se pasa una categoría válida', async () => {
        const gifsMock = [{ id: '1', title: 'Gif 1' }, { id: '2', title: 'Gif 2' }];
        
        
        getGifs.mockResolvedValue(gifsMock);

        const { result } = renderHook(() => useFetchGif('One Punch'));

        
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const { images } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(images).toEqual(gifsMock);
    });

    test('debe mostrar un array vacío si no hay gifs en la respuesta', async () => {
        const gifsMock = [];

        
        getGifs.mockResolvedValue(gifsMock);

        const { result } = renderHook(() => useFetchGif('One Punch'));

        await waitFor(() => expect(result.current.images.length).toBe(0));

        const { images } = result.current;
        expect(images.length).toBe(0);
    });

});
