import {useState, useEffect} from "react";
import axios from "axios";
import './styleC.scss';
import {useHistory} from "react-router-dom";
const IndexComidas = () => {

    const [comidas, setComidas] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://restaurante.test/api/comidas')
            .then(response => response.data)
            .then(data => {
                setComidas(data);
            });
    }

    const redireccionar = (id) => {
        history.push('/comidas/' + id)
    }
    const regresar = (event) => {
        history.push('/')
    }


    return(

        <div className= 'comidas row m-auto'>
            <h1 className=' titulo'>Comidas Existentes</h1>
            <button className='regresar' onClick={() =>{regresar()} }>Regresar</button>

                {comidas.map(comida => (

                    <div key={comida.id} className=' comidas_lista col-12 col-md col-xl-4 mb-4 mt-5 pt-3'>
                        <button onClick={() => {redireccionar(comida.id)} }>{ comida.id }</button>
                        <h1>{ comida.nombre }</h1>

                    </div>
                ))}
        </div>

    );


}
export default IndexComidas;
