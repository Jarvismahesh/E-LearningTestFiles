package com.lms.selenium;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AdminAccess {
	WebDriver driver;
	
	@Test
	public void userDetail()
	{
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/AdminHome");
		driver.findElement(By.tagName("nav")).click();
		
		driver.findElement(By.id("useroption")).click();
	}
	
	@Test
	public void editDetail()
	{
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/AdminHome");
		driver.findElement(By.tagName("nav")).click();
		
		driver.findElement(By.id("useroption")).click();
		
		driver.findElement(By.id("edit")).click();
		
		driver.findElement(By.id("form")).click();
		driver.findElement(By.id("uid")).click();
		driver.findElement(By.id("uid")).sendKeys("3");
		
		driver.findElement(By.id("ufname")).click();
		driver.findElement(By.id("ufname")).sendKeys("mahesh");
		
		driver.findElement(By.id("ulname")).click();
		driver.findElement(By.id("ulname")).sendKeys("kumar");
		
		driver.findElement(By.id("umail")).click();
		driver.findElement(By.id("umail")).sendKeys("mahesh@gmail.com");
		
		driver.findElement(By.id("pwd")).click();
		driver.findElement(By.id("pwd")).sendKeys("maheshkumar123");
		
	     driver.findElement(By.id("update")).click();
	}
	
	@Test
	public void deleteDetail()
	{
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/AdminHome");
		driver.findElement(By.tagName("nav")).click();
		
		driver.findElement(By.id("useroption")).click();
		
		driver.findElement(By.id("delete")).click();
		
		driver.findElement(By.id("form")).click();
		driver.findElement(By.id("uid")).click();
		driver.findElement(By.id("uid")).sendKeys("3");
		
		driver.findElement(By.id("delete")).click();
		
	}
		
	
	
	public static void main(String[] args) {
		AdminAccess admin = new AdminAccess();
		admin.userDetail();
		admin.editDetail();
		admin.deleteDetail();
		

	}

}
