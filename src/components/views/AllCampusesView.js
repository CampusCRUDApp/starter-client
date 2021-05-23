import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core/';

import NavBar from "./NavBar";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
     
      <div>
        <NavBar />
        <Button variant="contained" color="primary" component={Link} to={`/addcampus`} style={{ marginBottom: "10px"}}>
          Add Campus
        </Button>
        <h1>There are no campuses.</h1>
      </div>
    );
    
  }

  return (
    <div>
      <NavBar />
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
            <img src={campus.imageUrl} alt="Campus"></img>
            <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;