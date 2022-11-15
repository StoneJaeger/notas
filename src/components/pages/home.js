import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [tablaEstudiantes, settablaEstudiantes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async() => {
        await axios.get("http://localhost:3050/estudiantes")
        .then(({data}) => {
            setEstudiantes(data);
            settablaEstudiantes(data);
        }).catch(error => {
            console.log(error);
        })
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log("Búsqueda: "+ e.target.value);
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
                            <Link to="/estudiante">
                                <a className="button">Buscar</a>
                            </Link>                            
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
