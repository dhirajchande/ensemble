import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patientList:any;
  patientIndex:any;
  patient:any;

  constructor(private ps: PatientsService, private router:ActivatedRoute) {

    // Load index from URL and save to patientIndex variable
    this.router.params.subscribe(params=>{
      this.patientIndex=params['index'];

      // If Index is available, then load the patient object from database via service
      if (this.patientIndex) {
        this.ps.loadById(this.patientIndex);
      }

    });

    

  }
  ngOnInit(): void {
    this.ps.load().subscribe(data=>{
      this.patientList=data;
    })
  }



}
