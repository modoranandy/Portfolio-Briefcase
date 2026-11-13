import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  nombre = 'Andy Modoran';
  rol = 'Web Developer';
  
  // Enlaces footer
  email = 'modoranandy1@gmail.com';
  github = 'https://github.com/modoranandy';
  linkedin = 'https://www.linkedin.com/in/andy-modoran-aa9446394/';

  proyectos = [
    { nombre: 'Seriti Psicología', desc: 'Desarrollo web integral realizado durante mis prácticas profesionales.', url: 'https://seritipsicologia.com' },
    { nombre: 'Reformas ND', desc: 'Web corporativa con alto rendimiento optimizada para captación de clientes.', url: 'https://reformasnd.com' },
    { nombre: 'Proyecto Programación (TFG)', desc: 'Trabajo Final de Grado de DAW.', url: 'https://github.com/modoranandy/ProyectoProgramacion' },
    { nombre: 'Fintly', desc: 'Plataforma web a medida. Arquitectura eficiente y diseño responsivo.', url: 'https://fintly.org' },
    { nombre: 'Pokedex PHP', desc: 'Proyecto académico full-stack conectando PHP puro con base de datos relacional.'},
    { nombre: 'Proyectos Expo.Go', desc: 'Proyectos personales explorando desarrollo móvil con React Native.'},
  ];

  stack = [
    { nombre: 'HTML / CSS / SCSS', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'TypeScript (TX) / JS', nivel: 'amarillo', texto: 'Intermedio' },
    { nombre: 'Angular', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'Laravel', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'PHP', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'SQL / MySQL', nivel: 'amarillo', texto: 'Intermedio' },
    { nombre: 'Docker', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'Python', nivel: 'rojo', texto: 'Experto' },
    { nombre: 'MongoDB / NoSQL', nivel: 'amarillo', texto: 'Intermedio' },
    { nombre: 'React / Expo', nivel: 'verde', texto: 'Principiante' },
    { nombre: 'IA y Big Data', nivel: 'verde', texto: 'Principiante' },
    { nombre: 'Bootstrap', nivel: 'amarillo', texto: 'Intermedio' }
  ];

  experiencia = [
    { titulo: 'Especialización en Big Data e IA', lugar: 'Actualmente', tipo: 'formación' },
    { titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web', lugar: 'IES Arcipreste de Hita', tipo: 'formación' },
    { titulo: 'Bachillerato en Humanidades', lugar: 'IES Arcipreste de Hita', tipo: 'formación' },
    { titulo: 'Prácticas Desarrollo Web', lugar: 'Seriti Psicología', tipo: 'experiencia' },
    { titulo: 'Operador Logístico', lugar: 'GXO', tipo: 'experiencia' },
    { titulo: 'Operario de Comprimidos', lugar: 'Chemo', tipo: 'experiencia' },
    { titulo: 'Operario Textil', lugar: 'Uare/Beon Fashion', tipo: 'experiencia' },
  ];

  // Lógica de la terminal animada
  terminalText = '';
  private commandList = [
    '> const andy = new Developer();',
    '> andy.stack = ["Angular", "Laravel", "Python"];',
    '> andy.studies = ["DAW", "Big Data e IA"];',
    '> andy.init();',
    '> System ready... 🚀'
  ];
  private currentCommand = 0;
  private intervalId: any;

  ngOnInit() {
    this.startTerminal();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startTerminal() {
    this.terminalText = this.commandList[0];
    this.intervalId = setInterval(() => {
      this.currentCommand = (this.currentCommand + 1) % this.commandList.length;
      this.terminalText = this.commandList[this.currentCommand];
    }, 2500); 
  }
}