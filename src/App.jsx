import { useState ,useEffect} from 'react'
import AddCategory from './components/AddCategory'
import { getGifs } from './helpers/getGifs'
import GifGrid from './components/GifGrid'


function App() {
  
  const [categories, setCategories] = useState(["deadpool"]) 
  const imgTitle = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" class="sc-8b46997b-2 hAsYtG"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path class="shadow" d="M24 16v-4h4M16 0v4h-4"></path></g></svg>

 
  return (
    <>
      <div className='principal-title'>
        <div className="principal__logo">
          {imgTitle}
        </div>
        <h1>Gifs App</h1>
      </div>
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
