import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import {DashboardComponent } from './components/dashboard/dashboard.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';



@NgModule({
  declarations: [
  
    DashboardComponent,
    EditUserDialogComponent,
    AddUserDialogComponent,
    NavbarMainComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    DeleteUserDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [EditUserDialogComponent,SignupComponent]
})
export class AdminModule { }
