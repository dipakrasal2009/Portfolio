import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML5', icon: 'assets/html.png' },
    { name: 'CSS3', icon: 'assets/css.png' },
    { name: 'JavaScript', icon: 'assets/js.png' },
    { name: 'Angular', icon: 'assets/angular.png' },
    { name: 'TypeScript', icon:'assets/js.png'}
    
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'assets/node.png' },
    { name: 'Express.js', icon: 'assets/express.png' },
    { name: 'Python', icon: 'assets/python.png' },
    { name: 'Flask', icon: 'assets/flask.png' },
    
  ];

  technologySkills = [
    { name: 'Docker', icon: 'assets/docker.png' },
    { name: 'AWS', icon: 'assets/aws.png' },
    { name: 'Git', icon: 'assets/git.png' },
    { name: 'Linux', icon: 'assets/linux.png' },
    
  ];

  Languages = [
    { name: 'C', icon: 'assets/c.png' },
    { name: 'CPP', icon: 'assets/cpp.png' },
    { name: 'Java', icon: 'assets/java.png' },
    { name: 'Python', icon: 'assets/python.png' },
    {name:'go',icon:''}
    
  ];

}
