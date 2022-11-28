import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses:any;


  constructor(private cs:CourseService){

    this.cs.allCourses().subscribe(data=>{
      this.courses=data;
    })
  }


  
  

}
