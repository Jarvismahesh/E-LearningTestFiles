import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResigterComponent } from "./resigter.component";
import { TestBed } from '@angular/core/testing';


describe('ResigterComponent ', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResigterComponent
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
    const fixture = TestBed.createComponent(ResigterComponent);
    const app = fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })
  it('Register Component Input GUI count', () => {
    const fixture = TestBed.createComponent(ResigterComponent);
    const app = fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    expect(inputElement.length).toEqual(4);
  })

  it('It should be created', () => {
    const fixture = TestBed.createComponent(ResigterComponent);
    const App = fixture.componentInstance;
    expect(App.usr).toBeTruthy();
  })
  it('Test Form Valid', () => {
    const fixture = TestBed.createComponent(ResigterComponent);
    const App = fixture.componentInstance;

    App.registerform.controls?.['userMailId'].setValue("mahesh@gmail.com");
    App.registerform.controls?.['userFirstName'].setValue("mahesh");
    App.registerform.controls?.['userLastName'].setValue('kumar');
    App.registerform.controls?.['userPassword'].setValue('mahesh123');
    expect(App.registerDetails).toBeTruthy();

  });

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(ResigterComponent);
    const user = fixture.componentInstance;
    const FormGroup = user.registerform;
    const FormValues = {
      userMailId: '',
      userFirstName: '',
      userLastName: '',
      userPassword: '',
    }
  });
});