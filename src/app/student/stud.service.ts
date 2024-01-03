import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudService {


  private url = 'http://localhost:8080/createStudent';
  constructor(private http: HttpClient) { }
    registerStud(student: any) {
    return this.http.post(this.url,student)
    
  }
}
