import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-send-text-message',
  templateUrl: './send-text-message.component.html',
  styleUrl: './send-text-message.component.css'
})
export class SendTextMessageComponent {
  mobileNumber: string = '';
  message: string = '';

  constructor(private service:ProService) {}

  sendMessage() {
    if (this.mobileNumber && this.message) {
      this.service.sendsms(this.mobileNumber,this.message);
      
    } else {
      alert('Please enter both the mobile number and message.');
    }
  }

}
