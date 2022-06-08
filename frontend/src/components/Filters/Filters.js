import { useState } from "react";
import "./Filters.css";

function Filters(props) {

    const[value, setValue] = useState(null);

    function handleChange(event){
        setValue(event.target.value);
        props.onChange(event.target.value);
    }

    return (
        <select className={`filters ${props.class}`} onChange={handleChange}>
            <option value="sigla">Sigla</option>
            <option value="unassigned_classes asc">Aulas não atribuídas por ordem crescente</option>
            <option value="menos horas">Menos Horas</option>
        </select>
    )
}

export default Filters;