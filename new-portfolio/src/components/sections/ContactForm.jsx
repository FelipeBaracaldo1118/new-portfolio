import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from 'emailjs-com'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({});

  const validate = (field, value) => {
    switch (field) {
      case "nombre":
        return value.trim() ? "" : "El nombre es obligatorio.";
      case "email":
        if (!value.trim()) return "El email es obligatorio.";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email inválido.";
        return "";
      case "mensaje":
        return value.trim() ? "" : "El mensaje no puede estar vacío.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isTouched[name]) {
      const error = validate(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    formData.nombre &&
    formData.email &&
    formData.mensaje &&
    Object.values(errors).every((e) => !e);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setIsTouched({
      nombre: true,
      email: true,
      mensaje: true,
    });

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          "service_nyt2hwd",
          "template_id02032",
          {
            nombre: formData.nombre,
            email: formData.email,
            mensaje: formData.mensaje,
          },
          "NsleA5ebg6M5AlNro"
        )
        .then(() => {
          alert("¡Mensaje enviado!");
          setFormData({ nombre: "", email: "", mensaje: "" });
          setErrors({});
          setIsTouched({});
        })
        .catch(() => {
          alert("Error al enviar el mensaje");
        });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2>Trabajemos juntos</h2>
        <p>¿Tienes un proyecto en mente? ¿Oportunidades laborales?</p>
      </div>

      <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu nombre"
            className={errors.nombre ? "error" : ""}
          />
          {errors.nombre && (
            <span className="error-text">{errors.nombre}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="tu.email@ejemplo.com"
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Cuéntame sobre tu proyecto..."
            className={errors.mensaje ? "error" : ""}
          />
          {errors.mensaje && (
            <span className="error-text">{errors.mensaje}</span>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
