import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Footer from './Footer';
import campusImg from './collegeCampus.jpeg';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    width: "50%",
    margin: "auto",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      
      <div className="greeting">
        <h1 className='greeting-title'>Welcome to the College Management System!</h1>
        <p>Here, you will be able to manage colleges and the students that attend them.</p>
        <img src={campusImg}></img>
      </div>

      <Footer />
    </div>
  );    
}




export default HomePageView;
