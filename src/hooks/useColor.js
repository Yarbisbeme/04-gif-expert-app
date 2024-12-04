import { useEffect, useState } from "react";

export const useColor = (url) => {

    const [shadowColor, setShadowColor] = useState('#000');

    useEffect(() => {
        if (!url) return;

        const getDominantColor = (imageUrl) => {
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

            img.onerror = () => {
                console.error('Error loading image for dominant color calculation');
            };
        };

        getDominantColor(url);
    }, [url]); 
    
    return {shadowColor}    
    
}
