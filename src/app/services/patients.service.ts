import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }


  load(){
   return this.http.get("http://localhost:3000/api/patient");
  }

  loadById(index:any){
   return this.http.get("http://localhost:3000/api/patient/"+ index);
     
  }
}
