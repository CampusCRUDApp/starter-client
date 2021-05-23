import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;
    console.log(student);
     let campus = student.campus;

    // waiting for students array to be populated
    if( campus === null || campus === undefined){
        campus = student.firstname + " does not have thier college listed.";

        return(<div>
            <h1>{student.firstname} {student.lastname}</h1>
            <p>{student.email}</p>
            <img src={student.imageUrl} alt="student id photo"></img>
            <p>{student.gpa}</p>
            <p>{campus}</p>
        </div>)


    }
    else{
        return(<div>
            <h1>{student.firstname} {student.lastname}</h1>
            <p>{student.email}</p>
            <img src={student.imageUrl} alt="student id photo"></img>
            <p>{student.gpa}</p>
            <Link to={`/campus/${campus.id}`}>
                <li>{campus.name}</li>
            </Link>
        </div>)


    }

};

export default StudentView;