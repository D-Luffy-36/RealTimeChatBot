import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import picture from './picture.png';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleOnChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSignUp = async () => {
        // Thực hiện logic đăng ký
    }
    
    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <Box sx={{ 
            backgroundColor: 'rgba(71, 183, 236, 1)', 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>


        <Typography variant='h2' sx={{ 
                color: 'black',
                position: 'absolute', 
                top: '20px', 
                left: '20px', 
                marginBottom: '10px',
                marginTop: '137px',
            }}>
                Welcome to Chat Website<br />
        </Typography>

        <Typography sx={{ position: 'absolute', top: '300px', width: '642px',height: "81px", color: 'black', left: '105px' }}>
            With global connectivity, the chat website lets you meet and <br />
            communicate with people worldwide.
        </Typography>

        <img 
            src={picture} 
            alt="Global Connectivity" 
            style={{ 
                width: '550px', 
                height: '450px', 
                position: 'absolute', 
                left: '135px', // Để căn giữa từ lề bên trái, tính giá trị left là 50% trừ đi một nửa của chiều rộng của hình ảnh
                marginTop: '374px'
            }} 
        />
                        
            <Box className='login-container' sx={{ 
                marginLeft: 'auto',
                width: '576px', 
                height: '600px', 
                padding: '20px', 
                backgroundColor: '#fff', 
                textAlign: 'center', 
                marginTop: '157px',
                marginRight: '40px'
                
            }}>
                <Typography variant='h4' sx={{ fontWeight: 600, marginBottom: '10px' }}>
                    Sign Up To Chat Website
                </Typography>

                <Typography variant='body1' sx={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '17.07px',
                    marginBottom: '50px'
                }}>
                      Quick & Simple way to Communicate with others
                </Typography>


                <TextField
                    label="USERNAME"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={handleOnChangeUsername}
                    sx={{ marginBottom: '0px' }}
                />

                <TextField
                    label="EMAIL ADDRESS"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleOnChangeEmail}
                    sx={{ marginBottom: '0px' }}
                />

              
                <TextField
                    label="PASSWORD"
                    variant="outlined"
                    fullWidth
                    type={isShowPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleOnChangePassword}
                    sx={{ marginBottom: '30px' }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
                        label="I agree to the Terms of Service and Privacy Policy."
                        sx={{ textDecoration: 'underline' }}
                    />
                </Box>

                <Button variant='contained' sx={{ background: 'black', width: '380px', height: '69.04px' }}>
                    CREATE AN ACCOUNT
                </Button>

                <Typography variant='body1' align='center' sx={{ marginTop: '20px', marginBottom: '30px' }}>
                    Already have an account?
                </Typography>

                <Button variant='outlined' sx={{ color: 'black', borderColor: 'black' }}>
                    LOG IN
                </Button>

            </Box>
        </Box>
    );
}

export default SignUp;
