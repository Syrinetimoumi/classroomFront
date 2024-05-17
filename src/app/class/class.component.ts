import { Component } from '@angular/core';
import { SchoolClass } from '../models/SchoolClass';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  formData: SchoolClass = {
    idClass: 0,
    nbMax: 0,
    level: '',
  };

  getClassId: number = 0;
  retrievedClass$: Observable<SchoolClass> | null = null;

  deleteClassId: number = 0;

  constructor(private adminService: AdminService) {}

  addClass(classData: SchoolClass) {
    this.adminService.addClass(classData).subscribe(
      (addedClass: SchoolClass) => {
        console.log('Class added:', addedClass);
      },
      (error) => {
        console.error('Error adding class:', error);
      }
    );
  }

  getClass() {
    this.adminService.affichClass(this.getClassId).subscribe(
      (schoolClass: SchoolClass) => {
        this.retrievedClass$ = of(schoolClass);
        console.log('Class retrieved:', schoolClass);
      },
      (error) => {
        console.error('Error fetching class:', error);
      }
    );
  }

  deleteClass() {
    this.adminService.deleteClass(this.deleteClassId).subscribe(
      () => {
        console.log('Class deleted successfully.');
      },
      (error) => {
        console.error('Error deleting class:', error);
      }
    );
  }
  updateClass() {
    this.adminService.updateClass(this.formData).subscribe(
      (updatedClass: SchoolClass) => {
        console.log('Class updated:', updatedClass);
      },
      (error) => {
        console.error('Error updating class:', error);
      }
    );
  }
}