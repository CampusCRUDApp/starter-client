import PropTypes from "prop-types";
import NavBar from "./NavBar";
import 'antd/dist/antd.css';
//import './index.css';
import { Container, Row, Col } from "react-bootstrap";
//import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const AddCampusView =(props) =>{
    return(
        <div>
            <NavBar />
            <Container>
                <Row>
                    <h1>New Campus Form</h1>
                </Row>
                <form onSubmit={props.handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Campus Name</p>
                            <input name="name" value={props.campusName} onInput={e=>props.setNewCampusName(e.target.value)}/>
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </div>
    )
}

AddCampusView.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    campusName:PropTypes.string.isRequired,
    setNewCampusName: PropTypes.func.isRequired,
};

export default AddCampusView;