# 🎁 Guía Rápida de Personalización

Esta guía te ayudará a personalizar rápidamente tu obsequio digital.

## ⚡ Pasos Básicos (5 minutos)

### 1️⃣ Personaliza el Mensaje de Amor

Abre el archivo: `index.html`

Busca esta sección (línea ~34 aproximadamente):

```html
<div class="texto-mensaje">
    <p>
        Desde el momento en que entraste en mi vida, todo cambió. 
        <!-- CAMBIA ESTE TEXTO POR EL TUYO -->
    </p>
</div>
```

**Escribe tu propio mensaje** reemplazando los párrafos existentes.

### 2️⃣ Añade tu Foto Inicial

1. Guarda tu foto favorita como: `foto-inicial.jpg`
2. Colócala en la carpeta: `assets/images/`
3. Elimina el archivo `INSTRUCCIONES.txt` de esa carpeta

### 3️⃣ Añade tu Video

1. Guarda tu video como: `video-amor.mp4`
2. Colócalo en la carpeta: `media/`
3. Elimina el archivo `INSTRUCCIONES.txt` de esa carpeta

## 🎨 Personalización de Colores (Opcional)

Abre el archivo: `css/styles.css`

Busca las primeras líneas:

```css
:root {
    --color-primario: #ff6b9d;    /* Rosa principal */
    --color-secundario: #ffc2d1;  /* Rosa claro */
}
```

**Cambia los códigos de color** por tus favoritos:
- Generador de colores: https://coolors.co/

## 📝 Personalización del Título

Abre el archivo: `index.html`

Busca (línea ~6):

```html
<title>Para ti ❤️</title>
```

**Cambia el texto** que aparecerá en la pestaña del navegador.

## 🌷 Cambiar las Flores (Opcional)

Si quieres usar otro emoji en lugar de tulipanes:

Abre: `index.html`

Busca (línea ~20 aproximadamente):

```html
<div class="tulipan tulipan-1">🌷</div>
```

**Reemplaza 🌷** por otro emoji:
- Rosas: 🌹
- Corazones: ❤️
- Estrellas: ⭐
- Mariposas: 🦋

## 🚀 Desplegar en Vercel

### Método Simple (Sin GitHub)

1. Ve a: https://vercel.com
2. Crea una cuenta gratuita
3. Haz clic en "Add New..." → "Project"
4. Arrastra y suelta **toda la carpeta del proyecto**
5. Haz clic en "Deploy"

**¡En menos de 1 minuto tendrás tu URL lista! 🎉**

### Método Profesional (Con GitHub)

1. Sube el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Mi obsequio digital de amor"
   git remote add origin TU_URL_DE_GITHUB
   git push -u origin main
   ```

2. En Vercel:
   - Haz clic en "Import Project"
   - Selecciona tu repositorio
   - Haz clic en "Deploy"

**Ventaja**: Cada cambio que hagas en GitHub se actualizará automáticamente.

## 🔥 Consejos Profesionales

### ✅ Antes de Compartir

- [ ] Prueba el enlace en tu teléfono
- [ ] Verifica que la imagen se vea bien
- [ ] Asegúrate de que el video se reproduzca
- [ ] Lee el mensaje final para verificar ortografía

### 📱 Optimización para Móviles

El proyecto ya está optimizado, pero verifica:
- Imagen: máximo 500KB
- Video: máximo 5MB para carga rápida en celulares

### 🎥 Si el Video no Funciona

Algunas razones comunes:

1. **Formato incorrecto**: Usa MP4 con codec H.264
2. **Muy pesado**: Comprime el video a menos de 10MB
3. **Ruta incorrecta**: Verifica que esté en `media/video-amor.mp4`

### 🖼️ Si la Imagen no Aparece

1. **Nombre incorrecto**: Debe ser exactamente `foto-inicial.jpg`
2. **Ubicación incorrecta**: Debe estar en `assets/images/`
3. **Extensión**: Prueba con `.jpg` o `.png`

## 📞 ¿Necesitas Ayuda?

### Recursos útiles:
- Documentación de Vercel: https://vercel.com/docs
- Generador de gradientes CSS: https://cssgradient.io/
- Compresor de imágenes: https://tinypng.com/
- Compresor de videos: https://www.freeconvert.com/

## 💡 Ideas Adicionales

### Añadir más páginas
Puedes crear un slideshow agregando más frames en el HTML.

### Añadir música
Reemplaza el video por un `<audio>` tag con tu canción favorita.

### Personalizar animaciones
En `css/styles.css`, busca `@keyframes` y modifica las duraciones.

---

## 🎉 ¡Listo!

Tu obsequio digital está listo para ser personalizado y compartido.

**Recuerda**: Lo más importante es el amor y pensamiento que le pongas. 💕

¡Mucha suerte con tu regalo! 🎁
