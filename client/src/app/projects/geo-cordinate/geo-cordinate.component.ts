import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-geo-cordinate',
  templateUrl: './geo-cordinate.component.html',
  styleUrl: './geo-cordinate.component.css'
})
export class GeoCordinateComponent {

constructor(private service : ApiServiceService){}

location :any;

fetchData():void{
  this.service.GetGeoCordinateData().subscribe(
    (responce : any) =>{
      this.location = responce;
    },
    (error:any) => {
      console.error('error fatching the data',error);
    }
  );
}

}
