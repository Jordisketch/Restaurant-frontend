import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";

const ClienteShow = () => {

    const [cliente, setCliente] = useState({});

    const params = useParams();

    useEffect(() =>{
        getData();
    }, []);

    const getData = () => {
        axios.get('http://restaurante.test/api/clientes/' + params.id)
            .then(response => response.data)
            .then(data => {
                setCliente(data);
            });
    }
    const eliminarCliente = (id) => {
        axios.delete('http://restaurante.test/api/clientes/' + id)
            .then(response => response.data)
            .then(data => {
                console.log(data);
            })
    }
    return(

        <div>
            <h1>Informacion sobre cliente</h1>
            <div>
                <h4>ID del Cliente: {cliente.id}</h4>
              <h2>{ cliente.nombre }</h2>
            </div>
                <button onClick={() => { eliminarCliente(cliente.id) }}> Eliminar </button>
        </div>

    )


}
export default ClienteShow;