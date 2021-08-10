import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

const ComidaShow = () => {
    const [comida, setComida] = useState({});
    const [mensaje, setMensaje] = useState('');
    const Params = useParams();
    const history = useHistory();

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios.get('http://restaurante.test/api/comidas/' + Params.id)
            .then(response => response.data)
            .then(data => {
               console.log(data)
                setComida(data);
            });
    }
    const deleteData =() => {
        axios.delete('http://restaurante.test/api/comidas/' + Params.id)
            .then(response => response.data)
            .then(data => {
                setMensaje(data);
            })
    }

    const redireccionar = (event) => {
        history.push('/comidas');
    }
    return(

        <div>
            <h1> { comida.nombre }</h1>
            <div>
                <h2> <span> Precio: </span> {comida.precio} </h2>
            </div>
            <button onClick={()=> redireccionar()} >Regresar</button>
            <div>
                <form>
                    <input type="submit" onClick={() => {deleteData()}} value='Eliminar'/>
                </form>
            </div>
        </div>
    )




}
export default ComidaShow;