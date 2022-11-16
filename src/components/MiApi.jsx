import React, { useState, useEffect } from "react"

function MiApi() {
        const [state, setState] = useState([])
        const llamarAPI = async () =>{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setState(data.results)
        }

        useEffect(()=>{
            llamarAPI()
        },[])

    
    

    return (
        <div>
            <h1>Personajes de Rick and Morty</h1>
            <ul>
        {state.map(estado => <li key={estado.id}><strong>Nombre: </strong>{estado.name} -- <strong>Estado: </strong>{estado.status} -- <strong>Especie: </strong>{estado.species}</li>)}
      </ul>
        </div>
    );
}

export default MiApi