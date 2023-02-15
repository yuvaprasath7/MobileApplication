import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  otpForm !: FormGroup;
  selected = 'English';
  constructor(private formBuilder: FormBuilder,public translate: TranslateService) {
    translate.addLangs(['English', 'Hindi', 'Tamil', 'Bangla']);
  }

  ngOnInit() {
    this.otpValidation();
  }

  changeLang() {
    this.translate.use(this.selected);
  }
  otpValidation(){
    this.otpForm = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
    });
  }

  generateOTP(){

  }
}
