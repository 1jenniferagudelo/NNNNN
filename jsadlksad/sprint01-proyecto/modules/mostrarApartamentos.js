const poner = (data = [], contenedor) =>{
contenedor.innerHTML =''
 data.forEach(mostrar =>{
     const {id, imagen, Precio, Ubicacion, CamasD, Baños, Espacio} = mostrar 
     contenedor.innerHTML += `
     <div class="F4I">
            <button >For Buy</button>
            <img src="${imagen}" alt="" >
            <div class="F4I-p">$${Precio}/mo</div>
        </div>
        <div class="F4I2">
          <h5>Studio Home</h5>
          <h4>Triple Story House for Rent</h4>
          <p>${Ubicacion}</p>
          <h3> &nbsp &nbsp  &nbsp &nbsp  &nbsp camas ${CamasD}/      &nbsp &nbsp  &nbsp &nbsp ${Baños}/     &nbsp &nbsp  &nbsp &nbsp ${Espacio}/</h3>
        </div>
        `
 })
}

export default poner;
