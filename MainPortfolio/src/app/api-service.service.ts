import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://127.0.0.1:5000/google'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // getData(query: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?quzzxxery=${query}`);
  // }


  getData(query : string):any{
    //const url = `http://15.207.116.10:85/mail/${encodeURIComponent(receiver)}/${encodeURIComponent(subject)}/${encodeURIComponent(message)}`;
    return this.http.get<any>( `http://127.0.0.1:5000/google/${query}`)
    //window.location.href = url;
  }

  GetGeoCordinateData():any{
    return this.http.get<any>(`http://127.0.0.1:5000/location`);
  }

  sendmail(reciver : any,subject : any,message:any):any{
    return this.http.get<any>(`http://127.0.0.1:5000/mail/${reciver}/${subject}/${message}`);
  }
}
