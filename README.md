# Mi Eunacom 🩺

Una plataforma web moderna y profesional para la preparación del examen Eunacom, diseñada para médicos que buscan la excelencia.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **📱 Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- **🚀 Animaciones Avanzadas**: Sistema de scroll animations con CSS view-timeline y fallbacks
- **⚡ Performance Optimizada**: CSS modular con metodología BEM
- **♿ Accesible**: Soporte para `prefers-reduced-motion` y mejores prácticas de accesibilidad

## 🛠️ Tecnologías

- **HTML5** semántico y accesible
- **CSS3** moderno con:
  - Variables CSS (Custom Properties)
  - CSS Grid y Flexbox
  - Animaciones con `view-timeline`
  - Metodología BEM
  - Sistema de colores HSL
- **JavaScript** vanilla (próximamente)
- **Fuente**: Rubik (Google Fonts)

## 🎯 Secciones Implementadas

### ✅ Header
- Logo vectorial SVG
- Navegación responsive
- Botón de acceso con iconografía

### ✅ Hero Section
- Diseño atractivo con call-to-action
- Testimoniales visuales
- Sistema de badges y highlights
- Botones con efectos hover avanzados

### ✅ Features Section
- Grid responsive de características
- Cards con imágenes optimizadas
- Animaciones de scroll escalonadas
- Altura uniforme con CSS Grid

### ✅ References Section (Casos de Éxito)
- Galería de testimoniales
- Fotos circulares con bordes degradados
- Contenedores estilizados para nombres
- Sistema de puntuaciones

## 🎨 Sistema de Diseño

### Colores
- **Primario**: `hsl(189, 52%, 55%)` - Azul cyan vibrante
- **Accent**: `hsl(314, 85%, 70%)` - Rosa accent
- **Neutrales**: Escala de grises semántica
- **Sistema HSL**: Para manipulación avanzada de colores

### Tipografía
- **Familia**: Rubik (300, 400, 500, 600, 700, 800)
- **Escala modular**: `rem` based system
- **Hierarchy**: Títulos, subtítulos y body text optimizados

### Espaciado
- **Sistema de variables**: `--space-xs` a `--space-4xl`
- **Escala consistente**: 8px base unit
- **Responsive**: Adapta según breakpoints

### Componentes Reutilizables
- **Section Headers**: Títulos y subtítulos globales
- **Button System**: 5 variantes con estados hover/focus
- **Animation Utilities**: Clases fadeIn modulares
- **Grid System**: Layout responsive base

## 🚀 Animaciones

### Scroll Animations
- **Modernas**: CSS `view-timeline` para navegadores compatibles
- **Fallback**: `fadeIn` animations para navegadores legacy
- **Stagger Effects**: Animaciones escalonadas en cards
- **Accesibilidad**: Respeta `prefers-reduced-motion`

### Keyframes Disponibles
- `fadeIn` - Aparición suave básica
- `scroll-fade-animation` - Fade simple con scroll
- `scroll-fade-up-animation` - Fade con desplazamiento vertical
- `fadeInUp` - Entrada desde abajo

## 📱 Responsive Design

### Breakpoints
- **Desktop**: `1200px+`
- **Tablet**: `768px - 1199px`
- **Mobile**: `480px - 767px`
- **Small Mobile**: `< 480px`

### Características Responsive
- Grid adaptativo (5→3→2→1 columnas)
- Tipografía escalable
- Imágenes optimizadas con `aspect-ratio`
- Navegación táctil en móvil

## 📁 Estructura del Proyecto

```
mi-eunacom/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── main.css        # Estilos principales
│   ├── fonts/
│   │   └── rubik/          # Fuentes Rubik
│   ├── img/                # Imágenes optimizadas
│   └── js/
│       └── main.js         # JavaScript (próximamente)
└── README.md
```

## 🔧 Desarrollo

### Prerrequisitos
- Navegador moderno (Chrome 108+, Firefox 110+, Safari 16+)
- Servidor local para desarrollo

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/dimefipe/mieunacom.git

# Navegar al directorio
cd mieunacom

# Servir localmente (Python)
python -m http.server 8000

# O con Node.js
npx http-server
```

### Desarrollo Local
Visita `http://localhost:8000` en tu navegador.

## 🎯 Próximas Funcionalidades

- [ ] Scroll suave con Lenis
- [ ] Más secciones de contenido
- [ ] Formularios de contacto
- [ ] Integración con CMS
- [ ] Optimizaciones de performance
- [ ] PWA features

## 🤝 Contribución

Este proyecto está en desarrollo activo. Las contribuciones son bienvenidas.

## 📄 Licencia

Todos los derechos reservados - Mi Eunacom © 2025

---

**🚀 Desarrollado con atención al detalle y mejores prácticas de desarrollo web moderno**