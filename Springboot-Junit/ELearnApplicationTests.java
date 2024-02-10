package com.lms;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.junit.Ignore;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import com.lms.bean.Course;
import com.lms.bean.FileData;
import com.lms.bean.Login;
import com.lms.bean.User;
import com.lms.repo.UserRepository;
import com.lms.service.CourseService;
import com.lms.service.FileService;
import com.lms.service.UserService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class ELearnApplicationTests {

	@Autowired
	UserService service;

	@Autowired
	FileService fileService;

	@Autowired
	CourseService courseService;

	List<User> list = new ArrayList<User>();
	List<User> testlist = new ArrayList<User>();

	@Test

	@Order(1)
	User performRegister() {
		User user = new User(14, "madhan@gmail.com", "madhan", "kumar", "RegisteredUser", "madhan123");
		service.registerUser(user);
		return user;
	}

	@Test

	@Order(2)
	void performLoginPass() {
		User user = new User(15, "naga@gmail.com", "naga", "jeyanthan", "RegisteredUser", "naga123");
		Login msg = new Login("Login Fail");
		Login rs = service.loginUser(user);
		rs.equals(msg);
	}

	@Test

	@Order(3)
	void performLoginFail() {
		User user = new User(16, "naga@gmail.com", "naga", "jeyanthan", "RegisteredUser", "naga123");
		Login msg = new Login("Login Fail");
		Login rs = service.loginUser(user);
		rs.equals(msg);
	}

	@Test
	// @Ignore
	@Order(4)
	void performAdminLoginPass() {
		User user = new User(3, "domnic@gmail.com", "domnic", "dev", "Admin", "admin123");
		Login msg = new Login("Admin Success");
		Login rs = service.loginUser(user);
		rs.equals(msg);
	}

	@Test
	// @Ignore
	@Order(5)
	void performAdminLoginFail() {
		User user = new User(18, "sara@gmail.com", "sara", "butheen", "Admin", "admin123");
		Login msg = new Login("Admin Fail");
		Login rs = service.loginUser(user);
		rs.equals(msg);
	}

	@Test
	// @Ignore
	@Order(6)
	void performUpdateUserDetails() {
		User user = new User(108, "mahesh@gmail.com", "mahesh", "kumar", "RegisteredUser", "mahesh123");
		boolean expectedresponse = true;
		boolean actualresponse = service.insertAndUpdateUser(user);
		assertEquals(expectedresponse, actualresponse);

	}

	@Test
	@Ignore
	@Order(7)
	void performDelete() {
		int id = 17;
		boolean result = service.deleteUser(id);
		assertEquals(true, result);
	}

	@Test
	@Ignore
	@Order(8)
	void performGetAll() {
		list = service.getAll();
		User user0 = new User(3, "admin@gmail.com", "Domnic", "Dev", "Admin", "admin123");
		User user1 = new User(1, "maheshkumar@gmail.com", "mahesh", "kumar", "RegisteredUser", "mahesh123");
		User user2 = new User(2, "shaji@gmail.com", "Shaji", "Ram", "RegisteredUser", "mahesh123");

		testlist.add(user1);
		testlist.add(user0);
		testlist.add(user2);
		list.equals(testlist);

	}

	@Test
	// @Ignore
	@Order(9)
	void uploadFile() throws IOException {

		MockMultipartFile multifile = new MockMultipartFile("file", "test.txt", "text/plain",
				"Hello RElevantZ!".getBytes());

		boolean expected = true;
		boolean actual = fileService.storeFile(multifile);

		assertEquals(expected, actual);

	}

	@Test
	public void deleteCourse() {
		int id = 2;
		boolean exp = courseService.deleteCourse(id);
		assertEquals(true, exp);
	}

}
