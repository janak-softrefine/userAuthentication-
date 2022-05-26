import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm!: FormGroup;

  constructor(private formbulider: FormBuilder,private authService: AuthService, private tokenStorage:TokenStorageService,private router:Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.signupForm = this.formbulider.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });

  
  }
 
  onSignup(): any {
    this.authService.signUp(this.signupForm.value).subscribe(
      (data) => {
       if(this.signupForm.valid){
        if (data.status == 'success') {
          this.tokenStorage.saveToken(data?.token);
          this.tokenStorage.saveRoles('admin');
          this.router.navigateByUrl('/admin'); 
          this.showSuccess();
        }
      }
        
      },
      (err) => {
        this.showError();
      }
    );
  }

  showSuccess() {
    this.toastr.success('Welcome to Dashboard', 'Success');
  }

  showError() {
    this.toastr.error('Something went wrong', 'Error');
  }

  // 
  get signupFormControl(): any {
    return this.signupForm.controls;
  }

  
}
