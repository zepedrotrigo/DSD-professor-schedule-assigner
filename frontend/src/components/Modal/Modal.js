import "./Modal.css";

function Modal(props) {

    return (
        <>  
            <div className="backdrop"></div>
            <div className="modal">
                {props.children}
            </div>
        </>
    )
}

export default Modal;