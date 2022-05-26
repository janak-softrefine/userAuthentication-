import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {
  currentUserRole!: string;
  constructor(private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.currentUserRole = this.tokenStorage.getRoles();
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/login');
  }

}
