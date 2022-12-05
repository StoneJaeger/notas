import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [tablaEstudiantes, setTablaEstudiantes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async() => {
        await axios.get("http://localhost:3050/estudiantes")
        .then(({data}) => {
            setEstudiantes(data.estudiantes);
            setTablaEstudiantes(data.estudiantes);
        }).catch(error => {
            console.log(error);
        })
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaEstudiantes.filter((elemento)=>{
          if(elemento.ci.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setEstudiantes(resultadosBusqueda);
      }

    useEffect(() => {
        peticionGet();
    }, [])

    const navigate = useNavigate();

    const toDescription=()=>{
        navigate(`/estudiante`,
        {
            state:busqueda
        });
    }

    return (
        <>
                <div className="ed-grid">
                        <h1>Bienvenidos</h1>
                    <form className="ed-container">
                        <div className="ed-item">
                            <label>Introduzca el número de carnet de identidad para la búsqueda</label>
                            <input className="text"
                            value={busqueda}
                            onChange={handleChange}>
                            </input>
                                <button className="button" onClick={toDescription}>Buscar</button>                           
                        </div>
                    </form>
                </div>

                <div className="table-responsive">
                    <table>
                        <thead>
                           <tr>
                            <th>Nombre:</th>
                            <th>Apellidos:</th> 
                            <th>CI:</th> 
                            <th>Matemática:</th> 
                            <th>Español:</th> 
                            <th>Historia:</th>  
                           </tr>                          
                        </thead>
                    
                        <tbody>
                            {estudiantes && 
                            estudiantes.map((estudiante) =>(
                                <tr key={estudiante.id}>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.apellidos}</td>
                                    <td>{estudiante.ci}</td>
                                    <td>{estudiante.matematica}</td>
                                    <td>{estudiante.espanol}</td>
                                    <td>{estudiante.historia}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>                
                
                </>
            )
}

export default Home
