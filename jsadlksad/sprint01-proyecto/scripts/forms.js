const form = document.getElementById("formulario")
const URL = 'http://localhost:3000/contenedor4' 

form.addEventListener("submit", async(e)=>{
  e.preventDefault();
  const imagen = document.getElementById("imagen").value;
  const Precio = document.getElementById("Precio").value;
  const Ubicacion = document.getElementById("Ubicacion").value;
  const CamasD = document.getElementById("CamasD").value;
  const Baños = document.getElementById("Baños").value;
  const Espacio = document.getElementById("Espacio").value;

  if(imagen === '' || Precio === '' || Ubicacion === '' || CamasD === '' || Baños === '' || Espacio === '' ){
  Swal.fire(
      'Completa los espacios faltantes',
      'You clicked the button!',
      'error'
    )} 
    else{
      Swal.fire(
          'Sitio Agregado',
          'You clicked the button!',
          'success'
    )}
  const llenar = {
    imagen,
    Precio,
    Ubicacion,
    CamasD,
    Baños,
    Espacio,
  }
  await axios.post(URL, llenar)

})  