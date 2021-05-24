import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import NavBar from "./NavBar";
import Footer from './Footer';

import profile from './profile.png';

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return (
            <div>
                <NavBar />
                <h1 className='none-avail'>There are no students.</h1>
                <Footer />
            </div>
        );
        
    }
    return (
        <div>
            <NavBar />
            {props.allStudents.map((student) => {

                console.log(props.allStudents);
                return (
                    <div className='student-container'>
                        <div key={student.id} className="student-card">
                            <img src={profile} className='student-card-profile'></img>
                            
                            <div className='student-card-info'>
                                <h1 className='student-name'>{student.firstname} {student.lastname}</h1>
                                <Link to={`/student/${student.id}`}>
                                    <Button variant="contained">
                                        View Student Info
                                    </Button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    
                )
            })}
            <Footer />
        </div>
    );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
