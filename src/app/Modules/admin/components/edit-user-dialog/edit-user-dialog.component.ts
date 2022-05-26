import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Data } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    private formbulider: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.editForm = this.formbulider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      id: [''],
      password: [''],
    });

    if (this.editData) {
      this.editForm.controls['name'].setValue(this.editData.name);
      this.editForm.controls['email'].setValue(this.editData.email);
      this.editForm.controls['id'].setValue(this.editData.id);
      this.editForm.controls['password'].setValue(this.editData.password);
    }
  }

  updateUserDetails() {
    this.authService.updateUser(this.editForm.value).subscribe((res) => {
      this.showSnackbarTopPosition();
      this.editForm.reset();
      this.dialogRef.close('update');
    });
  }

  showSnackbarTopPosition() {
    this.snackBar.open('User updated SuccessFully!!', 'Done', {
      duration: 5000,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
