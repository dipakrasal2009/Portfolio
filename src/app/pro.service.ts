import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private router : Router) { }

  navigateTo(url: string): void {
    window.location.href = (url);
  }

}
