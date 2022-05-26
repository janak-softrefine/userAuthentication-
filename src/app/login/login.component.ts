import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  formbuilder: any;

  userName!: string;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('admin');
   }
  }

  onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe((data) => {
      
      if (data.status == 'success') {
        this.tokenStorage.saveToken(data?.token);
        this.router.navigateByUrl('/admin'); 
      } 
    },
    (err) => {
      alert("Something went Wrong,Try Again");
    });
    
  
  }

  get loginFormControl(): any {
    return this.loginForm.controls;
  }
}
