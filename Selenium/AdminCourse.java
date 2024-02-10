package com.lms.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AdminCourse {
	WebDriver driver;

	@Test
	private void Course() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/AdminHome");
		driver.findElement(By.tagName("nav")).click();

		driver.findElement(By.id("file")).click();

	}

	public static void main(String[] args) {
		AdminAccess acces = new AdminAccess();

	}

}
