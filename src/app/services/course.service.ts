import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute ) { }
  ngOnInit(): void {

    
    
  }

  allCourses(){
    return this.http.get("http://localhost:3000/api/courses")
  }
}
