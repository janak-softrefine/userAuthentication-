import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  currentUserRole!: string;
  userList!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'role','Actions'];

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
   
  ) {}

  ngOnInit(): void {
    this.currentUserRole = this.tokenStorage.getRoles();
    this.getAllUser();
  }

  

  getAllUser(): any {
    this.authService.getAllUser().subscribe((data) => {
      this.userList = new MatTableDataSource(data.data);
      this.userList.paginator = this.paginator;
      this.userList.sort = this.sort;
      console.log(this.userList);
    });
  }

  openDialogtoEditUser(element:any):any{
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data=element;
      
        this.dialog.open(EditUserDialogComponent, dialogConfig).afterClosed().subscribe(val=>{
          if(val==='update'){
            this.getAllUser();
          }
        });
  }

  openDialogtoAddUser() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    this.dialog.open(AddUserDialogComponent, dialogConfig).afterClosed().subscribe(val=>{
      if(val==='add'){
        this.getAllUser();
      }
    });;
}

  deleteUser(id:number):any{
    if(confirm("Are you sure to delete ")) {
    this.authService.deleteUser(id).subscribe((res)=>{
      alert('User Deleted Successfully')
      this.getAllUser();
    })
  }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userList.filter = filterValue.trim().toLowerCase();
  }

  confirmDialog(id:number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=id;
    dialogConfig.maxWidth="400px";

    const dialogRef = this.dialog.open(DeleteUserDialogComponent, 
    dialogConfig
    );
    dialogRef.afterClosed().subscribe(val=>{
      if(val==='delete'){
        this.getAllUser();
      }
      })
    
  }
 
}
