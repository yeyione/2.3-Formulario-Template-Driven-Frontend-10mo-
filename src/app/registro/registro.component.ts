import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
 
  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    password: '',
    confirmar: ''
  };

 
  registrado: any = null;

  registrar() {
    this.registrado = {
      nombre: this.usuario.nombre,
      correo: this.usuario.correo,
      telefono: this.usuario.telefono,
      edad: this.usuario.edad,
      password: this.usuario.password
    };
  }
}
