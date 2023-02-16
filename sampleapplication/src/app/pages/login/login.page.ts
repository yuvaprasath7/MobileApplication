import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  otpForm: any | FormGroup;
  selected = 'English';
  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Hindi', 'Tamil', 'Bangla']);
  }

  ngOnInit() {
    this.otpValidation();
  }

  changeLang() {
    this.translate.use(this.selected);
  }
  otpValidation() {
    this.otpForm = new FormGroup({
      MobileNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    });
  }

  generateOTP() {

  }
}
