package com.lms.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;


public class AddCourse {

	WebDriver driver;
	
	@Test
	void uploadfiles()
	{
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		
		driver.navigate().to("http://localhost:4200/AdminHome");
		
		driver.findElement(By.id("uploadoption")).click();
		
		driver.findElement(By.id("selectfile")).click();
		
		driver.findElement(By.id("selectfile")).click();
		
		driver.findElement(By.id("liveToastBtn")).click();
		
		driver.findElement(By.id("courseForm")).click();
		
		driver.findElement(By.id("courseName")).click();

		driver.findElement(By.id("courseCategory")).click();
		
		driver.findElement(By.id("addcourse"));
		
		
	}
	public static void main(String[] args) {
		AddCourse course = new AddCourse();
		course.uploadfiles();

	}

}
