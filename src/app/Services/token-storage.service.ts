import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    //localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }
    return;
  }

  public saveRoles(token: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(ROLES_KEY, token);
  }

  public getRoles(): any {
    const role = localStorage.getItem(ROLES_KEY);
    if (role) {
      return role;
    }
    return;
  }
}
