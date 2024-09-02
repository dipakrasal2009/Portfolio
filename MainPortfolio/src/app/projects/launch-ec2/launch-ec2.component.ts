import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-launch-ec2',
  templateUrl: './launch-ec2.component.html',
  styleUrl: './launch-ec2.component.css'
})
export class LaunchEC2Component {
  OSName: string = '';
  //count: string = '';
  region: string = '';
  instanceType: string = '';
  imageId: string = '';

  constructor(private service: ApiServiceService) {}


  launchInstance(){
    //if(this.accessKey && this.secretKey && this.region && this.instanceType && this.imageId){
      this.service.LaunchInstance(this.OSName,this.region,this.instanceType,this.imageId);

    //}
    //else{
      //console.error("All fields are required....");
    //}
  }
}
