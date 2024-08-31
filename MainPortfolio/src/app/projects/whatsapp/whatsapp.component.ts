import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
  mobileNumber: string = '';
  message: string = '';

  constructor(private service : ApiServiceService){}

  sendMessage() {
    if(this.mobileNumber && this.message){
      this.service.sendwhatsapp(this.mobileNumber,this.message);
    }
    else{
      console.error("all fields are required...");
    }
  }
}
