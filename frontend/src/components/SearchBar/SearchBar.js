import "./SearchBar.css";

function SearchBar(props) {
    return (
        <input className={`search-bar ${props.class}`} type="text" placeholder="Procurar por sigla ou nome completo..." onChange={props.onChange}></input>
    )
}

export default SearchBar;