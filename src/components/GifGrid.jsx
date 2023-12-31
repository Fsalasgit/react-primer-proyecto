import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import LoadingGif from './LoadingGif'



const GifGrid = ({category = "batman"}) => {
    const {data, loading} = useFetchGifs(category)
    
  return (
    <div className='gifGridContainer'>
        <h3 className='gifGridContainer__title'>{category.toUpperCase()}</h3>
        <div className='container'>
            {/* {loading && <LoadingGif />} // esta sintazis es un metodo abreviado del ternario*/} 
            {loading ? <LoadingGif /> : ""}
            {
                data.map(gif => (


                    <GifGridItem gif={gif} key={gif.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default GifGrid