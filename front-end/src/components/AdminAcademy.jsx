import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import { getAcademies } from '../service/userService'

const AdminAcademy = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [academies, setAcademies] = useState(null);
    
    const deleteAcademy = (e, id) => {
        e.prevenDefault();
        deleteAcademy(id).
        then((res) => {
            if(academies){
                setAcademies((prevElements) => {
                    return prevElements.filter((academy) => academy.id != id)
                });
            }
        });
    };

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);

            try{
                const response = await getAcademies();
                setAcademies(response.data);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

  return (
    <>
    <AdminNavbar/>
    <div className='AcademyList'>
        
    </div>

    </>
  )
}

export default AdminAcademy