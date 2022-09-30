import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Signup.css'
import { useState } from 'react'
import { signUP } from '../service/userService'
import { adminSignUp } from '../service/userService'

const Signup = () => {
    
    // const baseurl = "http://localhost:8080";

    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            email:"",
            password:"",
            userName:"",
            mobileNumber:"",
            userRole:""
        }
    )

    const [password, setPassword] = useState(
        {
            password:""
        }
    )

    const saveUser = (event) => {
        event.preventDefault();

        //data validate
        if(user.password.length < 8){
            alert("Password length must be eight")
            return;
        }
        else if(user.password !== password.password){
            alert("Sorry password didn't match");
            return;
        }
        //post to server
        if(user.userRole === "user"){
            signUP(user).then((resp) => {
                console.log(resp);
                console.log("success fully added user");
            }).catch((error) => {
                console.log(error);
            })
        }
        else{
            adminSignUp(user).then((resp) => {
                console.log(resp);
                console.log("successfull added admin")
            })

            
        }
        
        
    }
    const handleChange = (event, prop)=>{
        setUser({...user, [prop]:event.target.value});
    };

    const handleChange2 = (event)=>{
        setPassword({...password, password:event.target.value})
    }
    // useEffect(() => {
      
    // console.log(password)
      
    // }, [password])
    
  return (
    <div>
        <div className='regsiter-form'>
            <div className='form-header'><p className='heading'>Register</p></div>
            <div className='form-body'>
                <div className='oneInput'>
                    <select name="user/admin" id="user/admin"
                    onChange={(e)=>handleChange(e, 'userRole')} className='takeInp'>\
                        <option>User/Admin</option>
                        <option  value="user">User</option>
                        <option  value="admin">Admin</option>
                    </select>
                </div>

                <div className='oneInput'>
                    <input type='email' id='email' name='email'
                    onChange={(e)=>handleChange(e, 'email')} className='takeInp' placeholder='Enter email'></input>
                </div>

                <div className='oneInput'>
                    <input type='text' id='username' name='username'
                    onChange={(e)=>handleChange(e, 'userName')} className='takeInp' placeholder='Enter username'></input>
                </div>

                <div className='oneInput'>
                    <input type='text' id='mobileNumber' name='mobileNumber'
                    onChange={(e)=>handleChange(e, 'mobileNumber')} className='takeInp' placeholder='Enter Mobilenumber'></input>
                </div>

                <div className='oneInput'>
                    <input type='password' id='password' name='password'
                    onChange={(e)=>handleChange(e, 'password')} className='takeInp' placeholder='Password'></input>
                </div>

                <div className='oneInput'>
                    <input type='password' id='confirmPassword' name='confirmPassword'
                     onChange={(e)=>handleChange2(e, 'password')} className='takeInp' placeholder='Confirm Password'></input>
                </div>

                <div className='submitB'>
                    <button type='submit' name='submitButton' id='submitButton'
                    onClick={saveUser} className='submitButton'>Submit</button>
                </div>

                <div className="oneInput">
                    already User <a onClick={() => navigate("/")} id="siginLink">Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup