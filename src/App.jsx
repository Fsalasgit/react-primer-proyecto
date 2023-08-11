import { useState ,useEffect} from 'react'
import AddCategory from './components/AddCategory'
import { getGifs } from './helpers/getGifs'
import GifGrid from './components/GifGrid'


function App() {
  
  const [categories, setCategories] = useState(["deadpool"])    

 
  return (
    <>
     <h1>Gifs App</h1>
     <AddCategory setCategories={setCategories} />
     <button onClick={()=>{setCategories([""])} }>Limpiar</button>
     <ol>
      {categories.map((category) => (
        
        <GifGrid category={category} key={category} />
        
      ))}
     </ol>
    </>
  )
}

export default App
