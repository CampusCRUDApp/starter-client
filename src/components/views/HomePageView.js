import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
<<<<<<< Updated upstream
=======
import Footer from './Footer';
import campusImg from './collegeCampus.jpeg';
>>>>>>> Stashed changes

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      
      <div className={classes.greetings}>
        <h1>Home Page</h1>
      </div>

      <Footer />
    </div>
  );    
}




export default HomePageView;
