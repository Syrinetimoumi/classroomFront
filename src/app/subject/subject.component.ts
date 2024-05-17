import { Component } from '@angular/core';
import { Subject } from '../models/Subject';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  subjectData: Subject = {
    idSubject: 0,
    title: '',

  };

  idClass: number = 0; // Assuming you have a way to get the class ID

  constructor(private adminService: AdminService) {}

  addSubject() {
    this.adminService.addSubject(this.subjectData).subscribe(
      (addedSubject: Subject) => {
        console.log('Subject added:', addedSubject);
      },
      (error) => {
        console.error('Error adding subject:', error);
      }
    );
  }

  affectSubjectClass() {
    this.adminService.affectSubjectClass(this.subjectData.idSubject, this.idClass).subscribe(
      () => {
        console.log('Subject associated with class successfully.');
      },
      (error) => {
        console.error('Error associating subject with class:', error);
      }
    );
  }
  updateSubject() {
    this.adminService.updateSubject(this.subjectData).subscribe(
      (updatedSubject: Subject) => {
        console.log('Subject updated:', updatedSubject);
      },
      (error) => {
        console.error('Error updating subject:', error);
      }
    );
  }
}

