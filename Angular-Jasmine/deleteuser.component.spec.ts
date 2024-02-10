import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';
import { DeleteCourseComponent } from "../delete-course/delete-course.component";
import { DeleteuserComponent } from "./deleteuser.component";


describe('DeleteUser Component ', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DeleteuserComponent
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
  it('Register Component Test', () => {
    const fixture = TestBed.createComponent(DeleteuserComponent);
    const app = fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })
  it('DeleteUser Component Input GUI count', () => {
    const fixture = TestBed.createComponent(DeleteuserComponent);
    const app = fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    expect(inputElement.length).toEqual(1);
  })


  it('It should be created', () => {
    const fixture = TestBed.createComponent(DeleteuserComponent);
    const App = fixture.componentInstance;
    expect(App.usr).toBeTruthy();
  })
  it('Test Form Valid', () => {
    const fixture = TestBed.createComponent(DeleteuserComponent);
    const App = fixture.componentInstance;

    App.deleteuserForm.controls?.['userId'].setValue("1");

    expect(App.deleteuserForm).toBeTruthy();
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(DeleteuserComponent);
    const course = fixture.componentInstance;
    const FormGroup = course.deleteuserForm;
    const FormValues = {
      UserId: '',

    }
  })

  it('Testing Delete form valid', () => {
    const fixture = TestBed.createComponent(DeleteCourseComponent);
    const delcourse = fixture.componentInstance;

    expect(delcourse.DeleteuserDetails).toBeTruthy();
  });


});
