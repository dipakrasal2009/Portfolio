import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { title: 'Scrap-5 Search', category: 'python', image: 'assets/google.png' },
    { title: 'Bulk Email', category: 'python', image: 'assets/email.png' },
    { title: 'Geo Coordinates', category: 'fullstack', image: 'assets/geolocation.png' },
    { title: 'Python SMS', category: 'python', image: 'assets/phone.png' },
    { title: 'WhatsApp Message', category: 'python', image: 'assets/whatsapp.png' },
    { title: 'Python Camera Image', category: 'python', image: 'assets/camera.png' },
    { title: 'Launch EC2 Instance', category: 'aws', image: 'assets/ec2.png' },
    { title: 'Launch Docker Image', category: 'docker', image: 'assets/docker.png' },
    { title: 'text to audio', category: 'aws', image: 'assets/transcribe.png' },
    { title: 'Generate QR', category: 'python', image: 'assets/QR.png' },
    { title: 'Phone Call', category: 'python', image: 'assets/phone.png' },
    { title: 'S3 service', category: 'aws', image: 'assets/s3.png' },
    { title: 'google', category: 'python', image: 'assets/google.png' },
    { title: 'Audio to text', category: 'python', image: 'assets/transcribe.png' },

  ];

  filteredProjects = this.projects;

  constructor(private router : Router){}

  ngOnInit(): void {}

  filterProjects(category: string): void {
    this.filteredProjects =
      category === 'all'
        ? this.projects
        : this.projects.filter((project) => project.category === category);
  }

  onProjectClick(project: any): void {
    console.log('Project clicked:', project.title);

    if (project.title == "Scrap-5 Search"){
        console.log("scrapped clicked.................");
        // Example: Navigate to a project detail page
        this.router.navigate(['/scrapgoogle']);
    }

    if (project.title == "Bulk Email"){
      console.log("email clicked.................");
    }

    if (project.title == "Geo Coordinates"){
      console.log("geo clicked.................");
      this.router.navigate(['/geo']);
    }

    if (project.title == "Python SMS"){
      console.log("sms clicked.................");
    }

    if (project.title == "WhatsApp Message"){
      console.log("whatsapp clicked.................");
    }



    // Example: Navigate to a project detail page
    // this.router.navigate(['/project-details', project.title]);
  }

}
