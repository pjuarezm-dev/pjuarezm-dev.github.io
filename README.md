🌐 Sitio de Perfil — pjuarezm-dev.github.io

Este repositorio contiene mi sitio web personal, publicado mediante **GitHub Pages** en la URL:

🔗 https://pjuarezm-dev.github.io

El objetivo principal es mostrar mi perfil profesional, proyectos, experiencia y tecnologías que manejo, además de servir como portafolio interactivo.

---

📋 Contenidos

- Presentación personal: breve resumen de quién soy y a qué me dedico.
- Experiencia profesional: proyectos destacados y roles que he desempeñado.
- Tecnologías: herramientas y lenguajes que utilizo en desarrollo web y backend.
- Proyectos: enlaces y descripciones de trabajos destacados.

---

🛠️ Tecnologías utilizadas

- React.js — Librería principal para la interfaz.
- Vite — Herramienta de construcción rápida y moderna.
- Tailwind CSS — Framework CSS para estilos utilitarios.
- Lucide Icons — Conjunto de íconos.
- GitHub Actions — CI/CD para el despliegue automático.

---

🚀 Despliegue en GitHub Pages

Este proyecto está configurado como un sitio de perfil de usuario, lo que significa que:

- El repositorio se llama exactamente "pjuarezm-dev.github.io".
- Se publica en la raíz del dominio https://pjuarezm-dev.github.io
- No requiere basename en React Router.

El despliegue se realiza mediante un flujo de GitHub Actions ubicado en ".github/workflows/deploy.yml", el cual:

1. Instala dependencias.
2. Compila la app desde la subcarpeta "frontend/".
3. Copia index.html a 404.html para manejar rutas en SPA.
4. Publica el contenido en GitHub Pages.

---

📂 Estructura del repositorio

pjuarezm-dev.github.io/
├── profile/ # Código fuente de la app React
│ ├── public/ # Recursos estáticos
│ ├── src/ # Componentes, páginas y estilos
│ ├── package.json
│ └── vite.config.ts
├── .github/workflows/ # Configuración de CI/CD
│ └── deploy.yml
└── README.md # Este archivo

---

📦 Instalación y uso local

1. Clonar el repositorio:
   git clone https://github.com/pjuarezm-dev/pjuarezm-dev.github.io.git
   cd pjuarezm-dev.github.io/profile

2. Instalar dependencias:
   npm install

3. Ejecutar en modo desarrollo:
   npm run dev

4. Generar build de producción:
   npm run build

---

📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente siempre que mantengas la atribución original.

---

✉ Contacto:
Si deseas conocer más sobre mi trabajo o colaborar en algún proyecto, puedes contactarme a través de mi LinkedIn:
https://www.linkedin.com/in/pjuarezm-dev/
