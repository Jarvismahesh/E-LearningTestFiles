import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { UserAccessComponent } from "./user-access.component";
import { AppRoutingModule } from "../app-routing.module";


describe('UserAccess Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    UserAccessComponent
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
  it('App Component Test',() =>{
  const fixture = TestBed.createComponent(UserAccessComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('UserAccess GUI Options - Enroll',() =>{
  const fixture = TestBed.createComponent(UserAccessComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("a");
  expect(inputElement.length).toEqual(1);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent(UserAccessComponent);
  const App = fixture.componentInstance;
  })
});