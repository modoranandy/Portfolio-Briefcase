import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // Si tu archivo es .css, cámbialo aquí
})
export class AppComponent {
  email = 'tuemail@ejemplo.com'; // Cambia por tu correo

  proyectos = [
    {
      nombre: 'Fintly',
      url: 'https://fintly.org',
      desc: 'Plataforma web a medida. Arquitectura eficiente y diseño responsivo.',
      tech: ['Laravel', 'Angular', 'SQL']
    },
    {
      nombre: 'Reformas ND',
      url: 'https://reformasnd.com',
      desc: 'Web corporativa con alto rendimiento y optimización para captación de clientes.',
      tech: ['HTML', 'SCSS', 'JS']
    },
    {
      nombre: 'Seriti Psicología',
      url: 'https://seritipsicologia.com',
      desc: 'Desarrollo integral realizado durante mis prácticas profesionales.',
      tech: ['PHP', 'MySQL', 'CSS']
    }
  ];

  stack = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 
    'Laravel', 'PHP', 'Python', 'SQL / MongoDB', 'Docker'
  ];
}