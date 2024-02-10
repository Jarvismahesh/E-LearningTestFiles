import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from "../app-routing.module";
import { CourseComponent } from "./course.component";


describe('Course Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    CourseComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,

  ]
  }).compileComponents();
  });
  it('Course Component Test',() =>{
  const fixture = TestBed.createComponent(CourseComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('Admin Access GUI Options - Admin options',() =>{
  const fixture = TestBed.createComponent(CourseComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("a");
  expect(inputElement.length).toEqual(1);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent(CourseComponent);
  const App = fixture.componentInstance;
  });
  it('Testing Table', () => {
    const fixture = TestBed.createComponent(CourseComponent);
    const course = fixture.componentInstance;
    expect(course.GetAllDetails).toBeTruthy();
  });
});



