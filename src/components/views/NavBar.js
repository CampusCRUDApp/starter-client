import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      fontType: 'bold',
      fontFamily: 'Mukta, sans-serif', 
      fontSize: '35px', 
      color: 'white',
      textDecoration: 'none',
    },
    appBar:{
      background: 'linear-gradient(45deg, #5F259E 20%, #FF8E53 90%)',
      shadows: ['none'],
    },
    greeting:{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: "50%",
      margin: "auto",
    },
    links:{
      textDecoration: 'none',
    },
    button:{
      backgroundColor: '#5F259E',
      color: 'white',
    },
  }));
  
const NavBar = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Link className={classes.title} to={'/'}>
                <Typography variant="h6" className={classes.title} color="inherit" >
                College Management System
                </Typography>
            </Link>
            

            <Link className={classes.links} to={'/campuses'} >
              <Button variant="contained" style={{marginRight: '10px'}} className={classes.button}>
                All Campuses
              </Button>
            </Link>
  
            <Link className={classes.links} to={'/students'} >
              <Button variant="contained" className={classes.button}>
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        
        
      </div>
    );    
  }



  export default NavBar;
