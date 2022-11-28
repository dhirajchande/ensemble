import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get("http://localhost:3000/api/students");
  }

  listById(){
    return this.http.get("http://localhost:3000/api/students/"+number);

  }
}
