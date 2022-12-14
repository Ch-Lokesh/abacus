package com.abacus.academy.service;

import java.util.List;

import com.abacus.academy.model.*;
import com.abacus.academy.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abacus.academy.exception.NotFound;
import com.abacus.academy.repository.CourseRepo;
import com.abacus.academy.repository.InstituteRepo;
import com.abacus.academy.repository.StudentRepo;

@Service
public class AdminService {

	@Autowired
	CourseRepo courseRepo;
	
	@Autowired
	InstituteRepo instituteRepo;
	
	@Autowired
	StudentRepo studentRepo;

	@Autowired
	AdminRepo adminRepo;
	

	public String addAdmin(AdminDAO adminDAO){
		try{
			AdminModel am = new AdminModel();
			am.setEmail(adminDAO.getEmail());
			am.setPassword(adminDAO.getPassword());
			am.setMobileNumber(adminDAO.getMobileNumber());
			am.setUserRole(adminDAO.getUserRole());

			adminRepo.save(am);
			return "Admin added";
		}
		catch (Exception e){
			System.out.println("Exception in adding admin: " + e.getMessage());
		}
		return "Admin adding failed";
	}

	public String addCourse(CourseDAO courseDAO) {
		try {
			CourseModel cm = new CourseModel();
			cm.setCourseName(courseDAO.getCourseName());
			cm.setCourseDescription(courseDAO.getCourseDescription());
			cm.setCourseDuration(courseDAO.getCourseDuration());
			//id will generate automatic;
			
			courseRepo.save(cm);
			return "Course added";
		}
		catch(Exception e) {
			System.out.println("failed addming course: "+e.getMessage());
		}
		return "Course Adding failed";
	}

	public List<CourseModel> viewCourse() {

		return courseRepo.findAll();
	}

	public String editCourse(int courseId, CourseDAO courseDAO) throws NotFound {
		if(courseRepo.findById(courseId).isPresent()) {
			CourseModel existingCourse = courseRepo.findById(courseId).get();

			existingCourse.setCourseName(courseDAO.getCourseName());
			existingCourse.setCourseDescription(courseDAO.getCourseDescription());
			existingCourse.setCourseDuration(courseDAO.getCourseDuration());
			
			courseRepo.save(existingCourse);
			return "Course edited";
		}else {
			throw new NotFound("Course Not Found with id: "+courseId);
		}
	}

	public String deleteCourse(int courseId) throws NotFound {
		
		if(courseRepo.findById(courseId).isPresent()) {
			courseRepo.deleteById(courseId);
			return "Course deleted";
		}else {
			throw new NotFound("Course Not Found with id: "+courseId);
		}
	}

	public String addInstitute(InstituteDAO instituteDAO) {
		try {
			InstituteModel im = new InstituteModel();
			im.setInstituteName(instituteDAO.getInstituteName());
			im.setEmail(instituteDAO.getEmail());
			im.setInstituteAddress(instituteDAO.getInstituteAddress());
			im.setInstituteDescription(instituteDAO.getInstituteAddress());
			im.setMobile(instituteDAO.getMobile());
			
			instituteRepo.save(im);
			return "Institue added";
		}
		catch(Exception e) {
			System.out.println("failed addming Institue: "+e.getMessage());
		}
		return "Institue Adding failed";
	}

	public List<InstituteModel> viewInstitute() {

		return instituteRepo.findAll();
	}

	public String editInstitute(int instituteId, InstituteDAO instituteDAO) throws NotFound {
		
		if(instituteRepo.findById(instituteId).isPresent()) {

			InstituteModel existingInstitute = instituteRepo.findById(instituteId).get();
			existingInstitute.setInstituteName(instituteDAO.getInstituteName());
			existingInstitute.setEmail(instituteDAO.getEmail());
			existingInstitute.setInstituteAddress(instituteDAO.getInstituteAddress());
			existingInstitute.setInstituteDescription(instituteDAO.getInstituteAddress());
			existingInstitute.setMobile(instituteDAO.getMobile());
			
			instituteRepo.save(existingInstitute);
			return "Institue edited";
		}
		else {
			throw new NotFound("Institute Not Found with id: "+instituteId);
		}
	}

	public String deleteInstitute(int instituteId)  throws NotFound {
		
		if(instituteRepo.findById(instituteId).isPresent()) {
			instituteRepo.deleteById(instituteId);
			return "Institute deleted";
		}
		else {
			throw new NotFound("Institute Not Found with id: "+instituteId);
		}
	}

	public String addStudent(StudentDAO studentDAO) {
		try {
			StudentModel sm = new StudentModel();
			sm.setAddress(studentDAO.getAddress());
			sm.setAge(studentDAO.getAge());
			sm.setMobile(studentDAO.getMobile());
			sm.setStudentDOB(studentDAO.getStudentDOB());
			sm.setStudentName(studentDAO.getStudentName());
			studentRepo.save(sm);
			return "Student added";
			
		}
		catch(Exception e) {
			return "Student adding Failed";
		}
	}

	public List<StudentModel> viewStudent() {

		return studentRepo.findAll();
	}

	public String editStudent(int studentId, StudentDAO studentDAO) throws NotFound {
		if(studentRepo.findById(studentId).isPresent()) {

			StudentModel existingStudent = studentRepo.findById(studentId).get();
			existingStudent.setAddress(studentDAO.getAddress());
			existingStudent.setAge(studentDAO.getAge());
			existingStudent.setMobile(studentDAO.getMobile());
			existingStudent.setStudentDOB(studentDAO.getStudentDOB());
			existingStudent.setStudentName(studentDAO.getStudentName());
			studentRepo.save(existingStudent);
			return "Student edited";
		}else {
			throw new NotFound("Student Not Found with id: "+studentId);
		}
	}

	public String deleteStudent(int studentId)  throws NotFound {
		if(studentRepo.findById(studentId).isPresent()) {
			studentRepo.deleteById(studentId);
			return "Student deleted";
		}else {
			throw new NotFound("Student Not Found with id: "+studentId);
		}
	}
	
	
}
