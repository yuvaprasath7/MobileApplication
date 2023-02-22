import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/_helper/service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  UserForm: FormGroup | any
  user:any
  date:any
  profilePicture: any
  constructor(public actionSheetController: ActionSheetController, private postuser: ServiceService, public toastController: ToastController,private router: Router) { }

  ngOnInit() {
    this.FormValidation();
  }

  FormValidation() {
    this.UserForm = new FormGroup({
      UserName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]),
      MobileNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      WhatshapNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      DateOfBirth: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      PinCode: new FormControl('', [Validators.required]),
    })
  }
  async Onsubmit() {
    this.postuser.postInput(this.UserForm.value).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'successful have been saved.',
          duration: 1000
        });
        toast.present();
      }
    })
    console.log(this.UserForm.value);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Profile Picture Upload',
      buttons: [{
        // }, {
        //   text: 'Take Photo',
        //   icon: 'camera',
        //   handler: () => {
        //     this.takepicture();
        //   },
      }, {
        text: 'Select from gallery',
        icon: 'images',
        handler: () => {
          this.pickImage();
        },
      }, {
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          this.profilePicture = null;
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
  async pickImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    this.profilePicture = image.dataUrl;
  }
}
