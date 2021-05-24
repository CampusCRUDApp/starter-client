import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import {Button} from '@material-ui/core/';
import { EditStudentView } from "./";

const StudentView = (props) => {
    const {student} = props;
    console.log(student);
     let campus = student.campus;

    // waiting for students array to be populated
    if( campus === null || campus === undefined){
        campus = student.firstname + " does not have thier college listed.";

        return(<div>
            <NavBar />

            <h1>{student.firstname} {student.lastname}</h1>
            <p>{student.email}</p>
            <img src={student.imageUrl} alt="student id photo"></img>
            <p>{student.gpa}</p>
            <p>{campus}</p>
        </div>)


    }
    else{
        return(<div>
            <NavBar />

            <input type="button" value="Edit Student Profile" method="edit" onClick={() => props.editStudent(props)}></input>
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