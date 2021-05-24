import PropTypes from "prop-types";
import NavBar from "./NavBar";
import 'antd/dist/antd.css';
// app.use(require("body-parser")());

//import './index.css';
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
//import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const AddStudentView =(props) => {
    console.log(props);

    return (
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
                                value={props.state}/>
                        </label>
                        <label>
                            Lastname:
                            <input type="text"
                                   name="lastname"
                                   onChange={props.handleChange}
                                   value={props.state}/>
                        </label>
                        <label>
                            Email:
                            <input type="text"
                                   name="email"
                                   onChange={props.handleChange}
                                   value={props.state}/>
                        </label>
                        <label>
                            GPA:
                            <input type="text"
                                   name="gpa"
                                   onChange={props.handleChange}
                                   value={props.state}/>
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </div>
    )

};
AddStudentView.propTypes={
    handleChange:PropTypes.func.isRequired,
    // campusName:PropTypes.string.isRequired,
    // setNewCampusName: PropTypes.func.isRequired,
};

export default AddStudentView;