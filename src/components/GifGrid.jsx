
import { useFetchGif } from "../hooks";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    console.log('Renderizando GifGrid con categoría:', category);
  
    const { images } = useFetchGif(category);
    console.log(images);
  
    return (
      <>
        <h2>{category}</h2>
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </>
    );
  };
  