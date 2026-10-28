import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroReactiveComponent } from './registro-reactive.component';

describe('RegistroReactiveComponent', () => {
  let fixture: ComponentFixture<RegistroReactiveComponent>;
  let component: RegistroReactiveComponent;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroReactiveComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroReactiveComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  function llenarValido() {
    component.formulario.setValue({
      nombre: 'Ana',
      apellidos: 'Lopez Perez',
      correo: 'ana@correo.com',
      telefono: '6641234567',
      password: 'secreto1'
    });
    fixture.detectChanges();
  }

  function boton(): HTMLButtonElement {
    return el.querySelector('button') as HTMLButtonElement;
  }

  it('el formulario es inválido al inicio y el botón está deshabilitado', () => {
    expect(component.formulario.invalid).toBe(true);
    expect(boton().disabled).toBe(true);
  });

  it('marca inválido un correo incorrecto', () => {
    component.correo.setValue('ana@');
    expect(component.correo.invalid).toBe(true);
  });

  it('marca inválida una contraseña de menos de 6 caracteres', () => {
    component.password.setValue('123');
    expect(component.password.hasError('minlength')).toBe(true);
  });

  it('muestra mensaje de error cuando el usuario interactúa', () => {
    component.nombre.markAsTouched();
    fixture.detectChanges();
    expect(el.textContent).toContain('El nombre es obligatorio.');
  });

  it('habilita el botón con datos válidos', () => {
    llenarValido();
    expect(boton().disabled).toBe(false);
  });

  it('muestra los datos registrados al enviar', () => {
    llenarValido();
    boton().click();
    fixture.detectChanges();

    const texto = el.querySelector('.resultado')?.textContent ?? '';
    expect(texto).toContain('Ana');
    expect(texto).toContain('Lopez Perez');
    expect(texto).toContain('ana@correo.com');
    expect(texto).toContain('6641234567');
    expect(texto).not.toContain('secreto1');
  });
});
