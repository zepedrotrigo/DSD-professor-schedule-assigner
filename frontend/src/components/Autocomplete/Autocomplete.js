import "./Autocomplete.css";

function Autocomplete(props) {

  function handleClick(val){
    //console.log(e);
    props.onAutoClick(val);
  }

  function load() {
    let data = [];

    for (let i = 0; i < props.value.length; i++) {
      data.push(
        <li className="autocomplete-item" key={i}>
          <div className="autocomplete-item-click" onClick={() => handleClick(props.value[i])} value={props.value[i]}>{props.value[i]}</div>
        </li>
      );
    }

    return <ul>{data}</ul>;
  }

  return (
    <>
      {props.value && ( // only if value exists show autocomplete box
        <div className="autocomplete">
          <div className="square"></div>
          {load()}
        </div>
      )}
    </>
  );
}

export default Autocomplete;
