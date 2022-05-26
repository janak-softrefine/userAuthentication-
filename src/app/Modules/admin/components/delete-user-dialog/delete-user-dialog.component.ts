import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: number,
    private authService: AuthService,private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.authService.deleteUser(this.ID).subscribe((res) => {
      this.dialogRef.close('delete');
      this.showSnackbarTopPosition()
    });
  }
 
  showSnackbarTopPosition() {
    this.snackBar.open('User Deleted SuccessFully!!', 'Done', {
      duration: 5000,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
