import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from "../app-routing.module";
import { AdminAccessComponent } from "./admin-access.component";


describe('AdminAccess Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    AdminAccessComponent
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
  it('Admin Access Component Test',() =>{
  const fixture = TestBed.createComponent(AdminAccessComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('Admin Access GUI Options - Admin options',() =>{
  const fixture = TestBed.createComponent(AdminAccessComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("a");
  expect(inputElement.length).toEqual(4);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent(AdminAccessComponent);
  const App = fixture.componentInstance;
  })
});