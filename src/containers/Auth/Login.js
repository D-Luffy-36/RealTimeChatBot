import React, { useState } from 'react';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { loginApi } from '../../servieces/UserService';

const Login = () => {
    const [email, setEmail] = useState(''); // Thay đổi tên biến username thành email
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleOnChangeEmail = (event) => { // Thay đổi tên hàm handleOnChangeUsername thành handleOnChangeEmail
        setEmail(event.target.value); // Thay đổi setEmail(event.target.value) thành setUsername(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        try {
            let res = await loginApi(email, password); // Thay đổi tham số thứ nhất của loginApi từ username thành email
            console.log("check login:", res);
            if (res && res.token) {
                localStorage.setItem("token", res.token);
            }
        } catch (error) {
            console.error("Error while logging in:", error);
        }
    }
    
    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row'>
                    <div className='col-12  login-text-1'>
                        Login To Chat Website
                    </div>

                    <div className='login-text-2'>
                        Quick & Simple way to  Communicate with others
                    </div>
                        

                    <div className='col-12 form-group login-input'>
                        <label>EMAIL ADDRESS</label> {/* Thay đổi từ "EMAIL DRESS" thành "EMAIL ADDRESS" */}
                        <input type='text'
                            className='form-control'
                            placeholder='@gmail.com'
                            value={email} // Thay đổi giá trị của value từ username thành email
                            onChange={(event) => handleOnChangeEmail(event)} // Thay đổi handleOnChangeUsername thành handleOnChangeEmail
                        />
                    </div>

                    <div className='col-12 form-group login-input'>
                        <label>PASSWORD</label>
                        <div className='input-password'>
                            <input
                                className='form-control'
                                type={isShowPassword ? 'text' : 'password'}
                                placeholder='password'
                                value={password}
                                onChange={(event) => handleOnChangePassword(event)}
                            />
                            <span onClick={handleShowHidePassword}>
                                <i className={isShowPassword ? 'fa-solid fa-eye' : 'fa-regular fa-eye-slash'}></i>
                            </span>
                        </div>
                    </div>

                   
                    <div className='row'>
                        <div className='col-6'>
                            <label className='remember-me'>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMe}
                                />
                                <span>Remember me</span>
                            </label>
                        </div>

                        <div className='col-6 text-right'>
                            <span className='forgot-password'>Forgot your password? </span>
                        </div>

                    </div>



                    <div className="col-12">
                        <button className='btn-login' onClick={handleLogin}>LOG IN</button>
                    </div>


                    <div className='col-12 text-center mt-3'>
                        <span className='text-other-login'>Or Login with: </span>
                    </div>

                    <div className='col-12 social-login'>
                        <FontAwesomeIcon className ='google-icon' icon={faGoogle} />
                        <FontAwesomeIcon className ='apple-icon' icon={faApple} />
                        <FontAwesomeIcon className='facebook-icon' icon={faFacebook} />
                    </div>

                    <div className='col-12 text-center mt-3'>
                        <span className='login'>Login </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
