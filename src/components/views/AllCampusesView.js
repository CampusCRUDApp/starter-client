import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core/';



import NavBar from "./NavBar";

const AllCampusesView = (props) => {
  console.log(props)
  if (!props.allCampuses.length) {
    return (
      
      <div>
        <NavBar />
        <h1>There are no campuses.</h1>
      </div>
    );
    
  }

  return (
    <div>
      <NavBar />
        <Button variant="contained" color="primary" component={Link} to={`/addCampus`} style={{ marginBottom: "10px"}}>
            Add Campus
        </Button>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            {campus.name}</Link>
            {<input type="button" value="x" method="delete" onClick={() => props.removeCampus(campus.id)}></input>}

        <br/>
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