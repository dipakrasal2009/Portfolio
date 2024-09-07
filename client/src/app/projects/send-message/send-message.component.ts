import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';


@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent {
  mobileNumber: string = '';
  message: string = '';
  apiresponce : any;

  constructor(private service:ApiServiceService) {}

  sendMessage() {
    if (this.mobileNumber && this.message) {
      this.service.sendsms(this.mobileNumber,this.message).subscribe(
        (responce:any)=>{
          this.apiresponce = responce;
        },
        (error:any)=>{
          console.error("error fatching the data",error);
        }
      );
      
    } else {
      alert('Please enter both the mobile number and message.');
    }
  }
}
