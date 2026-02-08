# Guía de Despliegue en Vercel

## Estado del Proyecto
✅ Listo para desplegar en Vercel
✅ Todos los cambios son compatibles con Vercel
✅ No requiere backend ni base de datos

## Pasos para Desplegar

### 1. Preparar el Archivo de Música
Antes de desplegar, **asegúrate de tener el archivo `media/musica-amor.mp3`**:

```
obsequio-digital-amor/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── media/
│   └── musica-amor.mp3  ← REQUERIDO
├── assets/
│   └── images/
│       └── pompom fin.jpg
├── vercel.json          ← YA EXISTE
└── README.md
```

### 2. Verificación Pre-Despliegue

Ejecuta estas pruebas en tu navegador local:

```bash
# 1. Abre el proyecto localmente
# En VS Code: Live Server o similar

# 2. Verifica:
- [ ] La página carga correctamente
- [ ] Aparecen 20 tulipanes moviéndose en el borde
- [ ] Los tulipanes NO se superponen con el texto
- [ ] Al hacer clic en la imagen, transiciona al frame del mensaje
- [ ] La música comienza a reproducirse automáticamente
- [ ] La música se repite en bucle
```

### 3. Conectar a Vercel

#### Opción A: Usando Vercel CLI (Recomendado)

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Desde la carpeta del proyecto:
cd d:\FLAQUITA\obsequio-digital-amor

# 3. Despliega
vercel

# 4. Sigue las instrucciones en pantalla
# - Elige crear un nuevo proyecto o conectar uno existente
# - Selecciona la rama principal (main)
```

#### Opción B: Usando GitHub + Vercel Web

```bash
# 1. Sube el proyecto a GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Ve a https://vercel.com
# 3. Conecta tu cuenta de GitHub
# 4. Selecciona el repositorio "obsequio-digital-amor"
# 5. Vercel importará automáticamente el proyecto
```

#### Opción C: Drag & Drop en Vercel

```bash
# 1. Ve a https://vercel.com/new
# 2. Arrastra la carpeta del proyecto
# 3. Vercel desplegará automáticamente
```

### 4. Configuración en Vercel (Si es necesaria)

El archivo `vercel.json` ya está configurado. Si necesitas cambios:

```json
{
  "env": {
    "ENV_VARIABLE": "@env-variable-name"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

## Verificación Post-Despliegue

Una vez desplegado en Vercel:

1. **Acceso a la URL**: Vercel te proporcionará una URL tipo `https://obsequio-digital-amor.vercel.app`

2. **Pruebas en Producción**:
   ```
   [ ] Página carga correctamente
   [ ] Tulipanes animados en los bordes
   [ ] Transición al hacer clic en la imagen
   [ ] Audio se reproduce automáticamente
   [ ] Audio tiene loop continuo
   [ ] Funciona en móvil (iPhone, Android)
   [ ] Sin errores en consola (F12 → Console)
   ```

3. **Pruebas de Rendimiento** (opcional):
   - Usa PageSpeed Insights: https://pagespeed.web.dev/
   - Verifica que el audio se carga correctamente
   - Verifica que las animaciones son suave

## Solución de Problemas

### El audio no se reproduce automáticamente
**Causa**: Algunos navegadores bloquean autoplay de audio
**Solución**: Aparecerá un botón "▶️ Reproducir música" para reproducir manualmente

### Los tulipanes desaparecen
**Causa**: Problema con las animaciones CSS
**Solución**: Verifica que `css/styles.css` está cargando correctamente

### La música no se escucha
**Causa**: 
- El archivo no existe
- Ruta incorrecta
- Navegador no soporta MP3

**Solución**: 
- Verifica que `media/musica-amor.mp3` existe
- Comprueba que el formato es MP3
- Intenta con otro navegador

### Errores 404 en consola
**Causa**: Archivos faltantes o rutas incorrectas
**Solución**: Verifica que todos los archivos existen en sus ubicaciones correctas

## Ambiente Variables (Opcional)

Si necesitas variables de entorno en el futuro:

```json
{
  "env": {
    "NEXT_PUBLIC_API_URL": "@api-url"
  }
}
```

Luego accede en JavaScript:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Dominio Personalizado (Opcional)

Para usar tu propio dominio:

1. Ve a Vercel Dashboard → Tu Proyecto → Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de Vercel para configurar DNS

## Revisiones Automáticas

Vercel creará automáticamente:
- **Deploy Preview**: Para cada Pull Request
- **Production Deploy**: Para cambios en `main`

## Después del Despliegue

### Compartir el Proyecto
Una vez desplegado, puedes compartir la URL:
```
https://obsequio-digital-amor.vercel.app
```

### Hacer Cambios Futuros
Los cambios se actualizarán automáticamente:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
# Vercel desplegará automáticamente
```

## Notas Importantes

⚠️ **Antes de compartir**, asegúrate de:
- [ ] El archivo `media/musica-amor.mp3` está presente
- [ ] La música se reproduce correctamente
- [ ] Los tulipanes aparecen en los bordes
- [ ] El mensaje es el correcto
- [ ] La imagen inicial es la deseada

✅ **Vercel te proporciona gratis**:
- Hosting ilimitado
- Ancho de banda gratis
- SSL/HTTPS automático
- Dominios .vercel.app
- Despliegues automáticos desde Git

---

**¿Necesitas ayuda?**
- Documentación de Vercel: https://vercel.com/docs
- Soporte de Vercel: https://vercel.com/support
