import "./CourseContent.css";

function CourseContent() {

    return (
        <>
            <div className='course-info'>
                <ul>
                    <li className='course-hours'>P (2H) TP (10H)</li>
                    <li className='course-students'>Prev. Alunos: 85 (17)</li>
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
        </>
    )
}

export default CourseContent;