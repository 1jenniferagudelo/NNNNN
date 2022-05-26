import poner from "../modules/mostrarApartamentos.js"

let mostrar1 = document.getElementById("F4")

const URL = "http://localhost:3000/contenedor4"

document.addEventListener("DOMContentLoaded",async() =>{
    const {data} = await axios.get(URL)

    poner(data,mostrar1)


//////////Manera larga de destructurar utilizando peticiones con axios/////////
    // const usando = await axios.get(URL)
    // console.log(usando) 
    // destructurar
    // const {data} = usando
    // console.log(data)
})
