import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { PatientsComponent } from './patients/patients.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"patients", component:PatientsComponent},
  {path:"patients/:index", component:PatientsComponent},
  {path:"students/", component:StudentsComponent},
  {path:"students/:number", component:StudentsComponent},
  {path:"courses", component:CoursesComponent},
  {path:"course/:id", component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
