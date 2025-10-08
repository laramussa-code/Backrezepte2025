import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rezept {
  id: number;
  titel: string;
  beschreibung: string;
  bild: string;
  zutaten?: string;
  zubereitung?: string;
}
@Injectable({

  providedIn: 'root'
})
export class RezepteService {
  private apiUrl = 'http://localhost:3000/rezepte';

  constructor(private http: HttpClient) {}

  getRezepte(): Observable<Rezept[]> {
    return this.http.get<Rezept[]>(this.apiUrl);
  }
  
  getRezeptById(id: number): Observable<Rezept> {
    return this.http.get<Rezept>(`${this.apiUrl}/${id}`);

  }
  createrezept(rezept: Rezept): Observable<Rezept> {
    return this.http.post<Rezept>(this.apiUrl, rezept);
  }
deleteRezept(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
updateRezept(id: number, rezept: Rezept): Observable<Rezept> {
  return this.http.put<Rezept>(`${this.apiUrl}/${id}`,rezept);
}

}
