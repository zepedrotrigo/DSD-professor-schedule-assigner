import "./CourseContent.css";

function CourseContent(props) {

    function loadWishlist(){
        let result=[];
        for(let i=0; i<props.wishlist.length; i++){
            result.push(<li>{props.wishlist[i]}</li>);
        }

        return (<>{result}</>)
    }

    return (
        <>
            <div className='course-info'>
                <ul>
                    <li className='course-hours'>{props.hours}</li>
                    <li className='course-students'>{"Prev. alunos: " + props.studentsEstimate}</li>
                    <li className='course-type'>
                        <div className='course-type-list'>
                            <ul>
                                <li>LEI</li>
                                <li>MIECT</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='regent-info'>
                <ul>
                    <li>Director: {"Reg: " + props.director}</li>
                    <li>Sab. Reg: 2024</li>
                </ul>
            </div>

            <div className='course-wishlist'>
                <span>Wishlist:</span>
                <ul>
                    {loadWishlist()}
                </ul>
            </div>

            <div className='course-history'>
                <span>History:</span>
                <ul>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                    <li>TOS</li>
                </ul>
            </div>
        </>
    )
}

export default CourseContent;