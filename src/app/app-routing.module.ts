import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { EventComponent } from './event/event.component';
import { ClassComponent } from './class/class.component';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { UseraffichageComponent } from './useraffichage/useraffichage.component';
import { CoursesaffichageComponent } from './coursesaffichage/coursesaffichage.component';
import { SubjectaffichageComponent } from './subjectaffichage/subjectaffichage.component';
import { NotesaffichageComponent } from './notesaffichage/notesaffichage.component';


const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'adminBoard',component:AdminComponent},
  {path:'events',component:EventComponent},
  {path:'classes',component:ClassComponent},
  {path:'users',component:UserComponent},
  {path:'subject',component:SubjectComponent},
  {path:'',component:SignComponent},
  {path:'useraffich',component:UseraffichageComponent},
  {path:'courseaffich',component:CoursesaffichageComponent},
  {path:'subjectaffich',component:SubjectaffichageComponent},
  {path:'notesaffich',component:NotesaffichageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
