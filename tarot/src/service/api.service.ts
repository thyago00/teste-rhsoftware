import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json"
  constructor(private http: HttpClient) { }
  
  obterCartas(): Observable<any[]> {  
    return this.http.get<any[]>(this.url);  
  }  

}