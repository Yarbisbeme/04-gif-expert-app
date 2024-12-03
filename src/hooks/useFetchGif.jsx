import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gegif";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!category) {
          console.error('Categoría vacía, no se realizará la búsqueda de GIFs');
          return;
        }
      
        console.log('Ejecutando fetchGifs, categoría:', category);
      
        const fetchGifs = async () => {
          try {
            const newGifs = await getGifs(category);
            setImages(newGifs.length > 0 ? newGifs : []);
          } catch (error) {
            console.error('Error fetching GIFs:', error);
          }
        };
      
        fetchGifs();
      }, [category]);
     
    return { images };
};
