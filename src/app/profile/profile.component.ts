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

  name = " "
  email = " "
  message = " "



  constructor(private service : ProService){}




  onButtonClickC(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/c-language-programs'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickCPP(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Logic-Building/tree/main/C%2B%2B%20Programs'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickJAVA(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Pre-Plecment-Activity/tree/main/ALL%20JAVA'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }  
  
  onButtonClickDS(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Data-Structures'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }  
  
  onButtonClickGo(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Golang'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }  
  
  onButtonClickHTML(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/HTML'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickCSS(): void {
    const targetUrl = ''; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }  


  onButtonClickJS(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/JavaScript'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }


  onButtonClickTS(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Typescript'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickDocker(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Docker/blob/main/README.md '; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickAWS(): void {
    const targetUrl = ''; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickPython(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Python'; // The URL you wahttps://github.com/dipakrasalhttps://github.com/dipakrasal2009/Docker/blob/main/README.md 2009/Docker/blob/main/README.md nt to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickAngular(): void {
    const targetUrl = 'https://github.com/dipakrasal2009/Angular'; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  onButtonClickCNodeJS(): void {
    const targetUrl = ''; // The URL you want to navigate to
    this.service.navigateTo(targetUrl);
  }

  conatct(): void{
    if (this.name && this. email && this.message){
      this .service.contact(this.name,this.email,this.message);
    }
    else{
      console.error("All Fields are required....");
    }
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


