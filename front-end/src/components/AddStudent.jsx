import React from 'react'
import AdminNavbar from './AdminNavbar'
import { useState } from 'react'

const AddStudent = () => {

    const [student, setStudent] = useState({
        studentName:"",
        studentDOB:"",
        address:"",
        mobile:"",
        Age:""
    })

    const handleChange = (event) => {
        setStudent({...student, [event.target.name]:event.target.value})
    }

    const saveStudent = (event) => {
        event.prevenDefault();

        if(student.studentName.length === 0){
            alert("Enter student name");
            return;
        }
        else if(student.address.length === 0){
            alert("Enter student address");
            return;
        }
        else if(student.mobile.length === 0){
            alert("Enter mobile number");
            return;
        }
        else if(student.Age.length === 0){
            alert("Enter valid age");
            return;
        }


    }


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
                    <input type="text" name='studentName' className="placeholder" id="firstName"
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
                <input onClick={saveStudent} type="submit" id="addAcademy" value='Add Academy'/>
            </div>
        </form>
    </div>
</>
  )
}

export default AddStudent