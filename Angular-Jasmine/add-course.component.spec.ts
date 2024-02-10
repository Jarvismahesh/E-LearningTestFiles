import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestBed } from '@angular/core/testing';
import { AddCourseComponent } from "./add-course.component";



describe('AddCourseComponent',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    AddCourseComponent
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
  
  it('AddCourse Component Test',() =>{
  const fixture = TestBed.createComponent( AddCourseComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('AddCourse Component Input GUI count',() =>{
  const fixture = TestBed.createComponent( AddCourseComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("input");
  expect(inputElement.length).toEqual(2);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent( AddCourseComponent);
  const App = fixture.componentInstance;
  expect(App.course).toBeTruthy();
  })
  it('Course Detail Form Valid',() =>{
  const fixture = TestBed.createComponent(AddCourseComponent);
  const App = fixture.componentInstance;
 
  App.courseForm.controls?.['courseName'].setValue("Cloud");
  App.courseForm.controls?.['courseCategory'].setValue("Technical");
 
  expect(App.addCourseDetails).toBeTruthy();

  });
  it('Testing Form initial values', () => {
  const fixture = TestBed.createComponent(AddCourseComponent);
  const course = fixture.componentInstance;
  const FormGroup = course.courseForm; 
  const FormValues = {
    courseName: '',
    courseCategory: '',
  }
});
});
