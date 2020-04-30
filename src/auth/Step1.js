
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";

import {addData} from '../actions/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Test It
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1587793890785-485108ece595?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  textField:{
    textAlign:'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.firstName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

function Step1(props) {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const submitHandler = event => {
    event.preventDefault();
    props.authenticateUser(user)
    console.log(user)
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DescriptionIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Start Making Your Resume
          </Typography>
          <form className={classes.form} onSubmit={submitHandler} validate={validate}>
          <Grid item xs={12} sm={6}> 
          <TextField
            className={classes.textField}
              variant="outlined"
              margin="normal"
              fullWidth
              required={true}
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              onChange={handlerChange}
            />
          </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    id="lastName"
                    autoComplete="current-password"
                    onChange={handlerChange}
                />
            </Grid>
            

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              onChange={handlerChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="localhost:3000/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  addData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
