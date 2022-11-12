const Estudiante = ({
    nombre, apellidos, matematica, español, historia
}) => (
    <div>
        <p>{nombre} {apellidos}</p>
        <span>Matemática: {matematica}</span>
        <span>Español: {español}</span>
        <span>Historia: {historia}</span>
        <br />
    </div>
)

export default Estudiante
