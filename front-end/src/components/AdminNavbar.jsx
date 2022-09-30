import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AdminNavbar.css'

const AdminNavbar = () => {

    const navigate = useNavigate();
  return (
    <>
        <div className="adminNav">
            <div className="ele-left ind">Abacus academy</div>
            <div className="ele-left" id="adminAcademy"
             onClick={(e) => navigate("/adminAcademy")}>Academy</div>

            <div className="ele-mid" id="adminCourse"
            onClick={(e) => navigate("/adminCourse")}>Course</div>

            <div className="ele-right" id="adminStudents" 
            onClick={(e) => navigate("/adminStudents")}>Students</div>
        </div>
    </>
  )
}

export default AdminNavbar