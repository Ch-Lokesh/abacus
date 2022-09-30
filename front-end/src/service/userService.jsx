import axios from 'axios';
import { myAxios } from './helper'

export const signUP = (user) => {
  
    return myAxios.post("/user/signup", user).then(
        (response) => response.data
    )
};

export const adminSignUp = (user) => {
    return myAxios.post("/admin/signup", user).then(
        (response)=> response.data
    )
}

export const userLogin = (login) => {
    return myAxios.post("/user/login", login).then(
        (response) => response.data
    )
};

export const adminLogin = (login) => {
    return myAxios.post("/admin/login", login).then(
        (response) => response.data
    )
};

export const AddAcademyService = (academy) => {
    return myAxios.post("/admin/addInstitute", academy).then(
        (response) => response.data
    )
}

export const AddCourseService = (course) => {
    return myAxios.post("/admin/addCourse", course).then(
        (response) => response.data
    )
}

export const deleteAcademy = (id)=>{
    return myAxios.delete("/admin/delete/Institute" + id, null, {param:{id}});
}

export const getAcademies = () => {
    return myAxios.get("/admin/viewInstitute");
}