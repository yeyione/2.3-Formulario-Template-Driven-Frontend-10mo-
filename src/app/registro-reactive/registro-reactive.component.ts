import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  selector: 'app-registro-reactive',
  styleUrl: './registro-reactive.component.css',
  templateUrl: './registro-reactive.component.html',
})
export class RegistroReactiveComponent {
  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[^@\\s]+@[^@\\s]+\\.[a-zA-Z]{2,}'),
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  registrado: any = null;

  get nombre() {
    return this.formulario.get('nombre')!;
  }

  get apellidos() {
    return this.formulario.get('apellidos')!;
  }

  get correo() {
    return this.formulario.get('correo')!;
  }

  get telefono() {
    return this.formulario.get('telefono')!;
  }

  get password() {
    return this.formulario.get('password')!;
  }

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.registrado = this.formulario.value;
    console.log('Datos registrados:', this.registrado);
  }
}
