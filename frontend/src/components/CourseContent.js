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

            <div className='regent-info'>
                <ul>
                    <li>Reg: BSS</li>
                    <li>Sab. Reg: 2024</li>
                </ul>
            </div>

            <div className='course-classes-info'>
                <span>T:</span>
                <ul className='course-classes-t'>
                    <li>BSS (2H)</li>
                </ul>
                <span>P:</span>
                <ul className='course-classes-p'>
                    <li>BSS (2H)</li>
                    <li>BSS (2H)</li>
                    <li>JPS (2H)</li>
                    <li><input type='text'/> (2H)</li>
                    <li><input type='text'/> (2H)</li>
                </ul>
            </div>

            <div className='course-wishlist'>
                <span>Wishlist:</span>
                <ul>
                    <li>ACD</li>
                    <li>ICO</li>
                    <li>TOS</li>
                    <li>HTZ</li>
                    <li>ORP</li>
                    <li>DNC</li>
                    <li>CCB</li>
                    <li>AJC</li>
                    <li>ASO</li>
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