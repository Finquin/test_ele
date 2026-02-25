---
title: Setting Up Your Website
---

## 11ty (Eleventy) — Resumen Ultra Compacto

### 📌 ¿Qué es?

* Generador de sitios estáticos (SSG).
* Creado por Zach Leatherman (2017).
* Inspirado en Jekyll.
* Basado en el ecosistema **Node.js**.

---

### 🧠 Filosofía

* **Static-first** → Genera HTML estático como prioridad.
* **Flexible** → +10 motores de plantillas combinables.
* **Frontend agnóstico** → No impone framework; solo genera HTML.
* **Desacoplado** → La interactividad queda del lado del cliente.

---

### 🚀 Uso básico sin configuración

11ty incluye valores por defecto suficientes para comenzar sin archivo de configuración.

---

### 📦 Instalación

```bash
npm init -y
npm install @11ty/eleventy@2
```

---

### ⚙ Scripts recomendados (`package.json`)

```json
"scripts": {
  "start": "eleventy --serve",
  "build": "eleventy"
}
```

* `npm run start` → servidor local
* `npm run build` → genera sitio estático

---

### 🧩 Idea clave

11ty:

* No es un framework frontend.
* No impone arquitectura.
* No obliga a usar una tecnología específica.
* Se centra en **generar HTML de forma simple, flexible y extensible**.

---

Si quieres, puedo hacer uno todavía más minimalista tipo ficha técnica de 10 líneas exactas.
