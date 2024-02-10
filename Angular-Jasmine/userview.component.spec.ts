import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { UserviewComponent } from "./userview.component";
import { AppRoutingModule } from "../app-routing.module";


describe('Userview Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
 UserviewComponent
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
  it('UserView Component Test',() =>{
  const fixture = TestBed.createComponent(UserviewComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('Userview Component Table GUI count',() =>{
  const fixture = TestBed.createComponent(UserviewComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("table");
  expect(inputElement.length).toEqual(1);
  })


  it('It should be created',() =>{
  const fixture = TestBed.createComponent(UserviewComponent);
  const App = fixture.componentInstance;
  expect(App.file).toBeTruthy();
  })
  it('Testing listservice valid', () => {
    const fixture = TestBed.createComponent(UserviewComponent);
    const usertable = fixture.componentInstance;
    expect(usertable.GetAllDetails).toBeTruthy();
  });
});

  

