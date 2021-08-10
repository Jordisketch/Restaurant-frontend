import {useEffect, useState} from "react";
import axios from "axios";
import './style.scss';

import {useHistory} from "react-router-dom";


const IndexClientes = () => {
       const [clientes, setClientes] = useState([]);
       const history = useHistory();

       useEffect(() =>{
          getDataCliente();
       }, []);

       const getDataCliente = () =>{
           axios.get('http://restaurante.test/api/clientes')
               .then(response => response.data)
               .then(data => {
                  setClientes(data);
               });
        }
        const redireccionar = (id) => {
           history.push('/clientes/' + id);
        };
       const crearCliente = () =>{
           history.push('/clientes/crear');
       }

    return(
        <div className='clientes row m-auto'>
            <h1>Clientes registrados</h1>
            <button onClick={() => {crearCliente()} }>Crear Cliente</button>
                {clientes.map(cliente => (

                    <div key={ cliente.id } className='clientes_lista col-12 col-md col-xl-4 mb-4 mt-5 pt-3'>

                        <button onClick={() => {redireccionar(cliente.id)}}>{ cliente.nombre }</button>

                    </div>


                ))}
        </div>
    )

}
export default IndexClientes;