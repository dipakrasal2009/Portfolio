import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-scrap-google',
  templateUrl: './scrap-google.component.html',
  styleUrl: './scrap-google.component.css'
})
export class ScrapGoogleComponent {


  // searchResults: string[] = [];
  // query: string = '';

  // constructor(private googleSearchService: ApiServiceService) {}

  // search() {
  //   if (this.query.trim()) {
  //     this.googleSearchService.getData(this.query).subscribe(
  //       (results) => {
  //         this.searchResults = results;
  //         console.log('Search results:', results);
  //       },
  //       (error) => {
  //         console.error('Error:', error);
  //       }
  //     );
  //   }
  // }







  inputData: string = '';
  apiResponse: any;

  constructor(private apiService: ApiServiceService) {}

  fetchData(): void {
    if (this.inputData) {
      this.apiService.getData(this.inputData).subscribe(
        (response : any) => {
          this.apiResponse = response;
        },
        (error:any) => {
          console.error('Error fetching data', error);
        }
      );
    }
  }
}
