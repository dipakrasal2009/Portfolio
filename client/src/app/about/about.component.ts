import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  email:string='dipakrasal2009@gmail.com' ;
  city : string = "Pune";
  mobile_no : any = "+91 7219704283";
  birth_date : any = "20 september 2004";
}
