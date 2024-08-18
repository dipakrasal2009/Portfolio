import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-launch-ec2-instance',
  templateUrl: './launch-ec2-instance.component.html',
  styleUrl: './launch-ec2-instance.component.css'
})
export class LaunchEc2InstanceComponent {


  OSName: string = '';
  //count: string = '';
  region: string = '';
  instanceType: string = '';
  imageId: string = '';

  constructor(private service: ProService) {}


  launchInstance(){
    //if(this.accessKey && this.secretKey && this.region && this.instanceType && this.imageId){
      this.service.LaunchInstance(this.OSName,this.region,this.instanceType,this.imageId);

    //}
    //else{
      //console.error("All fields are required....");
    //}
  }


  // launchInstance() {
  //   const payload = {
  //     accessKey: this.accessKey,
  //     secretKey: this.secretKey,
  //     region: this.region,
  //     instanceType: this.instanceType,
  //     imageId: this.imageId
  //   };




    // this.http.post('http://localhost:5000/launch-instance', payload)
    //   .subscribe(response => {
    //     console.log('Instance Launched:', response);
    //   }, error => {
    //     console.error('Error launching instance:', error);
    //   });
  //}



















  // instanceName: string = '';
  // instanceType: string = '';
  // amiId: string = '';
  // keyPair: string = '';
  // securityGroup: string = '';

  // constructor(private http: HttpClient) {}

  // launchInstance() {
  //   const payload = {
  //     instanceName: this.instanceName,
  //     instanceType: this.instanceType,
  //     amiId: this.amiId,
  //     keyPair: this.keyPair,
  //     securityGroup: this.securityGroup
  //   };

  //   this.http.post('http://127.0.0.1:5000/launch-instance', payload)
  //     .subscribe(response => {
  //       console.log('EC2 instance launched successfully', response);
  //     }, error => {
  //       console.error('Error launching EC2 instance', error);
  //     });
  // }
}
