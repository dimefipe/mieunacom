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
- Testimoniales visuales con tarjetas animadas
- Sistema de badges y highlights
- Botones con efectos hover avanzados
- 3 tarjetas de perfil con animaciones escalonadas

### ✅ Features Section (Características)
- Grid responsive de características (4 cards)
- Cards con imágenes optimizadas
- Animaciones de scroll escalonadas
- Altura uniforme con CSS Grid
- Sistema de animaciones reutilizable

### ✅ References Section (Casos de Éxito)
- Galería de testimoniales (5 tarjetas)
- Fotos circulares con bordes degradados
- Contenedores estilizados para nombres
- Sistema de puntuaciones
- Animaciones scroll con delay progresivo

### ✅ Stories Section (Historias Reales)
- **NUEVO**: Sección completa con testimonios detallados
- Layout de 3 columnas con:
  - Cajas de alerta con preguntas
  - Flechas direccionales SVG
  - Tarjetas de testimonio con perfiles
  - Sistema de calificaciones con estrellas
- Esquema de colores secundario (rosa/magenta)
- Diseño responsive con colapso a columnas

### ✅ Sistema de Animaciones Unificado
- **NUEVO**: Clases de utilidad reutilizables
- `scroll-fade-in` como clase base
- `scroll-stagger-1` a `scroll-stagger-5` para delays
- View-timeline API con fallback automático
- Aplicado consistentemente en todas las secciones

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
- **Section Headers**: Títulos y subtítulos globales con variante centrada
- **Button System**: 5 variantes con estados hover/focus
- **Animation Utilities**: Sistema completo de clases scroll-fade-in
- **Grid System**: Layout responsive base
- **Color Schemes**: Primario (azul) y secundario (rosa) intercambiables

## 🚀 Sistema de Animaciones Avanzado

### Clases de Utilidad Scroll
- **Base**: `scroll-fade-in` - Animación fundamental de aparición
- **Delays**: `scroll-stagger-1` a `scroll-stagger-5` - Retardos progresivos
- **Combinable**: Clases modulares para control granular
- **Ejemplo**: `<div class="scroll-fade-in scroll-stagger-2">`

### Scroll Animations Técnicas
- **Modernas**: CSS `view-timeline` para navegadores compatibles
- **Fallback**: `fadeIn` animations para navegadores legacy  
- **Stagger Effects**: Animaciones escalonadas en cards y elementos
- **Accesibilidad**: Respeta `prefers-reduced-motion`
- **Performance**: Optimizado con `will-change` y `transform`

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

## 📊 Estado del Proyecto

### 🎯 Progreso General: **40%** completado

#### ✅ **Fase 1: Fundación** (100% completado)
- [x] Estructura HTML semántica
- [x] Sistema de diseño CSS completo
- [x] Metodología BEM implementada
- [x] Sistema de colores y tipografía
- [x] Grid responsive base

#### ✅ **Fase 2: Secciones Core** (100% completado)  
- [x] Header con navegación
- [x] Hero section con animaciones
- [x] Features section (4 características)
- [x] References section (5 testimonios)
- [x] Stories section (3 historias detalladas)

#### ✅ **Fase 3: Sistema de Animaciones** (100% completado)
- [x] Clases de utilidad reutilizables
- [x] View-timeline API con fallbacks
- [x] Animaciones escalonadas aplicadas
- [x] Sistema responsive de animaciones

#### ⏳ **Fase 4: Secciones Restantes** (0% completado)
- [ ] Sección "Cómo funciona"
- [ ] Sección "Resultados y estadísticas" 
- [ ] Sección "Metodología científica"
- [ ] Sección "Reconocimientos medios"
- [ ] Sección "Preguntas frecuentes"
- [ ] CTA final y Footer

#### 🔮 **Fase 5: Interactividad** (0% completado)
- [ ] JavaScript para navegación
- [ ] Acordeones FAQ
- [ ] Formularios funcionales
- [ ] Optimizaciones finales

---

### 🏆 Última Actualización
**Commit**: `feat: implementar sistema de animaciones reutilizable y sección historias reales`
- ✨ Sección "Historias reales" completamente implementada
- 🎨 Sistema de animaciones unificado y reutilizable
- 🚀 Aplicación consistente en todas las secciones existentes

## 🎯 Próximas Funcionalidades

### 🔄 En Desarrollo Inmediato
- [ ] **Sección "Cómo funciona Mi Eunacom"** - 3 pasos con mockups
- [ ] **Sección "Resultados"** - Estadísticas impactantes (98%, 7K+, 15K+)
- [ ] **Sección "Metodología"** - Respaldo científico con visual de doctor
- [ ] **Sección "Medios"** - Logos de reconocimientos
- [ ] **FAQ Section** - Preguntas frecuentes expandibles
- [ ] **CTA Final** - "Tu futuro médico comienza hoy"
- [ ] **Footer** - Enlaces y información legal

### 🚀 Mejoras Técnicas Planificadas
- [ ] Interactividad JavaScript (acordeones, navegación suave)
- [ ] Optimización de imágenes y lazy loading
- [ ] Formularios de contacto funcionales
- [ ] Integración con analytics
- [ ] PWA features y service workers
- [ ] Tests automatizados

## 🤝 Contribución

Este proyecto está en desarrollo activo. Las contribuciones son bienvenidas.

## 📄 Licencia

Todos los derechos reservados - Mi Eunacom © 2025

---

**🚀 Desarrollado con atención al detalle y mejores prácticas de desarrollo web moderno**