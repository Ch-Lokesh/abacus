package com.abacus.academy.controller;

import java.util.List;

import com.abacus.academy.model.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.abacus.academy.exception.NotFound;
import com.abacus.academy.model.AdmissionDAO;
import com.abacus.academy.model.AdmissionModel;
import com.abacus.academy.service.UserService;

@CrossOrigin
@RestController
public class UserController {


	@Autowired
	UserService userService;

	@GetMapping("user/greetings")
	String greeting(){
		System.out.println("hello user");
		return "hello user";
	}

//	@PostMapping("user/signup")
//	String addUser(@RequestBody UserDAO userDAO) throws Exception{
//		return userService.addUser(userDAO);
//	}

	@PostMapping("user/addAdmission")
	String addAdmission(@RequestBody AdmissionDAO admissionDAO) {
		return userService.addAdmission(admissionDAO);
	}
	
	@GetMapping("user/viewAdmission")
	List<AdmissionModel> viewAdmission(@RequestParam String email) throws NotFound{
		return userService.viewAdmission(email);
	}
	
	@PutMapping("user/editAdmission/{enrolId}")
	String editAdmission(@RequestParam int enrolId,@RequestBody AdmissionDAO admissionDAO) {
		
		return userService.editAdmission(enrolId,admissionDAO);
	}
	
	@DeleteMapping("user/deleteAdmission/{enrolId}")
	String deleteAdmission(@PathVariable int enrolId) {
		
		return userService.deleteAdmission(enrolId);
	}
	
	@GetMapping("user/viewStatus")
	String viewStatus(@RequestParam int applicationId) {
		return userService.viewStatus(applicationId);
	}
	
}
