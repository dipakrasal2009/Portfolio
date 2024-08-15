import { Component } from '@angular/core';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.css'
})
export class SendMailComponent {
  email = {
    receiver: '',
    subject: '',
    message: ''
  };


  constructor(private service : ProService){}

  sendEmail() {
    console.log("oiwdjlwejfwef");
    if (this.email.receiver && this.email.subject && this.email.message) {
    this.service.navigatetoemail(this.email.receiver,this.email.subject,this.email.message);
    }
    else{
      console.error("all fields are required...");
    }
    
  }

}
