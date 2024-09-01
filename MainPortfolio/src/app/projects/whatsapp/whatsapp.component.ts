import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { subscribe } from 'node:diagnostics_channel';
import { error } from 'node:console';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
  mobileNumber: string = '';
  message: string = '';

  apiresponce : any;
  constructor(private service : ApiServiceService){}

  sendMessage() {
    if(this.mobileNumber && this.message){
      this.service.sendwhatsapp(this.mobileNumber,this.message).subscribe(
        (res : any)=>{
          if (res.status === 'success')
            {
              alert(res.message)
            } else {
              alert('Error: ' + res.message);
            }

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
