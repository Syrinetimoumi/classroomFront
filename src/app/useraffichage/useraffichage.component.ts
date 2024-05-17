import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Event } from '../models/Event';
import { SchoolClass } from '../models/SchoolClass';
import { Subject } from '../models/Subject';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-useraffichage',
  templateUrl: './useraffichage.component.html',
  styleUrls: ['./useraffichage.component.css']
})
export class UseraffichageComponent  {
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

 
}