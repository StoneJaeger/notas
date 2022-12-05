import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Estudiante from "../cards/Estudiante";

const Estudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const search = useLocation();

    useEffect(() => {
        console.log(search);
        fetch(`http://localhost:3050/estudiantes?ci_like=${search.state}`)
        .then(response => response.json())
        .then(data => setEstudiantes(data))
    }, [])

    return (
        <div className="ed-grid">
            <h1>Notas del estudiante</h1>           
                {
                    estudiantes ? (
                     <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap"> 
                        {
                            estudiantes.map(({
                                id, ci, nombre, apellidos, matematica, espanol, historia
                            }) => 
                            <Estudiante 
                            key={id}
                            nombre={nombre}
                            apellidos={apellidos}
                            ci={ci}
                            matematica={matematica}
                            espanol={espanol}
                            historia={historia}
                            />)
                        }
                     </section>) : (<span>Cargando...</span>)
                }
           
        </div>
    )
}

export default Estudiantes
