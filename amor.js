// Calcular tiempo desde el 14 de noviembre de 2025
function calcularTiempo() {
    const fechaInicio = new Date('2025-11-14T00:00:00');
    const ahora = new Date();
    
    const diferencia = ahora - fechaInicio;
    
    const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    
    return { meses, dias, horas, minutos };
}

// Actualizar contador detallado
function actualizarContador() {
    const tiempo = calcularTiempo();
    
    document.getElementById('meses').textContent = tiempo.meses;
    document.getElementById('dias').textContent = tiempo.dias;
    document.getElementById('horas').textContent = tiempo.horas;
    document.getElementById('minutos').textContent = tiempo.minutos;
}

// Frases románticas
const frasesRomanticas = [
    "Eres mi persona favorita en todo el universo 💫",
    "Contigo, cada momento es especial 💕",
    "Tu sonrisa ilumina mis días ☀️",
    "Eres el amor de mi vida 💖",
    "Juntos somos invencibles 💪❤️",
    "Cada día te amo más 🌹",
    "Eres mi hogar y mi refugio 🏠💕",
    "Gracias por existir y amarme 🙏💗",
    "Tú y yo, para siempre 💑",
    "Mi corazón late solo por ti 💓"
];

let indiceFrase = 0;

function cambiarFrase() {
    const fraseElement = document.getElementById('fraseRomantica');
    fraseElement.style.opacity = '0';
    
    setTimeout(() => {
        indiceFrase = (indiceFrase + 1) % frasesRomanticas.length;
        fraseElement.textContent = frasesRomanticas[indiceFrase];
        fraseElement.style.opacity = '1';
    }, 500);
}

// Crear partículas flotantes
function crearParticula() {
    const particulas = document.getElementById('particulas');
    const simbolos = ['💕', '💖', '💗', '💝', '💞', '❤️', '✨', '⭐', '🌟'];
    
    const particula = document.createElement('div');
    particula.className = 'particula';
    particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    particula.style.left = Math.random() * 100 + '%';
    particula.style.animationDuration = (Math.random() * 3 + 5) + 's';
    particula.style.opacity = Math.random() * 0.5 + 0.3;
    
    particulas.appendChild(particula);
    
    setTimeout(() => {
        particula.remove();
    }, 8000);
}

// Corazones flotantes interactivos
function crearCorazonFlotante() {
    const corazon = document.createElement('div');
    corazon.className = 'corazon-flotante';
    
    // Posición aleatoria considerando el scroll
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    
    corazon.style.left = (scrollX + Math.random() * (window.innerWidth - 60)) + 'px';
    corazon.style.top = (scrollY + Math.random() * (window.innerHeight - 60)) + 'px';
    
    // Tamaño aleatorio
    const tamaño = Math.random() * 30 + 50; // entre 50 y 80px
    corazon.style.width = tamaño + 'px';
    corazon.style.height = tamaño + 'px';
    
    // Delay de animación aleatorio
    corazon.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(corazon);
    
    // Evento click para explotar
    corazon.addEventListener('click', function(e) {
        const rect = corazon.getBoundingClientRect();
        explotarCorazon(rect.left + rect.width / 2, rect.top + rect.height / 2 + window.scrollY);
        corazon.remove();
        // Crear uno nuevo después de un momento
        setTimeout(crearCorazonFlotante, 2000);
    });
    
    // Eliminar después de un tiempo si no se clickea
    setTimeout(() => {
        if (corazon.parentNode) {
            corazon.remove();
            setTimeout(crearCorazonFlotante, 1000);
        }
    }, 15000);
}

// Explosión de corazón con "Te amo"
function explotarCorazon(x, y) {
    // Crear texto "Te amo"
    const explosion = document.createElement('div');
    explosion.className = 'explosion-amor';
    explosion.textContent = '¡Te amo!';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
    document.body.appendChild(explosion);
    
    // Crear partículas que se dispersan
    for (let i = 0; i < 12; i++) {
        const particula = document.createElement('div');
        particula.className = 'particulas-corazon';
        particula.style.left = x + 'px';
        particula.style.top = y + 'px';
        
        const angulo = (i * 30) * Math.PI / 180;
        const distancia = 100 + Math.random() * 50;
        const tx = Math.cos(angulo) * distancia;
        const ty = Math.sin(angulo) * distancia;
        
        particula.style.setProperty('--tx', tx + 'px');
        particula.style.setProperty('--ty', ty + 'px');
        particula.style.animation = `particula-explosion 0.8s ease-out forwards`;
        
        document.body.appendChild(particula);
        
        setTimeout(() => particula.remove(), 800);
    }
    
    setTimeout(() => explosion.remove(), 1000);
}

// Control de música
let musicaReproduciendo = false;
const audioFondo = document.getElementById('audioFondo');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', function() {
    if (musicaReproduciendo) {
        audioFondo.pause();
        musicBtn.classList.remove('playing');
        musicBtn.textContent = '🎵';
    } else {
        audioFondo.play().catch(e => console.log('Error al reproducir:', e));
        musicBtn.classList.add('playing');
        musicBtn.textContent = '⏸️';
    }
    musicaReproduciendo = !musicaReproduciendo;
});

// Modal mensaje del corazón
const corazon = document.getElementById('corazon');
const modalMensaje = document.getElementById('modalMensaje');
const closeMensaje = document.querySelector('.close-mensaje');

corazon.addEventListener('click', function() {
    modalMensaje.classList.add('active');
});

closeMensaje.addEventListener('click', function() {
    modalMensaje.classList.remove('active');
});

modalMensaje.addEventListener('click', function(e) {
    if (e.target === modalMensaje) {
        modalMensaje.classList.remove('active');
    }
});

// Efecto parallax en las fotos
document.addEventListener('mousemove', function(e) {
    const fotos = document.querySelectorAll('.foto-tarjeta');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    fotos.forEach((foto, index) => {
        const speed = (index + 1) * 2;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        foto.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Inicialización cuando carga la página
window.addEventListener('load', function() {
    // Actualizar contador
    actualizarContador();
    setInterval(actualizarContador, 60000); // Actualizar cada minuto
    
    // Mostrar primera frase
    document.getElementById('fraseRomantica').textContent = frasesRomanticas[0];
    document.getElementById('fraseRomantica').style.transition = 'opacity 0.5s';
    
    // Cambiar frase cada 5 segundos
    setInterval(cambiarFrase, 5000);
    
    // Crear partículas periódicamente
    setInterval(crearParticula, 800);
    
    // Crear corazones flotantes interactivos
    // Crear 3 corazones iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(() => crearCorazonFlotante(), i * 1000);
    }
    // Crear nuevos corazones cada cierto tiempo
    setInterval(() => {
        const corazonesActuales = document.querySelectorAll('.corazon-flotante').length;
        if (corazonesActuales < 5) { // Máximo 5 corazones a la vez
            crearCorazonFlotante();
        }
    }, 3000);
    
    // Modal para ampliar fotos (código existente)
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');
    const fotoTarjetas = document.querySelectorAll('.foto-tarjeta img');
    
    fotoTarjetas.forEach(function(foto) {
        foto.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
