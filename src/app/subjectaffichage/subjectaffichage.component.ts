import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subject } from '../models/Subject';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subjectaffichage',
  templateUrl: './subjectaffichage.component.html',
  styleUrls: ['./subjectaffichage.component.css']
})
export class SubjectaffichageComponent implements OnInit {
  getSubjectForm: FormGroup;

  userId: string = '';
  subjectId: string = '';
  classId: number = 1; // Replace with the desired class ID
  subjects: Subject[] = [];
  subjectDetails: any; // Modify based on the actual structure

  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.getSubjectForm = this.fb.group({
      userId: [''], // Define form controls if needed
      subjectId: [''],
    });
  }

  ngOnInit(): void {
    this.getSubjectsByClassId();
  }

  getSubjectsByClassId(): void {
    this.adminService.getSubjectsByClassId(this.classId).subscribe(
      (subjects: Subject[]) => {
        this.subjects = subjects;
      },
      (error) => {
        console.error('Error fetching subjects by class ID:', error);
      }
    );
  }
  showTable: boolean = false;

  getSubjectDetails() {
    const { userId, subjectId } = this.getSubjectForm.value;

    this.adminService.getSubjectDetails(userId, subjectId).subscribe(
      (data) => {
        if (data !== null) {
          this.subjectDetails = data;
          console.log('Subject details:', this.subjectDetails);
        } else {
          console.warn('Subject not found');
          // Handle the case where the subject is not found
        }
      },
      (error) => {
        console.error('Error fetching subject details:', error);
      }
    );
  }
  toggleTableVisibility(): void {
    this.showTable = !this.showTable;
  }
}
