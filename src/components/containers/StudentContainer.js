import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";


import { StudentView,  EditStudentView} from "../views";

class StudentContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
         showStudentView: true,
        }
        this.editStudent = this.editStudent.bind(this);

    }
    componentDidMount() {
        //getting campus ID from url
        this.props.fetchStudent(this.props.match.params.id);
    }
    editStudent(props){
    this.setState({showStudentView: false});
    }

    render() {
        if (this.state.showStudentView == true){
            return (
                <StudentView
                    student={this.props.student}
                    editStudent={this.editStudent}
                />
            );
        }else {
            return (
                <EditStudentView
                    student={this.props.student}
                    editStudent={this.editStudent}
                />
            );
        }
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
    };
};

export default connect(mapState, mapDispatch)(StudentContainer);
