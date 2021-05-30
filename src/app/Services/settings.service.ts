import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { settings } from '../settings';
import { globlas } from './Globals';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient, public glob: globlas) { }

  getSettings():Observable<settings>{
    return this.http.get<settings>(this.glob.baseUrl+"Settings",{withCredentials:false})
  }
}
