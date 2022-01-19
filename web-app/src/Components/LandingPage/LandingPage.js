import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as fetchService from '../../services/fetchService';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Trackify.png';

const theme = createTheme();

export default function LandingPage() {
    //Creating useState for using in functions
    const [email,setEmail] = React.useState();
    const [password,setPassword] = React.useState();
    const [error,setError] = React.useState(false);
    const [userId,setUserId] = React.useState('');

    const navigate = useNavigate(); // Creating navigate - to navigate to after login authentication if authetnicated  properly.

    //Creating email Handler 
    const emailhandler = (e) => {
        setEmail(e.target.value);
    }
    //Creating passwrod Handler 
    const passwordhandler = (e) => {
        setPassword(e.target.value);

    }
    //Creating submit button Handler 
    const submitHandler = async (e) => {
        e.preventDefault();
        //Creating request for sending request to backend server for login authetication
        const request = {
            email: email,
            password: password
        }
        try {
            const response = await fetchService.loginAuth(request); // sending request for login authentication
            setUserId(response.user._id);         
            localStorage.setItem("userInfo",JSON.stringify(response));
            setError(false);
        } catch (error) {
            setError(true);
            console.log(error.message);
        }
        
    };

    React.useEffect(()=>{ //UseEffect for nagivating to home if user was logged in and not logged out.
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            navigate("/home");
        }
    },[userId,setUserId])

    

    return (
        <div>
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
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={submitHandler}
                            sx={{
                                my: 2,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }} >
                                <Grid container spacing={2}>
                <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={emailhandler}
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
                                autoComplete="current-password"
                                value={password}
                                onChange={passwordhandler}
                            />
                            </Grid>
                            </Grid>
                {error && <Alert severity='error'> Invalid Login Credentials</Alert> }

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
        </div>
    );
}