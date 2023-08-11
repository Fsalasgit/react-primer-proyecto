import React, {useState} from 'react'

function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e)=>{

    e.preventDefault();
    console.log("submit");
    
    let alertInputValue = ""
    if((inputValue.trim() !== inputValue) || (inputValue === "")){

      (inputValue.trim() !== inputValue ? 
      alertInputValue = `El string ${inputValue} tiene espacio al inicio o fin de caracter favor de borrarlo` :
      alertInputValue = `No se puede buscar espacio en blanco`)
      
      return alert(alertInputValue)
    }
    setCategories((data) => [inputValue,...data])
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} type="text" placeholder='Buscar Gifs' onChange={(e) => setInputValue(e.target.value)}/>
    </form>
  )
}

export default AddCategory