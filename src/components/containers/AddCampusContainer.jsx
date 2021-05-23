import {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchAllCampusesThunk, addCampusThunk} from "../../store/thunks";
import {AddCampusView} from "../views";


class AddCampusContainer extends Component {
    constructor(){
        super();
        this.state ={
            campusName: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const addCampus = {
            name: this.state.campusName,
            address: "Enter a valid address",
        };
        /*let url = window.location.href;
        url = url.substring(0, url.lastIndexOf("/"));
        let newCampus = await this.props.addCampusThunk(campus);
        window.location.href = url + "/campus/" + newCampus.id;*/
    };

    setNewCampusName = (newCampusName) =>{
        this.setState({campusName: newCampusName});
    }

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <AddCampusView
                campusName={this.state.campusName}
                handleSubmit={this.handleSubmit}
                setNewCampusName={this.setNewCampusName}
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
        addCampusThunk: (campus) => dispatch(addCampusThunk(campus)),
    };
};

// Type check props;
AddCampusContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);
