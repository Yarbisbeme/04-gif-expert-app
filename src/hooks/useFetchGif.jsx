import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gegif";

export const useFetchGif = (category, url) => {
    const [images, setImages] = useState([]);
    const [shadowColor, setShadowColor] = useState('#000');

    useEffect(() => {
        // Función para obtener GIFs
        const fetchGifs = async () => {
            if (!category) return; // No hacer nada si category no está definida
            try {
                const newGifs = await getGifs(category);
                setImages(newGifs.length > 0 ? newGifs : []);
            } catch (error) {
                console.error('Error fetching GIFs:', error);
            }
        };

        // Función para calcular el color dominante
        const getDominantColor = (imageUrl) => {
            if (!imageUrl) return; // No hacer nada si la URL no está definida

            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = imageUrl;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;

                context.drawImage(img, 0, 0, canvas.width, canvas.height);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

                // Calcular promedio RGB
                let r = 0, g = 0, b = 0, count = 0;
                for (let i = 0; i < imageData.length; i += 4) {
                    r += imageData[i];
                    g += imageData[i + 1];
                    b += imageData[i + 2];
                    count++;
                }

                // Promedio final
                setShadowColor(`rgb(${Math.floor(r / count)}, ${Math.floor(g / count)}, ${Math.floor(b / count)})`);
            };
        };

        // Ejecutar las funciones si los datos son válidos
        if (url) getDominantColor(url);
        fetchGifs();
    }, [category, url]); // Dependencias del efecto

    return { images, shadowColor };
};
