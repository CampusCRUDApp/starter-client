import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteStudentThunk, fetchAllStudentsThunk} from "../../store/thunks";
import { AllStudentsView } from "../views";

class AllStudentsContainer extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }


handleRemove(studentId){
    console.log(studentId)
    this.props.removeStudent(studentId)
    this.props.fetchAllStudents();

}

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        removeStudent={ this.handleRemove}

      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
      removeStudent: studentId => dispatch(deleteStudentThunk(studentId)),

  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
    removeStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
