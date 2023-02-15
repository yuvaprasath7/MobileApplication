import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  UserForm: FormGroup | any
  profilePicture: any
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.FormValidation();
  }

  FormValidation() {
    this.UserForm = new FormGroup({
      UserName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]),
      MobileNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      WhatshapNumber: new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
      Address: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required]),
      PinCode: new FormControl('',[Validators.required]),
    })
  }
  Onsubmit() {
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
