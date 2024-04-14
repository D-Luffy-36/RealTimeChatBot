import React, { useState } from 'react';
import './SignUp.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
    const [email, setEmail] = useState(''); // Thêm trạng thái email
    const [username, setUsername] = useState(''); // Thêm trạng thái username
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value); // Xử lý thay đổi email
    }

    const handleOnChangeUsername = (event) => {
        setUsername(event.target.value); // Xử lý thay đổi username
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSignUp = async () => {
       
    }
    
    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <div className='signup-background'>
            <div className='signup-container'>
                <div className='signup-content row'>
                    <div className='col-12  signup-text-1'>
                        Sign Up To Chat Website
                    </div>

                    <div className='signup-text-2'>
                        Quick & Simple way to Communicate with others
                    </div>

                    <div className='col-12 form-group signup-input'>
                        <label>EMAIL ADDRESS</label>
                        <input type='text'
                            className='form-control'
                            placeholder='example@gmail.com'
                            value={email}
                            onChange={(event) => handleOnChangeEmail(event)}
                        />
                    </div>

                    <div className='col-12 form-group signup-input'>
                        <label>USERNAME</label>
                        <input type='text'
                            className='form-control'
                            placeholder='Username'
                            value={username}
                            onChange={(event) => handleOnChangeUsername(event)}
                        />
                    </div>

                    <div className='col-12 form-group signup-input'>
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
                                <span>I agree to the Terms of Service and Privacy Policy.</span>
                            </label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className='btn-signup' onClick={handleSignUp}>CREATE AN ACCOUNT</button>
                    </div>

                    <div className='col-12 text-center mt-3'>
                        <span className='text-other-login'>Or Sign Up with: </span>
                    </div>

                    <div className='col-12 social-login'>
                        <FontAwesomeIcon className ='google-icon' icon={faGoogle} />
                        <FontAwesomeIcon className ='apple-icon' icon={faApple} />
                        <FontAwesomeIcon className='facebook-icon' icon={faFacebook} />
                    </div>

                    <div className='col-12 text-center mt-3'>
                        <span className='sign-up'>Sign Up </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
