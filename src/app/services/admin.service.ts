import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Event } from '../models/Event';
import { SchoolClass } from '../models/SchoolClass';
import { Subject } from '../models/Subject';
import { User } from '../models/User';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8087/api/v1/auth/adminpage';

  constructor(private http: HttpClient) {}
  addNoteWithParams(userId: number, subjectId: number, noteValue: number): Observable<void> {
    const url = `${this.baseUrl}/addNote/${userId}/${subjectId}/${noteValue}`;
    return this.http.post<void>(url, {});
  }

  listNotes(userId: number, subjectId: number): Observable<Note[]> {
    const url = `${this.baseUrl}/list/${userId}/${subjectId}`;
    return this.http.get<Note[]>(url);
  }
  getSubjectsByClassId(classId: number): Observable<Subject[]> {
    const url = `${this.baseUrl}/byClassSubject/${classId}`;
    return this.http.get<Subject[]>(url);
  }

  getUsersByClassId(classId: number): Observable<User[]> {
    const url = `${this.baseUrl}/byClass/${classId}`;
    return this.http.get<User[]>(url);
  }
  getUsersByClassRole(role: string, classId: number): Observable<User[]> {
    const url = `${this.baseUrl}/byClassRole?role=${role}&classId=${classId}`;
    return this.http.get<User[]>(url);
  }
 
  addClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.post<SchoolClass>(`${this.baseUrl}/addclass`, schoolClass);
  }

  getUsersByRole(role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/usersByRole/${role}`);
  }

  addAbsenceToUser(userId: number, subjectId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAbsence/${userId}`, { subjectId });
  }
  displayUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/displayUser/${userId}`);
  }
  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${this.baseUrl}/addsubject`, subject);
  }

  affichClass(idClass: number): Observable<SchoolClass> {
    return this.http.get<SchoolClass>(`${this.baseUrl}/affichClass/${idClass}`);
  }
  

  deleteClass(idClass: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteClass/${idClass}`);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/addevent`, event);
  }
  affichEvent(idEvent: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/affichEvent/${idEvent}`);
  }

  deleteEvent(idEvent: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEvent/${idEvent}`);
  }

  affectUtilisateurClasse(idUser: number, idClass: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterUtilisateurClasse/${idUser}/${idClass}`, {});
  }

  affectUtilisateurSubject(idUser: number, idSubject: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterUtilisateurSubject/${idUser}/${idSubject}`, {});
  }

  affectSubjectClass(idSubject: number, idClass: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterSubjectClass/${idSubject}/${idClass}`, {});
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/updateEvent`, event);
  }

  updateClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.put<SchoolClass>(`${this.baseUrl}/updateClass`, schoolClass);
  }

  updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`${this.baseUrl}/updateSubject`, subject);
  }
  getSubjectDetails(userId: string, subjectId: string): Observable<Subject | null> {
    // Remove any trailing slashes from this.baseUrl
    const url = `${this.baseUrl}/affichersubject/${userId}/${subjectId}/details`;
    console.log('Constructed URL:', url);
  
    return this.http.get<Subject>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Subject not found:', error);
          return of(null);
        } else {
          console.error('Error fetching subject details:', error);
          throw error;
        }
      })
    );
  }
}