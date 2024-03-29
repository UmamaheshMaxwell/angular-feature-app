import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url:string = "http://localhost:3000/people"

  constructor(private http: HttpClient) { }

  /*
      ? C - CREATE
      ? R - READ
      ? U - UPDATE
      ? D - DELETE
  */

  // READ
  getPeople(){
    return this.http.get(this.url)
  }

  //CREATE
  addPeople(data: any){
    var headers = {'content-type' : 'application/json'}
    var body = JSON.stringify(data)
    return this.http.post(this.url, body, {headers: headers})
  }

  // UPDATE
  editPeople(data: any){
    var headers = {'content-type' : 'application/json'}
    var body = JSON.stringify(data)
    console.log(`${this.url}/${6}`)
    return this.http.put(`${this.url}/${6}`, body, {headers: headers})
  }
  
  //DELETE
  deletePeople(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  getStudents(){
    return this.http.get("http://localhost:1234/api/student")
  }
}
