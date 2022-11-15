const Estudiante = ({
    ci, nombre, apellidos, matematica, espanol, historia
}) => (       
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
             {nombre} {apellidos}
            </h3>
            <div>
                <span>CI: {ci}</span>
                <br/>
                <span>Matemática: {matematica}</span>
                <br/>
                <span>Español: {espanol}</span>
                <br/>
                <span>Historia: {historia}</span>
            </div>                
        </div>
)

export default Estudiante
