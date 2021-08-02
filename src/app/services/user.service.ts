import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  getUsers(){
   return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getUserById(userId: any){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
   }

}
