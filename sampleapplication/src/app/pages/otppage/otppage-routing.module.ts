import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTPPagePage } from './otppage.page';

const routes: Routes = [
  {
    path: '',
    component: OTPPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTPPagePageRoutingModule {}
