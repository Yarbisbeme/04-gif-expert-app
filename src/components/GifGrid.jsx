import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    
    const {images} = useFetchGif (category);

    return (
        <>
        <h2> {category} </h2>
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                        key={image.id}
                        {...image}     
                    />
                ))
            }
        </div>
        </>
    )
    
}
