import { Component } from '@angular/core';
import { Note } from '../models/Note';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-notesaffichage',
  templateUrl: './notesaffichage.component.html',
  styleUrls: ['./notesaffichage.component.css']
})
export class NotesaffichageComponent {
  userId: number = 0; // Initialize with appropriate values
  subjectId: number = 0; // Initialize with appropriate values
  notes: Note[] = [];

  constructor(private noteService: AdminService) {}

  listNotes(): void {
    console.log('Fetching notes for userId:', this.userId, 'subjectId:', this.subjectId);

    this.noteService.listNotes(this.userId, this.subjectId).subscribe(
      (notes: Note[]) => {
        this.notes = notes;
        console.log('Notes fetched successfully:', this.notes);
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
}
