import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gegif";

export const useFetchGif = (category, url) => {
    const [images, setImages] = useState([]);
    const [shadowColor, setShadowColor] = useState('#000');

    useEffect(() => {

        const fetchGifs = async () => {
            if (!category) return; 
            try {
                const newGifs = await getGifs(category);
                setImages(newGifs.length > 0 ? newGifs : []);
            } catch (error) {
                console.error('Error fetching GIFs:', error);
            }
        };


        const getDominantColor = (imageUrl) => {
            if (!imageUrl) return; 

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

                let r = 0, g = 0, b = 0, count = 0;
                for (let i = 0; i < imageData.length; i += 4) {
                    r += imageData[i];
                    g += imageData[i + 1];
                    b += imageData[i + 2];
                    count++;
                }

                setShadowColor(`rgb(${Math.floor(r / count)}, ${Math.floor(g / count)}, ${Math.floor(b / count)})`);
            };
        };

        if (url) getDominantColor(url);
        fetchGifs();
    }, [category, url]); 

    return { images, shadowColor };
};
