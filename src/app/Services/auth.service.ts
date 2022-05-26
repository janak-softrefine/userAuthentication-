import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../Services/token-storage.service';
 

const AUTH_API = 'http://192.168.1.33:8000/api/v1/user/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient,  private tokenStorage: TokenStorageService ) { }

  login(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'login',data);
  }

  isLoggedIn():any{
    return this.tokenStorage.getToken() !=null;
  }

  signUp(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'register',data);
  }

  getAllUser(): Observable<any> {
    return this.http.get(AUTH_API);
  }
  updateUser(data:any):Observable<any>{
    return this.http.put(AUTH_API + 'update',data);

  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(AUTH_API + 'delete/' + id);
  }
  adduser(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'add',data);
  }
}
