import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  studentRollNo:any;


  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params=>{
      this.studentRollNo=params['number']
    })
  }

}
