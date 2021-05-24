import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Footer from './Footer';
import NavBar from "./NavBar";

import campus1 from './campus-1.jpg';


const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      
      <div>
        <NavBar />
        <h1 className='none-avail'>There are no campuses.</h1>
        <Footer />
      </div>
    );
    
  }

  return (
    <div>
      <NavBar />
      {props.allCampuses.map((campus) => (
        <div key={campus.id} className='campus-info'>
          <Link to={`/campus/${campus.id}`} className='campus-name'>
            <h1>{campus.name}</h1>
          </Link>
            <img src={campus1} alt="Campus" className='campus-img'></img>
            <p className='campus-address'>{campus.address}</p>
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