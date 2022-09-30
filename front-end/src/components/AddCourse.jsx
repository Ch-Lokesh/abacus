import React from 'react'
import AdminNavbar from './AdminNavbar'
import { useState } from 'react'
import { AddCourseService } from '../service/userService'
import '../styles/AddCourse.css'

const AddCourse = () => {
    const [course, setCourse] = useState({
        courseName:"",
        courseDescription:"",
        courseDuration:"",
    })

    const handleChange = (event)=>{
        setCourse({...course, [event.target.name]:event.target.value});
    }

    const saveCourse = (event) => {
        event.preventDefault();

        if(course.courseName.length === 0){
            alert("Enter course name");
            return;
        }
        else if(course.courseDuration.length === 0){
            alert("Enter course duration");
            return;
        }
        else if(course.courseDescription.length === 0){
            alert("Enter course description");
            return;
        }

        AddCourseService(course).then((resp) => {
            console.log(resp);
            console.log("called course save method");
        }).catch((error) => {
            console.log(error);
        })
    }


  return (
    <>
        <AdminNavbar/>
        <div className="addAcad">
            <span className='headcontainer'>
                <h3 className='head'>Add Course</h3>
            </span>

            <form action="" className='academyForm'>

                <div className='row'>
                    <div className="left1">
                        <input type="text" name='courseName' className="placeholder" id="courseName"
                        onChange={(e)=>handleChange(e)} placeholder='Enter Course name'/>
                    </div>

                    <div className="right1">
                        <input type="text" name='noOfStudents' placeholder='Enter no of student enrolled'
                        onChange={(e)=>handleChange(e)} className="placeholder" id="courseEnrolled" />
                    </div>
                </div>

                <div className='row'>
                    <div className="left1">
                        <input type="text"  className="placeholder" id="courseDuration" name='courseDuration'
                        onChange={(e)=>handleChange(e)} placeholder='Enter the course duration'/>
                    </div>

                    {/* <div className="right1">
                        <input type="text" name='email' placeholder='Enter the academy email'
                        onChange={(e)=>handleChange(e)} className="placeholder" id="emaiId" />
                    </div> */}
                </div>

                <div className='row'>
                    <div className="left1">
                        <input type="text" name='courseTiming' className="placeholder"
                        onChange={(e)=>handleChange(e)} id="courseTiming" placeholder='Enter the course Timing'/>
                    </div>

                    <div className="right1">
                        <textarea cols='50' name='courseDescription' type="text" 
                        onChange={(e)=>handleChange(e)}placeholder='Enter the course Description' className="placeholder" id="academyDescription" />
                    </div>
                </div>

                <div className="row">
                    <input onClick={saveCourse} type="submit" id="addCourse" value='Add Course'/>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddCourse