import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from '../models/apod.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NasaService {
  private apiUrl = `${environment.nasaApiUrl}?api_key=${environment.nasaApiKey}`;

  constructor(private http: HttpClient) {}

  getPhotoOfTheDay(): Observable<ApodResponse> {
    return this.http.get<ApodResponse>(this.apiUrl);
  }
}
