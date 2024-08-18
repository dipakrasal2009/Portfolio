import { Component } from '@angular/core';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-send-whatsapp',
  templateUrl: './send-whatsapp.component.html',
  styleUrl: './send-whatsapp.component.css'
})
export class SendWhatsappComponent {
  mobileNumber: string = '';
  message: string = '';

  constructor(private service : ProService){}

  sendMessage() {
    if(this.mobileNumber && this.message){
      this.service.navigatetowhatsapp(this.mobileNumber,this.message);
    }
    else{
      console.error("all fields are required...");
    }
  }
    // const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.mobileNumber}&text=${encodeURIComponent(this.message)}`;
    // window.open(whatsappUrl, '_blank');
}


