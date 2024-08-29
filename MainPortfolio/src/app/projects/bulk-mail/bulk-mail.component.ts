import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { error } from 'console';

@Component({
  selector: 'app-bulk-mail',
  templateUrl: './bulk-mail.component.html',
  styleUrl: './bulk-mail.component.css'
})
export class BulkMailComponent {
  email = {
    reciver: '',
    subject: '',
    message: ''
  };
  apiresponce : any;

  constructor(private service : ApiServiceService){}

  
  sendEmail() {
    //console.log("oiwdjlwejfwef");
    if (this.email.reciver && this.email.subject && this.email.message) {
    this.service.sendmail(this.email.reciver,this.email.subject,this.email.message).subscribe(
      (responce : any)=>{
        this.apiresponce = responce;
      },
      (error:any)=>{
        console.log("error fatching data",error);
      }
    );
    }
    else{
      console.error("all fields are required...");
    }
    
  }
}
