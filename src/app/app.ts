import { Component } from '@angular/core';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroComponent, RegistroReactiveComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
