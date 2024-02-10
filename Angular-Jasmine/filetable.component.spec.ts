import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from "../app-routing.module";

import { FiletableComponent } from "./filetable.component";



describe('Course Component ',()=>{
  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [
    FiletableComponent
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
  it('FileTable Component Test',() =>{
  const fixture = TestBed.createComponent(FiletableComponent);
  const app = fixture.nativeElement as HTMLElement;
  expect(app).toBeTruthy();
  })
  it('Enroll GUI Options - User options',() =>{
  const fixture = TestBed.createComponent(FiletableComponent);
  const app = fixture.nativeElement as HTMLElement;
  const inputElement = app.querySelectorAll("table");
  expect(inputElement.length).toEqual(1);
  })

  it('It should be created',() =>{
  const fixture = TestBed.createComponent(FiletableComponent);
  const App = fixture.componentInstance;
  });
  it('Testing Table', () => {
    const fixture = TestBed.createComponent(FiletableComponent);
    const file = fixture.componentInstance;
    expect(file.GetAllDetails).toBeTruthy();
  });
});