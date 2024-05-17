import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Event } from '../models/Event';
import { SchoolClass } from '../models/SchoolClass';
import { Subject } from '../models/Subject';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-coursesaffichage',
  templateUrl: './coursesaffichage.component.html',
  styleUrls: ['./coursesaffichage.component.css']
})
export class CoursesaffichageComponent {
  getEventForm: FormGroup;
  getClassForm: FormGroup;
  getSubjectForm: FormGroup;

  getEventId: number = 0;
  getClassId: number = 0;
  idSubject: number = 1; // ID du sujet à récupérer
  retrievedEvent: Event | null = null;
  retrievedClass$: SchoolClass | null = null; // Change the type to SchoolClass
  subjectDetails: any; // You should create a model based on the structure of the response

  selectedAction: string = 'getEvent'; // Default action
  result: any; // Variable to store the result

  retrievedClass: any = null;
  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.getEventForm = this.fb.group({
      // Define form controls for Get Event action
    });

    this.getClassForm = this.fb.group({
      // Define form controls for Get Class action
    });

    this.getSubjectForm = this.fb.group({
      // Define form controls for Get Subject action
    });
  }

/*   ngOnInit() {
    this.getSubjectDetails();
  } */

  getEvent() {
    this.adminService.affichEvent(this.getEventId).subscribe(
      (event: Event) => {
        this.retrievedEvent = event;
        console.log('Event retrieved:', event);
      },
      (error) => {
        console.error('Error fetching event:', error);
      }
    );
  }

  getClass() {
    this.adminService.affichClass(this.getClassId).subscribe(
      (schoolClass: SchoolClass) => {
        this.retrievedClass = schoolClass;
        console.log('Class retrieved:', schoolClass);
      },
      (error) => {
        console.error('Error fetching class:', error);
      }
    );
  }

/*   getSubjectDetails() {
    this.adminService.getSubjectDetails(this.idSubject).subscribe(
      (data) => {
        this.subjectDetails = data;
        console.log('Subject details:', this.subjectDetails);
      },
      (error) => {
        console.error('Error fetching subject details:', error);
      }
    );
  } 

  performAction() {
    switch (this.selectedAction) {
      case 'getEvent':
        this.getEvent();
        break;

      case 'getClass':
        this.getClass();
        break;

      case 'getSubject':
        this.getSubjectDetails();
        break;

      default:
        console.error('Invalid action:', this.selectedAction);
    }
  }*/

}


