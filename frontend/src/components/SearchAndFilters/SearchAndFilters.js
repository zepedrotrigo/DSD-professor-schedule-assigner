import "./SearchAndFilters.css";

function SearchAndFilters(props) {
    return (
        <div className={`filters-and-search-wrapper ${props.class}`}>
            <div className={`filters-and-search-content ${props.classContent}`}>
                {props.children}
            </div>
        </div>
    )
}

export default SearchAndFilters;