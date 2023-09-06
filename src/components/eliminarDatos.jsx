import axios from 'axios';

function eliminarDatos() {
    axios.delete('https://8080-cs-106689005237-default.cs-us-east1-pkhd.cloudshell.dev/api/escuela/listEscuelas/eliminar/4')
    .then(function (response) {
      console.log('*******',response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

export default eliminarDatos