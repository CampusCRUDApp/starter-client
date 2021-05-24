import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addStudentThunk, fetchAllCampusesThunk} from "../../store/thunks";

import {AddStudentView} from "../views";

class AddStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            gpa:'',

        }
        console.log("Hiiiiiii")

    }


    handleChange(event) {
        switch (event.target.name){
            case "firstname":
                this.setState({ firstname: event.target.value})
            case "lastname":
                this.setState({ lastname: event.target.value})
            case "email":
                this.setState({ email: event.target.value})
            case "gpa":
                this.setState({ gpa: event.target.value})
            default:
                this.setState({name:event.target.value})
        }
    }

    handleSubmit(event) {
        const { name, address } = this.state
        event.preventDefault();
        this.props.addStudent(this.state);
        console.log(event);
    }

    render() {
        return (
            <AddStudentView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

}
// Map state to props;
const mapState = (state) => {
    return {
        allCampuses: state.allCampuses,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        addStudent: StudentId => dispatch(addStudentThunk(StudentId)),
    };
};

// Type check props;
//     AllCampusesContainer.propTypes = {
//         addCampus: PropTypes.func.isRequired,
//     };

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddStudentContainer);