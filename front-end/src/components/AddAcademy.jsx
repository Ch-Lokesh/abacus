import React from 'react'
import AdminNavbar from './AdminNavbar'
import '../styles/AddAcademy.css'
import { useState } from 'react'
import { AddAcademyService } from '../service/userService'
// import { useEffect } from 'react'

const AddAcademy = () => {
    const [academy, setAcademy] = useState({
        instituteName:"",
        instituteDescription:"",
        instituteAddress:"",
        mobile:"",
        email:""

    })

    const saveAcademy = (event) => {
        event.preventDefault();

        if(academy.instituteName.length === 0){
            alert("Enter institute name");
            return;
        }
        else if(academy.instituteAddress.length === 0){
            alert("Enter institute address");
            return;
        }
        else if(academy.instituteDescription.length=== 0){
            alert("Enter institute description");
            return;
        }
        else if(academy.mobile.length === 0){
            alert("Enter mobile number");
            return;
        }
        else if(academy.email.length === 0){
            alert("Enter mobile number");
            return;
        }

        AddAcademyService(academy).then((resp) => {
            console.log(resp);
            console.log("called save method");
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleChange = (e, prop) => {
        setAcademy({...academy, [e.target.name]:e.target.value});
    }

    // useEffect(() => {
    //   console.log(academy)
    // }, [academy])
    
  return (
    <>
        <AdminNavbar/>
        <div className="addAcad">
            <span className='headcontainer'>
                <h3 className='head'>Add Academy</h3>
            </span>

            <form action="" className='academyForm'>

                <div className='row'>
                    <div className="left1">
                        <input type="text" name='instituteName' className="placeholder" id="academyName"
                        onChange={(e)=>handleChange(e)} placeholder='Enter Academy name'/>
                    </div>

                    <div className="right1">
                        <input type="text" name='mobile' placeholder='Enter the contact number'
                        onChange={(e)=>handleChange(e)} className="placeholder" id="contactNumber" />
                    </div>
                </div>

                <div className='row'>
                    <div className="left1">
                        <input type="text"  className="placeholder" id="imageUrl"
                        onChange={(e)=>handleChange(e)} placeholder='Enter Academy url'/>
                    </div>

                    <div className="right1">
                        <input type="text" name='email' placeholder='Enter the academy email'
                        onChange={(e)=>handleChange(e)} className="placeholder" id="emaiId" />
                    </div>
                </div>

                <div className='row'>
                    <div className="left1">
                        <input type="text" name='instituteAddress' className="placeholder"
                        onChange={(e)=>handleChange(e)} id="academyLocation" placeholder='Enter Academy Location'/>
                    </div>

                    <div className="right1">
                        <textarea cols='30' name='instituteDescription' type="text" 
                        onChange={(e)=>handleChange(e)}placeholder='Enter the academy email' className="placeholder" id="academyDescription" />
                    </div>
                </div>

                <div className="row">
                    <input onClick={saveAcademy} type="submit" id="addAcademy" value='Add Academy'/>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddAcademy