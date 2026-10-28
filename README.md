<p align="center">
  <img src="https://github.com/yeyione/2.3-Formulario-Template-Driven-Frontend-10mo-/blob/main/src/images/formulario.jpeg" alt="Formulario" width="300">
   <img src="https://github.com/yeyione/2.3-Formulario-Template-Driven-Frontend-10mo-/blob/main/src/images/formulariosindatos.jpeg" alt="Formulario" width="300">
   <img src="https://github.com/yeyione/2.3-Formulario-Template-Driven-Frontend-10mo-/blob/main/src/images/Validaciones.png" alt="Formulario" width="300">
</p>

Explicación Breve de las validaciones del formulario.

Campo: Nombre
Validación: required, minlength="3"
Mensaje: “El nombre es obligatorio.” / “…al menos 3 caracteres.”

Campo: Correo
Validación: required, email y pattern
Mensaje: “El correo es obligatorio.” / “Ingresa un correo válido.”

Campo: Teléfono
Validación: required y pattern de 10 dígitos
Mensaje: “El teléfono es obligatorio.” / “…10 dígitos numéricos.”

Campo: Edad
Validación: required, min="18"
Mensaje: “La edad es obligatoria.” / “La edad mínima es 18 años.”

Campo: Contraseña
Validación: required, minlength="6"
Mensaje: “…al menos 6 caracteres.”

Campo: Confirmar
Validación: required y comparación con la contraseña
Mensaje: “Las contraseñas no coinciden.”
