import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  formData: Event = {
    idEvent: 0,
    dateDebut: new Date(), // Or set it to null if you want
    dateFin: new Date(),
    lieuEvent: '',
  };

  getEventId: number = 0;
  retrievedEvent: Event | null = null;

  deleteEventId: number = 0;

  constructor(private adminService: AdminService) {}

  addEvent(eventData: Event) {
    this.adminService.addEvent(eventData).subscribe(
      (addedEvent: Event) => {
        console.log('Event added:', addedEvent);
      },
      (error) => {
        console.error('Error adding event:', error);
      }
    );
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

  updateEvent() {
    this.adminService.updateEvent(this.formData).subscribe(
      (updatedEvent: Event) => {
        console.log('Event updated:', updatedEvent);
      },
      (error) => {
        console.error('Error updating Event:', error);
      }
    );
  }

  deleteEvent() {
    this.adminService.deleteEvent(this.deleteEventId).subscribe(
      () => {
        console.log('Event deleted successfully.');
      },
      (error) => {
        console.error('Error deleting event:', error);
      }
    );
  }
}