import PropTypes from "prop-types";
import NavBar from "./NavBar";
import 'antd/dist/antd.css';
// app.use(require("body-parser")());

//import './index.css';
import {Container, Row} from "react-bootstrap";
//import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const AddCampusView =(props) => {
    console.log(props);

    return (
        <div>
            <NavBar/>
            <Container>
                <Row>
                    <h1>New Campus Form</h1>
                </Row>
                <form onSubmit={props.handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Campus Name</p>
                            <input
                                type="text"
                                name={"name"}
                                onChange={props.handleChange}
                                value={props.state}/>
                        </label>
                        <label>
                            Address:
                            <input type="text"
                                   name="address"
                                   onChange={props.handleChange}
                                   value={props.state}/>
                        </label>
                        <label>
                            Description
                            <input type="text"
                                   name="description"
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
AddCampusView.propTypes={
    handleChange:PropTypes.func.isRequired,
    // campusName:PropTypes.string.isRequired,
    // setNewCampusName: PropTypes.func.isRequired,
};

export default AddCampusView;