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
    const url = `http://15.207.116.10:85/mail/${encodeURIComponent(receiver)}/${encodeURIComponent(subject)}/${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  navigatetowhatsapp(mobileNumber : string,message:string){
    const url = `http://127.0.0.1:5000/whatsapp/${encodeURIComponent(mobileNumber)}/${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  contact(name : string,email:string,message:string){
    const url = `http://127.0.0.1:5000/contact/${encodeURIComponent(name)}/${encodeURIComponent(email)}/${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  LaunchInstance(OSName : string,region: string,instanceType: string,imageId:string){
    const url = `http://15.207.116.10:83/LaunchInstance/${encodeURIComponent(OSName)}/${encodeURIComponent(region)}/${encodeURIComponent(instanceType)}/${encodeURIComponent(imageId)}`;
    window.location.href = url;

    // const url = `http://127.0.0.1:5000/LaunchInstance/${encodeURIComponent(accessKey)}/${encodeURIComponent(secretKey)}/${encodeURIComponent(region)}/${encodeURIComponent(instanceType)}/${encodeURIComponent(imageId)}`;
    // window.location.href = url;
  }

  Docker(ImageName : string,DockerName : string){
    const url = ``;
    window.location.href = url;
  }

  sendsms(mobilenumber:string,message:string){
    const url = `http://127.0.0.1:5000/sendsms/${encodeURIComponent(mobilenumber)}/${encodeURIComponent(message)}`;
    window.location.href = url;
  }

}
