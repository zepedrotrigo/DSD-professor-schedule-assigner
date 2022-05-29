import "./Filters.css";

function Filters(props) {
    return (
        <select className={`filters ${props.class}`}>
            <option value="sigla">Sigla</option>
            <option value="mais horas">Mais Horas</option>
            <option value="menos horas">Menos Horas</option>
        </select>
    )
}

export default Filters;