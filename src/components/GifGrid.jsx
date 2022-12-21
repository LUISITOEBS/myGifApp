import { GidItem } from "./GidItem"; './GidItem'
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs( category );

    console.log({isLoading});
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>) 
            }
           
            {
                <div className="card-grid">
                    { 
                        images.map( ( image ) => (
                            <GidItem 
                                key = { image.id }
                                { ...image }
                            />  
                        )) 
                    }
                </div>
            }
        </>
    )
}
