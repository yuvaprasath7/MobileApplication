import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OTPPagePageRoutingModule } from './otppage-routing.module';

import { OTPPagePage } from './otppage.page';
import { NgOtpInputModule } from  'ng-otp-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OTPPagePageRoutingModule,NgOtpInputModule
  ],
  declarations: [OTPPagePage]
})
export class OTPPagePageModule {}
