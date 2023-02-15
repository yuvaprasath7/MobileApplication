import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  otpForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.otpValidation();
  }
  otpValidation(){
    this.otpForm = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
    });
  }

  generateOTP(){

  }
}
