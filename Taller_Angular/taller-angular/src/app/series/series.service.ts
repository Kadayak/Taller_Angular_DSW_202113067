import { Injectable } from '@angular/core';
import { Serie } from './serie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class SeriesService {

  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
