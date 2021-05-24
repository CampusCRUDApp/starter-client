import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";

import { AllCampusesView } from "../views";


class AllCampusesContainer extends Component {
  constructor(props){

    super(props);
    this.handleRemove = this.handleRemove.bind(this);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit= this.handleSubmit.bind(this);

      // this.state = {campus: ''};

  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }
  handleRemove(campusId){
    console.log(campusId)
     this.props.removeCampus(campusId)
      this.props.fetchAllCampuses();
  }
  //   handleChange(event) {
  //       this.setState({campus: event.target.value});
  //
  //   }

    // handleSubmit(event){
    // event.preventDefault();
    //
    // }
  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        removeCampus={ this.handleRemove}
        change={this.handleChange}
        addCampus={this.handleSubmit}
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
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
      removeCampus: campusId => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
    removeCampus: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);