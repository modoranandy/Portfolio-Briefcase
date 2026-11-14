import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  nombre: string;
  desc: string;
  url?: string;
}

interface CodeToken {
  text: string;
  type: 'kw' | 'cls' | 'fn' | 'str' | 'prop' | 'num' | 'plain' | 'cm';
}

interface CodeSnippet {
  fileName: string;
  output: string;
  lines: { indent: number; tokens: CodeToken[] }[];
}

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

  // Estado del Header Sticky
  isScrolled = false;

  // Enlaces footer
  email = 'modoranandy1@gmail.com';
  github = 'https://github.com/modoranandy';
  linkedin = 'https://www.linkedin.com/in/andy-modoran-aa9446394/';

  proyectos: Proyecto[] = [
    { nombre: 'Seriti Psicología', desc: 'Desarrollo web integral realizado durante mis prácticas profesionales.', url: 'https://seritipsicologia.com' },
    { nombre: 'Reformas ND', desc: 'Web corporativa con alto rendimiento optimizada para captación de clientes.', url: 'https://reformasnd.com' },
    { nombre: 'Proyecto Programación (TFG)', desc: 'Trabajo Final de Grado de DAW.', url: 'https://github.com/modoranandy/ProyectoProgramacion' },
    { nombre: 'Fintly', desc: 'Plataforma web a medida. Arquitectura eficiente y diseño responsivo.', url: 'https://fintly.org' },
    { nombre: 'Pokedex PHP', desc: 'Proyecto académico full-stack conectando PHP puro con base de datos relacional.' },
    { nombre: 'Proyectos Expo.Go', desc: 'Proyectos personales explorando desarrollo móvil con React Native.' },
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

  // Snippets de código dinámicos con clases, objetos y funciones
  codeSnippets: CodeSnippet[] = [
    {
      fileName: 'Developer.ts',
      output: '> [TS] Instance ready: Full-Stack & AI mode ON 🚀',
      lines: [
        { indent: 0, tokens: [{ text: 'class ', type: 'kw' }, { text: 'Developer', type: 'cls' }, { text: ' {', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'profile ', type: 'prop' }, { text: '= { ', type: 'plain' }, { text: 'name', type: 'prop' }, { text: ': ', type: 'plain' }, { text: "'Andy Modoran'", type: 'str' }, { text: ', ', type: 'plain' }, { text: 'daw', type: 'prop' }, { text: ': ', type: 'plain' }, { text: 'true', type: 'num' }, { text: ' };', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'coreStack ', type: 'prop' }, { text: '= [', type: 'plain' }, { text: "'Angular'", type: 'str' }, { text: ', ', type: 'plain' }, { text: "'Laravel'", type: 'str' }, { text: ', ', type: 'plain' }, { text: "'Docker'", type: 'str' }, { text: '];', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'build', type: 'fn' }, { text: '(): ', type: 'plain' }, { text: 'void ', type: 'cls' }, { text: '{ ', type: 'plain' }, { text: 'this', type: 'kw' }, { text: '.shipCleanCode(); }', type: 'plain' }] },
        { indent: 0, tokens: [{ text: '}', type: 'plain' }] }
      ]
    },
    {
      fileName: 'ai_pipeline.py',
      output: '> [Python] Model accuracy: 98.4% | Big Data pipeline active ⚡',
      lines: [
        { indent: 0, tokens: [{ text: 'class ', type: 'kw' }, { text: 'BigDataEngine', type: 'cls' }, { text: ':', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'def ', type: 'kw' }, { text: '__init__', type: 'fn' }, { text: '(self):', type: 'plain' }] },
        { indent: 2, tokens: [{ text: 'self.tools = {', type: 'plain' }, { text: "'ml'", type: 'str' }, { text: ': ', type: 'plain' }, { text: "'Scikit-Learn'", type: 'str' }, { text: ', ', type: 'plain' }, { text: "'data'", type: 'str' }, { text: ': ', type: 'plain' }, { text: "'Pandas'", type: 'str' }, { text: '}', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'def ', type: 'kw' }, { text: 'train_model', type: 'fn' }, { text: '(self, dataset):', type: 'plain' }] },
        { indent: 2, tokens: [{ text: 'return ', type: 'kw' }, { text: 'dataset.optimize(epochs=', type: 'plain' }, { text: '100', type: 'num' }, { text: ')', type: 'plain' }] }
      ]
    },
    {
      fileName: 'SystemController.php',
      output: '> [PHP 8.5] 200 OK — Response time: 12ms 🔥',
      lines: [
        { indent: 0, tokens: [{ text: 'final class ', type: 'kw' }, { text: 'Architecture ', type: 'cls' }, { text: 'extends ', type: 'kw' }, { text: 'Controller', type: 'cls' }] },
        { indent: 0, tokens: [{ text: '{', type: 'plain' }] },
        { indent: 1, tokens: [{ text: 'public function ', type: 'kw' }, { text: 'deploy', type: 'fn' }, { text: '(): ', type: 'plain' }, { text: 'JsonResponse', type: 'cls' }] },
        { indent: 1, tokens: [{ text: '{', type: 'plain' }] },
        { indent: 2, tokens: [{ text: 'return ', type: 'kw' }, { text: 'response()->json([', type: 'plain' }, { text: "'status'", type: 'str' }, { text: ' => ', type: 'plain' }, { text: "'ultra_fast'", type: 'str' }, { text: ']);', type: 'plain' }] },
        { indent: 1, tokens: [{ text: '}', type: 'plain' }] },
        { indent: 0, tokens: [{ text: '}', type: 'plain' }] }
      ]
    }
  ];

  currentSnippetIndex = 0;
  private intervalId: any;

  get currentSnippet(): CodeSnippet {
    return this.codeSnippets[this.currentSnippetIndex];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 35;
  }

  ngOnInit() {
    this.startTerminal();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startTerminal() {
    this.intervalId = setInterval(() => {
      this.nextSnippet();
    }, 3800);
  }

  nextSnippet() {
    this.currentSnippetIndex = (this.currentSnippetIndex + 1) % this.codeSnippets.length;
  }
}