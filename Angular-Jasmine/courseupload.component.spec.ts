import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from "../app-routing.module";
import { CourseuploadComponent } from "./courseupload.component";



describe('Course Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    CourseuploadComponent
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
  it('CourseUPload Component Test',() =>{
  const fixture = TestBed.createComponent(CourseuploadComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('Upload GUI Options - Admin options',() =>{
  const fixture = TestBed.createComponent(CourseuploadComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("button");
  expect(inputElement.length).toEqual(3);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent(CourseuploadComponent);
  const App = fixture.componentInstance;
  });
  it('Testing Upload file', () => {
    const fixture = TestBed.createComponent(CourseuploadComponent);
    const course = fixture.componentInstance;
    expect(course.onUpload).toBeTruthy();
  });
});



