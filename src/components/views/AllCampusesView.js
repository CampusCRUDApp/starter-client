import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Footer from './Footer';
import NavBar from "./NavBar";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      
      <div>
        <NavBar />
        <h1>There are no campuses.</h1>
        <Footer />
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
          <p>{campus.description}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;