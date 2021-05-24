import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import NavBar from './NavBar';
import Footer from './Footer';

import profileImg from './profile.png'

const StudentView = (props) => {
    const {student} = props;
    console.log(student);
     let campus = student.campus;

    // waiting for students array to be populated
    if( campus === null || campus === undefined){
        campus = student.firstname + " does not have thier college listed.";

        return(
            <div>
                <NavBar />
                <Link className='back-to-results-button-wrapper' to={"/students"}>
                <Button className='back-to-results-button'>
                    Back to results!
                </Button>
                </Link>
                <div className='student-card'>
                    <img src={profileImg} alt="student id photo"></img>
                    <h1>{student.firstname} {student.lastname}</h1>
                    <p>{student.email}</p>
                    <p>{student.gpa}</p>
                    <p>{campus}</p>
                </div>
                <Footer />
            </div>
        )


    }
    else{
        return(
        <div>
            <NavBar />
            <Link className='back-to-results-button-wrapper' to={"/students"}>
            <Button className='back-to-results-button'>
                Back to results!
            </Button>
            </Link>
            <div className='student-card-exp'>
                <img src={profileImg} alt="student id photo" className='student-card-profile'></img>
                <h1>{student.firstname} {student.lastname}</h1>
                <p>E-Mail: {student.email}</p>
                <p>GPA: {student.gpa}</p>
                <p>They attend:</p>
                <Link to={`/campus/${campus.id}`}>
                    <p>{campus.name}</p>
                </Link>
            </div>
            
            <Footer />
        </div>
        )


    }

};

export default StudentView;