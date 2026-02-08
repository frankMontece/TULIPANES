// ========================================
// GESTIÓN DE LAS PANTALLAS (FRAMES)
// ========================================

/**
 * Espera a que el DOM esté completamente cargado
 * antes de ejecutar el código
 */
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

/**
 * Función principal de inicialización
 */
function initApp() {
    // Obtener referencias a los elementos del DOM
    const imagenInicio = document.getElementById('imagen-inicio');
    const frameInicio = document.getElementById('frame-inicio');
    const frameMensaje = document.getElementById('frame-mensaje');
    const audioAmor = document.getElementById('audio-amor');

    // Generar tulipanes dinámicamente
    generarTulipanes();

    // Configurar el evento click en la imagen inicial
    if (imagenInicio) {
        imagenInicio.addEventListener('click', function() {
            transicionarAMensaje(frameInicio, frameMensaje, audioAmor);
        });
    }

    // Configurar el audio para que esté listo
    configurarAudio(audioAmor);
}

/**
 * Maneja la transición del frame de inicio al frame del mensaje
 * @param {HTMLElement} frameInicio - Frame inicial
 * @param {HTMLElement} frameMensaje - Frame del mensaje
 * @param {HTMLAudioElement} audio - Elemento de audio
 */
function transicionarAMensaje(frameInicio, frameMensaje, audio) {
    // Ocultar el frame de inicio
    frameInicio.classList.remove('active');
    
    // Mostrar el frame del mensaje después de un breve delay
    setTimeout(() => {
        frameMensaje.classList.add('active');
        
        // Intentar reproducir el audio
        reproducirAudio(audio);
    }, 300);
}

/**
 * Configura las propiedades del audio
 * @param {HTMLAudioElement} audio - Elemento de audio
 */
function configurarAudio(audio) {
    if (!audio) return;

    // Configurar para que se reproduzca en loop
    audio.loop = true;
    
    // Manejar errores de carga del audio
    audio.addEventListener('error', function() {
        console.warn('No se pudo cargar el audio. Verifica que el archivo exista en media/musica-amor.mp3');
    });
}

/**
 * Intenta reproducir el audio
 * @param {HTMLAudioElement} audio - Elemento de audio
 */
function reproducirAudio(audio) {
    if (!audio) return;

    // Intentar reproducir el audio
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Audio reproducido exitosamente
                console.log('Audio reproducido automáticamente');
            })
            .catch(error => {
                // Autoplay fue bloqueado
                console.warn('Autoplay bloqueado por el navegador:', error);
                
                // Opción: mostrar un botón para reproducir manualmente
                mostrarBotonReproduccionAudio(audio);
            });
    }
}

/**
 * OPCIONAL: Función para mostrar un botón de reproducción manual
 * si el autoplay es bloqueado por el navegador
 * @param {HTMLAudioElement} audio - Elemento de audio
 */
function mostrarBotonReproduccionAudio(audio) {
    // Crear botón de reproducción
    const boton = document.createElement('button');
    boton.textContent = '▶️ Reproducir música';
    boton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background: var(--color-primario);
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    boton.addEventListener('click', function() {
        audio.play();
        boton.remove();
    });
    
    document.body.appendChild(boton);
}

// ========================================
// ANIMACIONES ADICIONALES (OPCIONAL)
// ========================================

/**
 * Añade una animación de entrada al texto
 * cuando se muestra el frame del mensaje
 */
function animarTexto() {
    const parrafos = document.querySelectorAll('.texto-mensaje p');
    
    parrafos.forEach((parrafo, index) => {
        parrafo.style.opacity = '0';
        parrafo.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            parrafo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            parrafo.style.opacity = '1';
            parrafo.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
}

// ========================================
// UTILIDADES
// ========================================

/**
 * Detecta si el usuario está en un dispositivo móvil
 * @returns {boolean}
 */
function esMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Previene el zoom en dispositivos móviles (opcional)
 */
function previenirZoom() {
    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, { passive: false });
}

// ========================================
// GENERACIÓN DINÁMICA DE TULIPANES
// ========================================

/**
 * Genera tulipanes dinámicamente y los distribuye por la pantalla
 */
function generarTulipanes() {
    const contenedor = document.getElementById('tulipanes-contenedor');
    if (!contenedor) return;

    // Cantidad de tulipanes a generar (20 tulipanes para abundancia)
    const cantidadTulipanes = 45;
    
    for (let i = 0; i < cantidadTulipanes; i++) {
        // Crear elemento tulipán
        const tulipan = document.createElement('div');
        tulipan.className = 'tulipan';
        tulipan.textContent = '🌷';
        
        // Posición inicial aleatoria pero fuera de la zona del texto
        // Evitamos el centro donde está el mensaje (35%-65% horizontalmente, 30%-70% verticalmente)
        let posX, posY;
        const zona = Math.random();
        
        if (zona < 0.25) {
            // Esquina superior izquierda
            posX = Math.random() * 30;
            posY = Math.random() * 25;
        } else if (zona < 0.5) {
            // Esquina superior derecha
            posX = 70 + Math.random() * 30;
            posY = Math.random() * 25;
        } else if (zona < 0.75) {
            // Esquina inferior izquierda
            posX = Math.random() * 30;
            posY = 75 + Math.random() * 25;
        } else {
            // Esquina inferior derecha
            posX = 70 + Math.random() * 30;
            posY = 75 + Math.random() * 25;
        }
        
        // Aplicar posición inicial
        tulipan.style.left = posX + '%';
        tulipan.style.top = posY + '%';
        
        // Agregar al contenedor
        contenedor.appendChild(tulipan);
    }
}
