import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addCampusThunk, fetchAllCampusesThunk} from "../../store/thunks";

import {AddCampusView} from "../views";

class AddCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            address: '',
            imageUrl:'',
            description: '',

        }
        console.log("Hiiiiiii")

    }


    handleChange(event) {
            switch (event.target.name){
                case "name":
                    this.setState({ name: event.target.value})
                case "address":
                    this.setState({ address: event.target.value})
                case "imageUrl":
                    this.setState({ imageUrl: event.target.value})
                case "description":
                    this.setState({ description: event.target.value})
                default:
                    this.setState({name:event.target.value})
            }
    }

    handleSubmit(event) {
        const { name, address } = this.state
        event.preventDefault()
        event.preventDefault();
        this.props.addCampus(this.state);
        console.log(event);
    }

    render() {
        return (
            <AddCampusView
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
        addCampus: campusId => dispatch(addCampusThunk(campusId)),
    };
};

// Type check props;
//     AllCampusesContainer.propTypes = {
//         addCampus: PropTypes.func.isRequired,
//     };

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);