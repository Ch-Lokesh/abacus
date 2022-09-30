import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { useState } from 'react';
import { userLogin } from '../service/userService';
import { adminLogin } from '../service/userService';

const Auth = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(
        {
            email:"",
            password:""
            
        }
    )

    const handleChange = (event, prop)=>{
        setLogin({...login, [prop]:event.target.value});
    };

    const tryAdminLogin = (event) => {
        event.preventDefault();
        adminLogin(login).then((resp) => {
            if(resp){
                sessionStorage.setItem("email", login.email);
                sessionStorage.setItem("userRole", "admin");
            }
            console.log(resp);
        }).catch((error)=>{console.log(error);})
    }
    const tryLogin = (event) => {
        event.preventDefault();
        userLogin(login).then((resp) => {

            if(!resp){
                return tryAdminLogin();
            }
            sessionStorage.setItem("email", login.email);
            sessionStorage.setItem("userRole", "user");
            console.log(resp);
            console.log("success log");
        }).catch((error) => {
            console.log(error);
        })
    }

    

    
  return (


    <div>
        <div className='regsiter-form'>
            <div className='form-header'><p className='heading'>Login</p></div>
            <div className='form-body'>
                
                <div className='oneInput'>
                    <input type='email' id='email' name='email'
                    onChange={(e)=>handleChange(e, 'email')} className='takeInp' placeholder='Enter email'></input>
                </div>
                
                
                <div className='oneInput'>
                    <input type='password' id='password' name='password'
                    onChange={(e)=>handleChange(e, 'password')} className='takeInp' placeholder='Password'></input>
                </div>
                
                <div className='submitB'>
                    <button type='submit' id='loginButton' name='loginButton' 
                    onClick={tryLogin} className='submitButton'>Login</button>
                </div>

                <div className="oneInput">
                    New User/Admin <a onClick={() => navigate("/signup")} id="sigupLink">Signup</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth