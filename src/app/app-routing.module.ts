import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent, 
  },
  { 
    path: 'login', component: LoginComponent, 
  },
  { 
    path: 'signup', component: SignupComponent, 
  },
  
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: '**', component: NotFoundComponent, 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
