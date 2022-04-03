import '../hojas-de-estilos/testimonio.css';


function TwiceMiembros (miembro){
    let miembros = ["nayeon", "jeongyeon", "momo","sana","jihyo","mina","dahyun","chaeyoung","tzuyu"];

    let indiceMiembro = miembros.indexOf(miembro);
    let nombreMiembro = miembros[indiceMiembro];
    return "Twice "+nombreMiembro.toUpperCase()
}

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <div className="imagen">
                <img
                    className = "imagen-twice"
                    src={require(`../imagenes/${props.imagen}.png`)}
                    alt={TwiceMiembros(props.imagen)} />
            </div>
            <div className="contenedor-texto">
                <p className="nombre-testimonio"> <strong>{props.nombre}</strong> in {props.pais}</p>
                <p className="profesion-testimonio">{props.profesion} at <strong>{props.empresa}</strong></p>
                <p className="descripcion-testimonio">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Testimonio;