import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  
})

export class ProfileComponent
{
  constructor(private service : ProService){}




  onButtonClick(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Docker/blob/main/README.md '; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }



  // githubC():void
  // {
   
  


    // console.log('Skills button clicked!');
    // this.http.get('https://github.com/dipakrasal2009', { responseType: 'text' }).subscribe(
    //   (response) => {
    //     console.log('Request successful. Opening URL:', response);
    //     // Open the URL in a new tab
    //     window.open('https://github.com/dipakrasal2009','_blank');
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  //}





    // // Example AJAX request to open another link
    // this.http.get('https://github.com/dipakrasal2009').subscribe(
    //   (response) => {
    //     console.log('Data fetched successfully:', response);
    //     // You can do something with the fetched data here
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  
}


