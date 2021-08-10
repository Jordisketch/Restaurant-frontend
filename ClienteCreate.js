import {useState} from "react";
import axios from "axios";

const ClienteCreate = () => {

    const [cliente, setCliente] = useState({
        nombre: ''
    });

    const createCliente = () => {
        axios.post('http://restaurante.test/api/clientes', cliente)
            };


    const asignarData = (event) => {
       setCliente(event.target.data);
    }

    return(
     <div>
        <h1>Crear Cliente</h1>
         <div>
             <form onSubmit={ createCliente }>

                 <label htmlFor='nombre'>Nombre:</label>
                 <input type="text" required name='nombre' value={ cliente["nombre"] } onChange={ asignarData }/>

                 <input type="submit" value='Crear'/>

             </form>
         </div>
     </div>
    )



}
export default ClienteCreate;