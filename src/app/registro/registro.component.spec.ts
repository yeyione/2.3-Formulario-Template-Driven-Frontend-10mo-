import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let fixture: ComponentFixture<RegistroComponent>;
  let el: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    el = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  async function escribir(id: string, valor: string) {
    const input = el.querySelector('#' + id) as HTMLInputElement;
    input.value = valor;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
  }

  async function llenarFormularioValido() {
    await escribir('nombre', 'Ana Lopez Perez');
    await escribir('correo', 'ana@correo.com');
    await escribir('telefono', '6641234567');
    await escribir('edad', '25');
    await escribir('password', 'secreto1');
    await escribir('confirmar', 'secreto1');
  }

  function boton(): HTMLButtonElement {
    return el.querySelector('button') as HTMLButtonElement;
  }

  it('no muestra resultado al inicio', () => {
    expect(el.querySelector('.resultado')).toBeNull();
  });

  it('deshabilita el botón con el formulario vacío', () => {
    expect(boton().disabled).toBe(true);
  });

  it('deshabilita el botón si las contraseñas no coinciden', async () => {
    await llenarFormularioValido();
    await escribir('confirmar', 'otra-clave');
    expect(boton().disabled).toBe(true);
  });

  it('muestra los datos capturados al presionar Registrar', async () => {
    await llenarFormularioValido();
    expect(boton().disabled).toBe(false);

    boton().click();
    fixture.detectChanges();

    const resultado = el.querySelector('.resultado') as HTMLElement;
    expect(resultado).not.toBeNull();

    const texto = resultado.textContent ?? '';
    expect(texto).toContain('Ana Lopez Perez');
    expect(texto).toContain('ana@correo.com');
    expect(texto).toContain('6641234567');
    expect(texto).toContain('25');
    expect(texto).not.toContain('secreto1');
    expect(texto).toContain('xxxxxxxx');
  });

    it('no muestra mensajes de error antes de interactuar', () => {
    expect(el.querySelector('.error')).toBeNull();
  });

  it('muestra "obligatorio" al tocar el nombre y dejarlo vacío', () => {
    const input = el.querySelector('#nombre') as HTMLInputElement;
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(el.textContent).toContain('El nombre es obligatorio.');
  });

  it('muestra mensaje de mínimo 3 caracteres en el nombre', async () => {
    await escribir('nombre', 'ab');
    expect(el.textContent).toContain('El nombre debe tener al menos 3 caracteres.');
  });

  it('muestra mensaje de correo inválido', async () => {
    await escribir('correo', 'ana@');
    expect(el.textContent).toContain('Ingresa un correo válido.');
  });

  it('muestra mensaje de edad mínima', async () => {
    await escribir('edad', '17');
    expect(el.textContent).toContain('La edad mínima es 18 años.');
  });

  it('muestra mensaje de contraseña corta', async () => {
    await escribir('password', '123');
    expect(el.textContent).toContain('La contraseña debe tener al menos 6 caracteres.');
  });

  it('marca el campo como inválido y luego como válido', async () => {
    await escribir('nombre', 'ab');
    const input = el.querySelector('#nombre') as HTMLInputElement;
    expect(input.classList).toContain('invalido');

    await escribir('nombre', 'Ana Lopez');
    expect(input.classList).toContain('valido');
  });
});
