import React , {useState} from 'react'

const App= () =>{
    let [name, setName] = useState('Anonymous')

    return(
        <h1>Hello, {name}</h1>
    )
}