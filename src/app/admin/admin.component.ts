import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',

styleUrls: [
    
  './admin.component.css',

]
})
export class AdminComponent {

  constructor(private adminService: AdminService, private router: Router) {}


  displayUserInfo(userId: number): void {
    this.adminService.displayUser(userId).subscribe(
      (response) => {
        console.log('User information:', response);
      },
      (error) => {
        console.error('Error retrieving user information:', error);
      }
    );
  }
  selectedModel: string = 'event';
  eventName: string = '';
  className: string = '';
  subjectName: string = '';
  userName: string = '';

  onModelChange() {
    // Reset fields when the model is changed
    this.eventName = '';
    this.className = '';
    this.subjectName = '';
    this.userName = '';
  }

  performAction() {
    // Choose the route based on the selected model
    switch (this.selectedModel) {
      case 'event':
        this.router.navigate(['/events']);
        break;
      case 'class':
        this.router.navigate(['/classes']);
        break;
      case 'subject':
        this.router.navigate(['/subject']);
        break;
      case 'user':
        this.router.navigate(['/users']);
        break;
      default:
        console.error('Invalid model selected');
        break;
    }
  }
  
}  