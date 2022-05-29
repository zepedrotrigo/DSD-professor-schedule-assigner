import "./SearchBar.css";

function SearchBar(props) {
    return (
        <input className={`search-bar ${props.class}`} type="text" placeholder="Procurar.."></input>
    )
}

export default SearchBar;