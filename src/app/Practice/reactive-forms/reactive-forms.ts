import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type formsDataType = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  conformPassword: string;
};

@Component({
  selector: 'app-reactive-forms',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  userForm: FormGroup;
  submitted = false;
  formData: formsDataType = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    conformPassword: '',
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      conformPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.formData.name = this.userForm.value.userNam;
    this.formData.email = this.userForm.value.email;
    this.formData.mobile = this.userForm.value.mobile;
    this.formData.password = this.userForm.value.password;
    this.formData.conformPassword = this.userForm.value.conformPassword;
    console.log(this.formData);
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
