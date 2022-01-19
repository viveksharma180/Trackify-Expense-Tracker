import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import * as fetchService from '../../services/fetchService';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Trackify.png';

const theme = createTheme();

export default function LandingPage() {
  //Creating useState for functionalities
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

  const navigate = useNavigate();// using navigate to routing

  //Creating handlers
  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  }
  //Creating submit handler for signup
  const submitHandler = async(event) => {
    event.preventDefault();
    setSuccessMessage('');
    setMessage('');
    //Creating fields validation
    if(name === ""){
      return setMessage('Name cannot be empty');
    }
    if(email === ""){
      return setMessage('Email cannot be empty');
    }
    if(password === ""){
      return setMessage('Password cannot be empty');
    }
    if(confirmPassword === ""){
      return setMessage('Confirm your password!');
    }
    if(password !== confirmPassword){
      return setMessage("Passwords do not match!");
    }
    //Creating request for registering user on backend.
    const request = {
      name: name,
      email: email,
      password:password
  }

  try {
      const response = await fetchService.registerUser(request); // POST request register user on backend
      if(response){
        setSuccessMessage('Registered Successfully');
      } else {
        setMessage('User already exists!');
      }         
  } catch (error) {
     setMessage('User already exists!');
      console.log(error.response.data.message);
  } 
  };

  React.useEffect(()=>{ //useEffect to navigate 
    const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            navigate("/home");
        };
  })

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2906&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{
                            my: 4,
                            mx: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <img src={logo}></img>
                    </Box>  
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={nameHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={emailHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={passwordHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={confirmPasswordHandler}
                  />
                </Grid>
              </Grid>
              {message && <Alert severity='error'>{message}</Alert> }
              {successMessage && <Alert severity='success'>{successMessage}</Alert> }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}