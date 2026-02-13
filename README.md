# 1. Iniciar Proyecto

- ## 1.1 Iniciamos
  ```
  pnpm init
  pnpm add -D @11ty/eleventy
  ```

- ## 1.1 Estructura

  ```
   Proyect
   ├── src
   │   ├── _templates
   │   │   ├── layouts
   │   │   │ └── base.html
   │   │   └── includes
   │   │       ├── triptych.html
   │   │       ├── navigation.html
   │   │       ├── header.html
   │   │       └── footer.html
   │   ├── index.html
   │   └── about.md
   ├── package-lock.json
   ├── package.json
   ├── eleventy.config.js
   └── assets
       └── css
           └── style.css
  ```

    - ### 1.1.1 Creamos la estructura de carpetas

        #### Carpetas
        ```
        md -p src/{_templates/{layouts,includes},assets/css}
        ```

        #### Files
        ```
        th src/{{_templates/{layouts/base.html,includes/{triptych.html,navigation.html,header.html,footer.html}},index.html,about.md},../eleventy.config.js}
        ```
    - ### 1.1.2 Agregamos Contenido a los archivos
        - package.json (agregamos)
          ```js
           "type": "module",
           "scripts": {
             "dev:start": "eleventy --serve",
             "dev:build": "eleventy"
            },
          ```
        - eleventy.config.js

            ```js
              export default function (eleventyConfig) {
                eleventyConfig.addPassthroughCopy("assets");
                return {
                  dir: {
                    input: "src",
                    output: "_site",
                    includes: "_templates"
                  }
                };
              }
            ```

          1. ```export default function (eleventyConfig) {}```: Aquí estamos exportando una función por defecto que Eleventy usará para configurar el proyecto.
            eleventyConfig es un objeto que Eleventy proporciona para registrar configuraciones, ///filtros, transformaciones, rutas de copia, etc.

          1. ```eleventyConfig.addPassthroughCopy("assets")```: Esto le dice a Eleventy que copie literalmente la carpeta assets desde tu proyecto al  directorio de salida (_site) sin procesarla.Útil para CSS, imágenes, JS u otros archivos estáticos.

          1. ``` return { dir: { input: "src", output: "_site", includes: "_templates"}}```: Retornanos un objeto con la estrutura de directorios de nuestro proyecto

                ```
                dir: Objeto con la estructura de directorios

                input: "src"  → La carpeta donde están los archivos fuente de Eleventy (HTML, Nunjucks, Markdown, etc.).

                output: "_site" → La carpeta donde Eleventy va a generar el sitio final listo para publicar.

                includes: "_templates" → Carpeta dentro de src donde se ubican plantillas parciales o includes que se usarán en las páginas.
                ```