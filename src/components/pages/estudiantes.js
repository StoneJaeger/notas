import { useEffect, useState } from "react"
import Estudiante from "../cards/Estudiante"

const Estudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3050/estudiantes")
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
                                id, nombre, apellidos, matematica, espanol, historia
                            }) => 
                            <Estudiante 
                            key={id}
                            nombre={nombre}
                            apellidos={apellidos}
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
