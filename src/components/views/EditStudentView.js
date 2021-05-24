import PropTypes from "prop-types";
import NavBar from "./NavBar";
import 'antd/dist/antd.css';
// app.use(require("body-parser")());

//import './index.css';
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
//import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const EditStudentView =(props) => {
    console.log(props.student);
    let campus = props.student.campus;

    // waiting for students array to be populated
    if( campus === null || campus === undefined) {
        campus = props.student.firstname + " does not have thier college listed.";
    }
        return (
            <div>
                <div>
                    <NavBar/>
                    <Container>
                        <Row>
                            <h1>New Student Form</h1>
                        </Row>
                        <form onSubmit={props.handleSubmit}>
                            <fieldset>
                                <label>
                                    Firstname:
                                    <input
                                        type="text"
                                        name={"firstname"}
                                        onChange={props.handleChange}
                                        defaultValue={props.student.firstname}
                                        value={props.state}/>
                                </label>
                                <label>
                                    Lastname:
                                    <input type="text"
                                           name="lastname"
                                           onChange={props.handleChange}
                                           defaultValue={props.student.lastname}
                                           value={props.state}/>
                                </label>
                                <label>
                                    Email:
                                    <input type="text"
                                           name="email"
                                           onChange={props.handleChange}
                                           defaultValue={props.student.email}
                                           value={props.state}/>
                                </label>
                                <label>
                                    GPA:
                                    <input type="text"
                                           name="gpa"
                                           onChange={props.handleChange}
                                           defaultValue={props.student.gpa}
                                           value={props.state}/>
                                </label>
                            </fieldset>
                            <button type="submit">Submit</button>
                        </form>
                    </Container>
                </div>
            </div>

        )
    };

EditStudentView.propTypes={
    // handleChange:PropTypes.func.isRequired,
    // campusName:PropTypes.string.isRequired,
    // setNewCampusName: PropTypes.func.isRequired,
};

export default EditStudentView;