import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {editStudentThunk, fetchAllCampusesThunk, fetchStudentThunk} from "../../store/thunks";

import {EditStudentView} from "../views";

class EditStudentContainer extends Component {
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
        // console.log(props.firstname)

    }
    // componentDidMount() {
    //     //getting campus ID from url
    //     this.props.fetchStudent(this.props.match.params.id);
    // }

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
        this.props.editStudent(this.state);
        console.log(event);
    }

    render() {
        return (
            <EditStudentView
                student={this.props.student}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

}

// map state to props
const mapState = (state) => {
    return {
        student: state.student,
    };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    };
};


// Type check props;
//     AllCampusesContainer.propTypes = {
//         addCampus: PropTypes.func.isRequired,
//     };

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(EditStudentContainer);