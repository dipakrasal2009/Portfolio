import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  // constructor(private router : Router) { }
  constructor(private http : HttpClient) { }

  navigateTo(url: string): void {
    window.location.href = (url);
    //new window.location.href = (url);
  }

  navigatetoemail(receiver : string,subject:string,message:string){
    const url = `http://127.0.0.1:5000/mail/${encodeURIComponent(receiver)}/${encodeURIComponent(subject)}/${encodeURIComponent(message)}`;
    window.location.href = url;
  }

}
