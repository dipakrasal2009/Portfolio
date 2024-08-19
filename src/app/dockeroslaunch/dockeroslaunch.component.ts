import { Component } from '@angular/core';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-dockeroslaunch',
  templateUrl: './dockeroslaunch.component.html',
  styleUrl: './dockeroslaunch.component.css'
})
export class DockeroslaunchComponent {

  imageName = '';
  DockerName = '';

  constructor(private service : ProService){}

  DownloadeImage()
  {
   console.log('Image Downloaded successfully....');

   if(this.imageName && this.DockerName){
    this.service.Docker(this.imageName,this.DockerName);
   }
   else{
    console.error("All Fields are required....");
   }
  }

  RunImage(){

  }

  StopImage(){

  }
  

}
