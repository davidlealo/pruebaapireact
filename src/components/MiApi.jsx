import React, { useState, useEffect } from "react"

function MiApi() {
        const [state, setState] = useState([])
        const [search, setSearch] = useState('')
        const llamarAPI = async () =>{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setState(data.results)
        }

        useEffect(()=>{
            llamarAPI()
        },[])

        const searcher = (e) =>{
            setSearch(e.target.value)
        }
    
        let result = []
        if(search === ""){
            result = state
        }else{
            result = state.filter((dato)=>
                dato.name.toLowerCase().includes(search.toLowerCase()))
            }
        

    return (
        <div>
            <h1>Personajes de Rick and Morty</h1>
            <input value ={search} onChange={searcher}/>
            <ul>
        {result.map(estado => <li key={estado.id}><strong>Nombre: </strong>{estado.name} -- <strong>Estado: </strong>{estado.status} -- <strong>Especie: </strong>{estado.species}</li>)}
      </ul>
        </div>
    );
}

export default MiApi