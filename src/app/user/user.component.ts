import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { User } from '../models/User'; // Import the User model

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId: number = 0; // You need to set the user ID appropriately
  role: string = ''; // Replace 'student' with the desired role
  subjectId: number = 1; // Replace 1 with the desired subject ID
  classId: number = 1; // Replace 1 with the desired class ID
  users: User[] = [];
  noteValue: number=0;
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',

  };
  constructor(private userService: AdminService) {}

  getUsersByRole() {
    this.userService.getUsersByRole(this.role).subscribe(
      (users: User[]) => {
        console.log('Users by role:', users);
      },
      (error) => {
        console.error('Error fetching users by role:', error);
      }
    );
  }



  displayUser() {
    this.userService.displayUser(this.userId).subscribe(
      (userData: User) => {
        this.user = userData;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  affectUtilisateurClasse() {
    this.userService.affectUtilisateurClasse(this.userId, this.classId).subscribe(
      () => {
        console.log('User associated with class successfully.');
      },
      (error) => {
        console.error('Error associating user with class:', error);
      }
    );
  }

  affectUtilisateurSubject() {
    this.userService.affectUtilisateurSubject(this.userId, this.subjectId).subscribe(
      () => {
        console.log('User associated with subject successfully.');
      },
      (error) => {
        console.error('Error associating user with subject:', error);
      }
    );
  }
  getUsersByClassRole(role: string, classId: number): void {
    this.userService.getUsersByClassRole(role, classId)
      .subscribe(
        (users: User[]) => { 
          this.users = users;
        },
        (error) => {
          console.error('Error fetching users by role and class ID:', error);
        }
      );
  }
 
  addNote(): void {
    this.userService.addNoteWithParams(this.userId, this.subjectId, this.noteValue).subscribe(
      () => {
        // Handle success, maybe show a success message
      },
      (error) => {
        console.error('Error adding note:', error);
        // Handle error, maybe show an error message
      }
    );
  }
}
