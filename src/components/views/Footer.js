import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from 'react-router-dom';

const useStyles = makeStyles (theme => ({
    root:{
        textAlign: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
        background: 'linear-gradient(45deg, #5F259E 20%, #FF8E53 90%)',
        color: 'white',
    },
    slogan:{
        fontSize: '20px',
        paddingBottom: '20px',
    },
    links:{
        marginRight: '15px',
        textDecoration: 'none',
        color: 'white',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.slogan} variant='h6'>
                Make managing your school as easy as A,B,C!
            </Typography>

            <Link className={classes.links} to={'/'}>
            Home
            </Link>

            <Link className={classes.links} to={'/campuses'}>
            All Campuses
            </Link>

            <Link className={classes.links} to={'/students'}>
            All Students
            </Link>

            <Link className={classes.links} to={'/addcampus'}>
            Add Campuses
            </Link>
        </div>
    );
}

export default Footer;