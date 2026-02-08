# 💌 Obsequio Digital de Amor

Un regalo web personalizable creado con amor, diseñado para ser desplegado en Vercel.

## 📋 Descripción del Proyecto

Este es un obsequio digital interactivo que consta de dos pantallas:

1. **Pantalla de Inicio**: Una imagen clickeable que da acceso al mensaje
2. **Pantalla del Mensaje**: Un mensaje de amor con animación de tulipanes y video de fondo

## 🗂️ Estructura del Proyecto

```
proyecto-amor/
├── index.html              # Estructura HTML principal
├── css/
│   └── styles.css         # Estilos y animaciones
├── js/
│   └── main.js            # Lógica e interacciones
├── assets/
│   └── images/
│       └── foto-inicial.jpg    # Imagen de inicio (PERSONALIZABLE)
├── media/
│   └── video-amor.mp4     # Video de fondo (PERSONALIZABLE)
└── README.md              # Este archivo
```

## ✏️ Personalización

### 1. Cambiar la imagen de inicio

Reemplaza el archivo `assets/images/foto-inicial.jpg` con tu propia foto.

**Recomendaciones:**
- Formato: JPG o PNG
- Tamaño recomendado: 500x500px (cuadrada)
- Peso máximo: 2MB para mejor rendimiento

### 2. Personalizar el mensaje de amor

Edita el archivo `index.html` en la sección del mensaje:

```html
<div class="texto-mensaje">
    <p>
        <!-- Escribe aquí tu primer párrafo -->
    </p>
    <p>
        <!-- Segundo párrafo -->
    </p>
    <!-- Añade más párrafos según necesites -->
</div>
```

### 3. Cambiar el video

Reemplaza el archivo `media/video-amor.mp4` con tu propio video.

**Recomendaciones:**
- Formato: MP4 (mejor compatibilidad)
- Duración: 30-60 segundos (se reproduce en loop)
- Peso máximo: 10MB (Vercel tiene límite de 100MB por proyecto)
- Resolución: 720p o 1080p

### 4. Modificar colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primario: #ff6b9d;      /* Color principal (rosa) */
    --color-secundario: #ffc2d1;    /* Color secundario */
    --color-fondo: #fff5f7;         /* Color de fondo */
    --color-texto: #2c2c2c;         /* Color del texto */
}
```

### 5. Cambiar el título de la página

Edita el archivo `index.html`:

```html
<title>Para ti ❤️</title>  <!-- Cambia este texto -->
```

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Sube el proyecto a un repositorio en GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "New Project"
4. Importa tu repositorio desde GitHub
5. Haz clic en "Deploy"

¡Listo! Vercel generará una URL para tu proyecto.

### Opción 2: Desde Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Navega a tu carpeta del proyecto
cd proyecto-amor

# Despliega
vercel
```

### Opción 3: Arrastrar y soltar

1. Comprime toda la carpeta del proyecto en un ZIP
2. Ve a [Vercel](https://vercel.com)
3. Arrastra el archivo ZIP a la zona de despliegue

## 🎨 Características

- ✅ Diseño responsive (se adapta a móviles y tablets)
- ✅ Animaciones suaves y elegantes
- ✅ Tulipanes animados en el borde
- ✅ Video de fondo con opacidad ajustable
- ✅ Transiciones fluidas entre pantallas
- ✅ Código limpio y bien documentado

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y gradientes)
- JavaScript Vanilla (sin frameworks)

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS y Android)

## 💡 Consejos de Personalización Avanzada

### Cambiar la cantidad de tulipanes

En `index.html`, añade o elimina elementos con clase `tulipan`:

```html
<div class="tulipan tulipan-9">🌷</div>
```

Y en `css/styles.css`, añade los estilos correspondientes:

```css
.tulipan-9 {
    top: 30%;
    left: 10%;
    animation-delay: 4s;
}
```

### Modificar la velocidad de las animaciones

En `css/styles.css`, cambia la duración:

```css
@keyframes flotar {
    /* ... */
}

.tulipan {
    animation: flotar 8s infinite ease-in-out;  /* Cambia los 8s */
}
```

### Añadir música de fondo

Si prefieres audio en lugar de video, modifica `index.html`:

```html
<audio id="musica-fondo" autoplay loop>
    <source src="media/cancion.mp3" type="audio/mp3">
</audio>
```

## 🐛 Solución de Problemas

### El video no se reproduce automáticamente

- **Causa**: Los navegadores bloquean autoplay con sonido
- **Solución**: El video está configurado en `muted` por defecto. Si deseas sonido, los usuarios deberán interactuar primero con la página.

### Las imágenes no se cargan

- **Verifica**: Que las rutas sean correctas y los archivos existan
- **Formatos soportados**: JPG, PNG, GIF, WebP

### Los tulipanes no se animan

- **Verifica**: Que el archivo `css/styles.css` esté correctamente enlazado
- **Prueba**: Abriendo las DevTools del navegador (F12) y revisando la consola

## 📞 Soporte

Si tienes problemas con el despliegue en Vercel:
- Documentación oficial: https://vercel.com/docs
- Límites de Vercel Free: 100GB bandwidth/mes

## ❤️ Créditos

Proyecto creado con amor para alguien muy especial.

---

**¡Disfruta personalizando tu regalo! 💕**
