import { useState ,useEffect} from 'react'
import AddCategory from './components/AddCategory'
import { getGifs } from './helpers/getGifs'
import GifGrid from './components/GifGrid'


function App() {
  
  const [categories, setCategories] = useState(["deadpool"])    

 
  return (
    <>
     <h1>Gifs App</h1>
      <div className='form__buscador'> 
        <AddCategory setCategories={setCategories} />
        <button onClick={()=>{setCategories([""])} } className='button__Cleaner'>Limpiar</button>
      </div>
     <ol>
      {categories.map((category) => (
        
        <GifGrid category={category} key={category} />
        
      ))}
     </ol>
    </>
  )
}

export default App
