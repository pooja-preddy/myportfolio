import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'E-commerce Website',
      description: 'A fully functional e-commerce website with cart and payment integration.',
      link: 'assets/images.jpeg',
      image: 'assets/images.jpeg'
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      link: 'assets/f6dde7_54e05348d96a47bba2c9cc69abf55243~mv2.jpg',
      image: 'assets/f6dde7_54e05348d96a47bba2c9cc69abf55243~mv2.jpg'
    }
  ];

}
