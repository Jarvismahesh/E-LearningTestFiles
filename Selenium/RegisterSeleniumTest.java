package com.lms.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterSeleniumTest {

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
	void register() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
		driver.findElement(By.tagName("nav")).click();
//		driver.findElement(By.id("login")).click();

		driver.findElement(By.tagName("p")).click();
		driver.findElement(By.id("register")).click();

		driver.findElement(By.id("registerform")).click();
		driver.findElement(By.id("mail")).click();
		driver.findElement(By.id("mail")).sendKeys("naveen@gmail.com");
		driver.findElement(By.id("fname")).click();
		driver.findElement(By.id("fname")).sendKeys("naveen");
		driver.findElement(By.id("lname")).click();
		driver.findElement(By.id("lname")).sendKeys("kumar");
		driver.findElement(By.id("password")).click();
		driver.findElement(By.id("password")).sendKeys("naveen123");

		driver.findElement(By.id("submit")).click();

	}

	public static void main(String[] args) {

		RegisterSeleniumTest test = new RegisterSeleniumTest();
		test.register();
		test.login();

	}

}
