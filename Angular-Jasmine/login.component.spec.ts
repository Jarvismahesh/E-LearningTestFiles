import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestBed } from '@angular/core/testing';
import { LoginComponent } from "./login.component";




describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
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

  it('Login Component Test', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })
  it('Login Component Input GUI count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    expect(inputElement.length).toEqual(2);
  })

  it('It should be created', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const App = fixture.componentInstance;
    expect(App.usr).toBeTruthy();
  })
  it('Login Valid', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const App = fixture.componentInstance;

    App.loginform.controls?.['userMailId'].setValue("mahesh123@gmail.com");
    App.loginform.controls?.['userPassword'].setValue("mahesh123");

    expect(App.login).toBeTruthy();
  })

  it('Testing LoginForm initial values', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const user = fixture.componentInstance;
    const FormGroup = user.loginform;
    const FormValues = {
      userMailId: '',
      userPassword: '',
    }
  });

});
