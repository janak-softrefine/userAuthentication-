import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  constructor(private formbulider: FormBuilder,private router:Router,private authService :AuthService, private dialogRef: MatDialogRef<AddUserDialogComponent>,private toastr: ToastrService) { }
  hide = true;
  addUserForm!: FormGroup;
  ngOnInit(): void {
    this.addUserForm = this.formbulider.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }
  onAddUser(){
    this.authService.adduser(this.addUserForm.value).subscribe(
      (data) => {
        if(this.addUserForm.valid){
        if (data.status == 'success') {
          this.showSuccess();
          this.addUserForm.reset();
          this.dialogRef.close('add');
        }
      }
      },
      (err) => {
       this.showError();
      }
    );
  }
  showSuccess() {
    this.toastr.success('User added Successfully', 'Success');
  }
  showError() {
    this.toastr.error('Something went wrong', 'Error');
  }

  get addUserFormControl(): any {
    return this.addUserForm.controls;
  }
}
