package com.lms.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UserEnroll {

	WebDriver driver;

	@Test
	public void login() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
		driver.findElement(By.tagName("nav")).click();
		driver.findElement(By.id("login")).click();

		driver.findElement(By.id("mail")).click();
		driver.findElement(By.id("mail")).sendKeys("mahesh@gmail.com");

		driver.findElement(By.id("password")).click();
		driver.findElement(By.id("password")).sendKeys("mahesh123");

		driver.findElement(By.cssSelector(".btn-dark")).click();

	}

	@Test
	public void enroll() {

		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/UserHome");
		driver.findElement(By.tagName("nav")).click();
		driver.findElement(By.id("option")).click();
		driver.findElement(By.id("enroll")).click();

		driver.findElement(By.id("tblcourse")).click();
		driver.findElement(By.id("tbl")).click();
	}

	public static void main(String[] args) {

		UserEnroll enroll = new UserEnroll();
		enroll.enroll();

	}

}
