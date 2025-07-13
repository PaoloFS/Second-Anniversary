// ===== SEGUNDO ANIVERSARIO PREMIUM - JAVASCRIPT =====

// Configuración de dayjs
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.extend(window.dayjs_plugin_duration);

// Variables globales
let countdownInterval;
let currentImageIndex = 0;
let autoPlayInterval;
const totalImages = 3;

// Variables para efectos especiales
let starrySkyScene, starrySkyCamera, starrySkyRenderer;
let starrySkyStars = [];
let typedInstance;

// Fecha objetivo para el segundo aniversario - 11 de agosto a la 1 PM
const targetDate = dayjs('2025-08-11 13:00:00');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Iniciando Segundo Aniversario Premium');
    
    // Inicializar librerías
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Configurar partículas
    setupParticles();
    
    // Crear corazones flotantes
    createFloatingHearts();
    
    // Crear estrellas brillantes
    createShiningStars();
    
    // Iniciar contador
    startCountdown();
    
    // Configurar eventos
    setupEventListeners();
    
    // Iniciar auto-play de galería
    startGalleryAutoPlay();
    
    // Inicializar cielo de estrellas 3D
    initStarrySky();
    
    // Fireflies para Why I Love You
    initFireflies();
    
    // Botón scroll to top
    initScrollToTop();
    
    console.log('✨ Todo inicializado correctamente');
    
    // Modales de Special Moments
    const constellationModal = document.getElementById('constellation-modal');
    const auroraModal = document.getElementById('aurora-modal');
    document.querySelector('.open-constellation-modal').onclick = () => {
        constellationModal.style.display = 'flex';
    };
    document.querySelector('#constellation-modal .close-modal').onclick = () => {
        constellationModal.style.display = 'none';
    };
    document.querySelector('.open-aurora-modal').onclick = () => {
        auroraModal.style.display = 'flex';
        startAurora();
    };
    document.querySelector('#aurora-modal .close-modal').onclick = () => {
        auroraModal.style.display = 'none';
        stopAurora();
    };
    
    // Cards de Special Moments
    const constellationCard = document.getElementById('constellation-card');
    const auroraCard = document.getElementById('aurora-card');
    if (constellationCard && constellationModal) {
        constellationCard.onclick = () => {
            constellationModal.style.display = 'flex';
        };
        constellationModal.querySelector('.close-modal').onclick = () => {
            constellationModal.style.display = 'none';
        };
    }
    if (auroraCard && auroraModal) {
        auroraCard.onclick = () => {
            auroraModal.style.display = 'flex';
            renderAuroraCanvasInCurtain();
        };
        auroraModal.querySelector('.close-modal').onclick = () => {
            auroraModal.style.display = 'none';
            stopAurora();
        };
    }
});

// Configurar partículas con corazones
function setupParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#8B5CF6', '#A855F7', '#EC4899', '#F59E0B']
                },
                shape: {
                    type: 'image',
                    image: {
                        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxLjM1TDEwLjU1IDIwLjAzQzUuNCAxNS4zNiAyIDEyLjI3IDIgOC41QzIgNS40MiA0LjQyIDMgNy41IDNDOS4yNCAzIDEwLjkxIDMuODEgMTIgNS4wOEMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzQzE5LjU4IDMgMjIgNS40MiAyMiA4LjVDMjIgMTIuMjcgMTguNiAxNS4zNiAxMy40NSAyMC4wNEwxMiAyMS4zNVoiIGZpbGw9IiM4QjVDRjYiLz4KPC9zdmc+',
                        width: 24,
                        height: 24
                    }
                },
                opacity: {
                    value: 0.8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 15,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Crear partículas flotantes ultra optimizadas
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 8;  // Reducido drásticamente
    const starCount = 5;   // Reducido drásticamente
    const flowerCount = 3; // Reducido drásticamente
    
    // Crear corazones
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            createHeart(container);
        }, i * 600); // Aumentado significativamente
    }
    
    // Crear estrellas
    for (let i = 0; i < starCount; i++) {
        setTimeout(() => {
            createStar(container);
        }, i * 800); // Aumentado significativamente
    }
    
    // Crear flores
    for (let i = 0; i < flowerCount; i++) {
        setTimeout(() => {
            createFlower(container);
        }, i * 1000); // Aumentado significativamente
    }
}

function createHeart(container) {
    const heart = document.createElement('div');
    const hearts = ['💜', '💕', '💖', '💗', '💘'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = 'floating-heart';
    heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 25 + 15}px;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: 0;
        animation: floatHeart ${Math.random() * 12 + 8}s linear infinite;
        z-index: 1;
        filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
    `;
    
    container.appendChild(heart);
    
    // Remover después de la animación
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 20000);
}

function createStar(container) {
    const star = document.createElement('div');
    const stars = ['✨', '⭐', '🌟', '💫'];
    star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
    star.className = 'floating-star';
    star.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 12}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        animation: twinkleStar ${Math.random() * 8 + 4}s ease-in-out infinite;
        z-index: 1;
        filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.6));
    `;
    
    container.appendChild(star);
}

function createFlower(container) {
    const flower = document.createElement('div');
    const flowers = ['🌸', '🌺', '🌹', '🌷', '🌼'];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.className = 'floating-flower';
    flower.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 22 + 16}px;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: 0;
        animation: floatFlower ${Math.random() * 15 + 10}s linear infinite;
        z-index: 1;
        filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.4));
    `;
    
    container.appendChild(flower);
    
    // Remover después de la animación
    setTimeout(() => {
        if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
        }
    }, 25000);
}

// Crear estrellas brillantes ultra optimizadas
function createShiningStars() {
    const container = document.getElementById('stars-container');
    const starCount = 8; // Reducido drásticamente
    
    for (let i = 0; i < starCount; i++) {
        setTimeout(() => {
            createBackgroundStar(container);
        }, i * 300); // Aumentado significativamente
    }
}

function createBackgroundStar(container) {
    const star = document.createElement('div');
    const stars = ['✨', '⭐', '🌟', '💫'];
    star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
    star.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 18 + 8}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        animation: twinkleStar ${Math.random() * 10 + 6}s ease-in-out infinite;
        z-index: 1;
        filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.4));
    `;
    
    container.appendChild(star);
}

// ===== CIELO DE ESTRELLAS 3D CON CONSTELACIONES =====
function initStarrySky() {
    if (typeof THREE === 'undefined') {
        console.log('Three.js no disponible, saltando cielo de estrellas');
        return;
    }
    
    const container = document.getElementById('starry-sky-container');
    
    // Crear escena
    starrySkyScene = new THREE.Scene();
    
    // Crear cámara
    starrySkyCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    starrySkyCamera.position.z = 5;
    
    // Crear renderer
    starrySkyRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    starrySkyRenderer.setSize(window.innerWidth, window.innerHeight);
    starrySkyRenderer.setClearColor(0x000000, 0);
    container.appendChild(starrySkyRenderer.domElement);
    
    // Crear constelaciones personalizadas
    createConstellation('EDEN', [
        {x: -2, y: 1.5, z: 0},
        {x: -1.5, y: 1, z: 0},
        {x: -1, y: 0.5, z: 0},
        {x: -0.5, y: 0, z: 0}
    ]);
    
    createConstellation('11/08', [
        {x: 0.5, y: 1.5, z: 0},
        {x: 1, y: 1.5, z: 0},
        {x: 1.5, y: 1.5, z: 0},
        {x: 2, y: 1.5, z: 0},
        {x: 0.5, y: 0.5, z: 0},
        {x: 1, y: 0.5, z: 0},
        {x: 1.5, y: 0.5, z: 0},
        {x: 2, y: 0.5, z: 0}
    ]);
    
    createConstellation('NOSOTROS', [
        {x: -1.5, y: -1, z: 0},
        {x: -1, y: -1.2, z: 0},
        {x: -0.5, y: -1.4, z: 0},
        {x: 0, y: -1.6, z: 0},
        {x: 0.5, y: -1.4, z: 0},
        {x: 1, y: -1.2, z: 0},
        {x: 1.5, y: -1, z: 0}
    ]);
    
    // Crear estrellas adicionales aleatorias
    createRandomStars(50);
    
    // Iniciar animación
    animateStarrySky();
    
    // Manejar redimensionamiento
    window.addEventListener('resize', onStarrySkyResize);
}

function createConstellation(name, positions) {
    const group = new THREE.Group();
    
    positions.forEach((pos, index) => {
        // Crear estrella
        const starGeometry = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.9, 0.8, 0.8),
            transparent: true,
            opacity: 0.8
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(pos.x, pos.y, pos.z);
        
        // Agregar brillo
        const glowGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.05, 8, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: starMaterial.color,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(star.position);
        
        group.add(star);
        group.add(glow);
        starrySkyStars.push({ star, glow, originalPos: { ...pos } });
    });
    
    // Conectar estrellas con líneas
    for (let i = 0; i < positions.length - 1; i++) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(positions[i].x, positions[i].y, positions[i].z),
            new THREE.Vector3(positions[i + 1].x, positions[i + 1].y, positions[i + 1].z)
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x8B5CF6,
            transparent: true,
            opacity: 0.3
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
    }
    
    starrySkyScene.add(group);
}

function createRandomStars(count) {
    for (let i = 0; i < count; i++) {
        const starGeometry = new THREE.SphereGeometry(0.01 + Math.random() * 0.02, 6, 6);
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.9, 0.6, 0.7),
            transparent: true,
            opacity: 0.6
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        
        star.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        );
        
        starrySkyScene.add(star);
        starrySkyStars.push({ star, glow: null, originalPos: { ...star.position } });
    }
}

function animateStarrySky() {
    requestAnimationFrame(animateStarrySky);
    
    // Animar estrellas
    starrySkyStars.forEach((starObj, index) => {
        if (starObj.star) {
            // Rotación suave
            starObj.star.rotation.y += 0.001;
            starObj.star.rotation.x += 0.0005;
            
            // Efecto de parpadeo
            const time = Date.now() * 0.001;
            const twinkle = Math.sin(time + index) * 0.3 + 0.7;
            starObj.star.material.opacity = twinkle;
            
            // Movimiento flotante
            starObj.star.position.y += Math.sin(time + index) * 0.0005;
            starObj.star.position.x += Math.cos(time + index * 0.5) * 0.0003;
        }
        
        if (starObj.glow) {
            const time = Date.now() * 0.001;
            starObj.glow.rotation.y += 0.002;
            starObj.glow.material.opacity = Math.sin(time + index) * 0.2 + 0.1;
        }
    });
    
    // Rotar cámara suavemente
    starrySkyCamera.position.x = Math.sin(Date.now() * 0.0001) * 0.5;
    starrySkyCamera.position.y = Math.cos(Date.now() * 0.0001) * 0.3;
    starrySkyCamera.lookAt(0, 0, 0);
    
    starrySkyRenderer.render(starrySkyScene, starrySkyCamera);
}

function onStarrySkyResize() {
    starrySkyCamera.aspect = window.innerWidth / window.innerHeight;
    starrySkyCamera.updateProjectionMatrix();
    starrySkyRenderer.setSize(window.innerWidth, window.innerHeight);
}

function showStarrySky() {
    const container = document.getElementById('starry-sky-container');
    container.classList.add('active');
}

function hideStarrySky() {
    const container = document.getElementById('starry-sky-container');
    container.classList.remove('active');
}

function toggleStarrySky() {
    const container = document.getElementById('starry-sky-container');
    const toggleBtn = document.getElementById('starry-sky-toggle');
    
    if (container.classList.contains('active')) {
        hideStarrySky();
        toggleBtn.classList.remove('active');
        toggleBtn.innerHTML = '<i class="fas fa-star"></i>';
  } else {
        showStarrySky();
        toggleBtn.classList.add('active');
        toggleBtn.innerHTML = '<i class="fas fa-star"></i>';
    }
}

// ===== MODAL DE CIELO DE ESTRELLAS =====
function openStarrySkyModal() {
    const modal = document.getElementById('starry-sky-modal');
    const viewer = document.getElementById('starry-sky-viewer');
    
    modal.classList.add('active');
    
    // Pequeño retraso para asegurar que el modal esté visible
    setTimeout(() => {
        // Crear cielo de estrellas específico para la modal
        createModalStarrySky(viewer);
    }, 100);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Fallback con CSS si Three.js falla
    setTimeout(() => {
        if (viewer.children.length === 0) {
            console.log('🔄 Usando fallback CSS...');
            createCSSStarrySky(viewer);
        }
    }, 2000);
}

function closeStarrySkyModal() {
    const modal = document.getElementById('starry-sky-modal');
    modal.classList.remove('active');
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
    
    // Limpiar el viewer
    const viewer = document.getElementById('starry-sky-viewer');
    viewer.innerHTML = '';
}

function createModalStarrySky(container) {
    console.log('🌌 Creando cielo estrellado modal...');
    console.log('Contenedor:', container);
    console.log('Dimensiones:', container.clientWidth, 'x', container.clientHeight);
    console.log('Three.js disponible:', typeof THREE !== 'undefined');
    
    if (typeof THREE === 'undefined') {
        console.error('❌ Three.js no está disponible');
        container.innerHTML = '<div style="color: white; text-align: center; padding: 50px; font-size: 1.2rem;">Three.js no disponible - Cargando...</div>';
        
        // Intentar cargar Three.js dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => {
            console.log('✅ Three.js cargado dinámicamente');
            createModalStarrySky(container);
        };
        script.onerror = () => {
            console.error('❌ Error cargando Three.js');
            container.innerHTML = '<div style="color: white; text-align: center; padding: 50px; font-size: 1.2rem;">Error cargando Three.js</div>';
        };
        document.head.appendChild(script);
        return;
    }
    
    // Asegurar que el contenedor tenga dimensiones
    if (container.clientWidth === 0 || container.clientHeight === 0) {
        container.style.width = '100%';
        container.style.height = '100%';
    }
    
    // Crear escena para la modal
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    
    // Crear estrellas básicas primero para verificar que funciona
    console.log('✨ Creando estrellas básicas...');
    
    // Crear algunas estrellas simples para probar
    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.CircleGeometry(0.02, 8);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        );
        scene.add(star);
    }
    
    // Crear estrellas dibujadas (puntos brillantes)
    createDrawnStars(scene, 150);
    
    // Función de animación
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotar cámara suavemente
        camera.position.x = Math.sin(Date.now() * 0.0001) * 1;
        camera.position.y = Math.cos(Date.now() * 0.0001) * 0.5;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }
    
    console.log('🎬 Iniciando animación...');
    animate();
    
    // Manejar redimensionamiento
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        
        // Recrear constelaciones si cambia el tamaño de pantalla
        if (container.children.length > 1) { // Si hay elementos en el contenedor
            // Limpiar escena actual
            while(scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
            
            // Recrear estrellas y constelaciones
            createDrawnStars(scene, 150);
        }
    });
}

// Función de fallback con CSS
function createCSSStarrySky(container) {
    console.log('🌟 Creando cielo estrellado con CSS...');
    
    // Detectar tamaño de pantalla
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    container.innerHTML = '';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.background = 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)';
    
    // Crear estrellas con CSS
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${2 + Math.random() * 3}px;
            height: ${2 + Math.random() * 3}px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${0.3 + Math.random() * 0.7};
            animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
            z-index: 1;
        `;
        container.appendChild(star);
    }
    
    // Crear constelación "Eye" con CSS (posiciones responsive)
    let eyePositions;
    
    if (isSmallMobile) {
        // Posiciones para móvil pequeño
        eyePositions = [
            // Primera E (izquierda)
            {x: 10, y: 50}, {x: 10, y: 40}, {x: 10, y: 30}, {x: 10, y: 20}, {x: 10, y: 10}, // E vertical
            {x: 10, y: 50}, {x: 20, y: 50}, {x: 30, y: 50}, // E superior
            {x: 10, y: 30}, {x: 20, y: 30}, {x: 30, y: 30}, // E media
            {x: 10, y: 10}, {x: 20, y: 10}, {x: 30, y: 10}, // E inferior
            
            // y (centro)
            {x: 45, y: 50}, {x: 50, y: 40}, {x: 55, y: 30}, // y diagonal izquierda
            {x: 65, y: 50}, {x: 60, y: 40}, {x: 55, y: 30}, // y diagonal derecha
            {x: 55, y: 30}, {x: 55, y: 20}, {x: 55, y: 10}, // y vertical
            
            // Segunda E (derecha)
            {x: 70, y: 50}, {x: 70, y: 40}, {x: 70, y: 30}, {x: 70, y: 20}, {x: 70, y: 10}, // E2 vertical
            {x: 70, y: 50}, {x: 80, y: 50}, {x: 90, y: 50}, // E2 superior
            {x: 70, y: 30}, {x: 80, y: 30}, {x: 90, y: 30}, // E2 media
            {x: 70, y: 10}, {x: 80, y: 10}, {x: 90, y: 10}, // E2 inferior
        ];
    } else if (isMobile) {
        // Posiciones para móvil
        eyePositions = [
            // Primera E (izquierda)
            {x: 12, y: 50}, {x: 12, y: 40}, {x: 12, y: 30}, {x: 12, y: 20}, {x: 12, y: 10}, // E vertical
            {x: 12, y: 50}, {x: 22, y: 50}, {x: 32, y: 50}, // E superior
            {x: 12, y: 30}, {x: 22, y: 30}, {x: 32, y: 30}, // E media
            {x: 12, y: 10}, {x: 22, y: 10}, {x: 32, y: 10}, // E inferior
            
            // y (centro)
            {x: 47, y: 50}, {x: 52, y: 40}, {x: 57, y: 30}, // y diagonal izquierda
            {x: 67, y: 50}, {x: 62, y: 40}, {x: 57, y: 30}, // y diagonal derecha
            {x: 57, y: 30}, {x: 57, y: 20}, {x: 57, y: 10}, // y vertical
            
            // Segunda E (derecha)
            {x: 72, y: 50}, {x: 72, y: 40}, {x: 72, y: 30}, {x: 72, y: 20}, {x: 72, y: 10}, // E2 vertical
            {x: 72, y: 50}, {x: 82, y: 50}, {x: 92, y: 50}, // E2 superior
            {x: 72, y: 30}, {x: 82, y: 30}, {x: 92, y: 30}, // E2 media
            {x: 72, y: 10}, {x: 82, y: 10}, {x: 92, y: 10}, // E2 inferior
        ];
    } else {
        // Posiciones para desktop
        eyePositions = [
            // Primera E (izquierda)
            {x: 15, y: 50}, {x: 15, y: 40}, {x: 15, y: 30}, {x: 15, y: 20}, {x: 15, y: 10}, // E vertical
            {x: 15, y: 50}, {x: 25, y: 50}, {x: 35, y: 50}, // E superior
            {x: 15, y: 30}, {x: 25, y: 30}, {x: 35, y: 30}, // E media
            {x: 15, y: 10}, {x: 25, y: 10}, {x: 35, y: 10}, // E inferior
            
            // y (centro)
            {x: 50, y: 50}, {x: 55, y: 40}, {x: 60, y: 30}, // y diagonal izquierda
            {x: 70, y: 50}, {x: 65, y: 40}, {x: 60, y: 30}, // y diagonal derecha
            {x: 60, y: 30}, {x: 60, y: 20}, {x: 60, y: 10}, // y vertical
            
            // Segunda E (derecha)
            {x: 75, y: 50}, {x: 75, y: 40}, {x: 75, y: 30}, {x: 75, y: 20}, {x: 75, y: 10}, // E2 vertical
            {x: 75, y: 50}, {x: 85, y: 50}, {x: 95, y: 50}, // E2 superior
            {x: 75, y: 30}, {x: 85, y: 30}, {x: 95, y: 30}, // E2 media
            {x: 75, y: 10}, {x: 85, y: 10}, {x: 95, y: 10}, // E2 inferior
        ];
    }
    
    eyePositions.forEach((pos, index) => {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            left: ${pos.x}%;
            top: ${pos.y}%;
            opacity: 0.9;
            box-shadow: 0 0 10px #FFD700;
            z-index: 2;
        `;
        container.appendChild(star);
    });
    
    // Crear fecha "11/08" con CSS (posiciones responsive)
    let datePositions;
    
    if (isSmallMobile) {
        // Posiciones para móvil pequeño
        datePositions = [
            // Primer 1
            {x: 15, y: 85}, {x: 15, y: 80}, {x: 15, y: 75}, {x: 15, y: 70}, {x: 15, y: 65}, // 1
            // Segundo 1
            {x: 20, y: 85}, {x: 20, y: 80}, {x: 20, y: 75}, {x: 20, y: 70}, {x: 20, y: 65}, // 1
            // Slash /
            {x: 25, y: 85}, {x: 26, y: 80}, {x: 27, y: 75}, {x: 28, y: 70}, {x: 29, y: 65}, // /
            // 0
            {x: 35, y: 85}, {x: 35, y: 80}, {x: 35, y: 75}, {x: 35, y: 70}, {x: 35, y: 65}, // 0
            // 8
            {x: 45, y: 85}, {x: 45, y: 80}, {x: 45, y: 75}, {x: 45, y: 70}, {x: 45, y: 65}, // 8
        ];
    } else if (isMobile) {
        // Posiciones para móvil
        datePositions = [
            // Primer 1
            {x: 18, y: 82}, {x: 18, y: 77}, {x: 18, y: 72}, {x: 18, y: 67}, {x: 18, y: 62}, // 1
            // Segundo 1
            {x: 23, y: 82}, {x: 23, y: 77}, {x: 23, y: 72}, {x: 23, y: 67}, {x: 23, y: 62}, // 1
            // Slash /
            {x: 28, y: 82}, {x: 29, y: 77}, {x: 30, y: 72}, {x: 31, y: 67}, {x: 32, y: 62}, // /
            // 0
            {x: 38, y: 82}, {x: 38, y: 77}, {x: 38, y: 72}, {x: 38, y: 67}, {x: 38, y: 62}, // 0
            // 8
            {x: 48, y: 82}, {x: 48, y: 77}, {x: 48, y: 72}, {x: 48, y: 67}, {x: 48, y: 62}, // 8
        ];
    } else {
        // Posiciones para desktop
        datePositions = [
            // Primer 1
            {x: 20, y: 80}, {x: 20, y: 75}, {x: 20, y: 70}, {x: 20, y: 65}, {x: 20, y: 60}, // 1
            // Segundo 1
            {x: 25, y: 80}, {x: 25, y: 75}, {x: 25, y: 70}, {x: 25, y: 65}, {x: 25, y: 60}, // 1
            // Slash /
            {x: 30, y: 80}, {x: 31, y: 75}, {x: 32, y: 70}, {x: 33, y: 65}, {x: 34, y: 60}, // /
            // 0
            {x: 40, y: 80}, {x: 40, y: 75}, {x: 40, y: 70}, {x: 40, y: 65}, {x: 40, y: 60}, // 0
            // 8
            {x: 50, y: 80}, {x: 50, y: 75}, {x: 50, y: 70}, {x: 50, y: 65}, {x: 50, y: 60}, // 8
        ];
    }
    
    datePositions.forEach((pos, index) => {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #FFD700;
            border-radius: 50%;
            left: ${pos.x}%;
            top: ${pos.y}%;
            opacity: 0.8;
            box-shadow: 0 0 8px #FFD700;
            z-index: 2;
        `;
        container.appendChild(star);
    });
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function createDrawnStars(scene, count) {
    console.log('⭐ Creando estrellas...');
    console.log('Escena:', scene);
    console.log('Count:', count);
    
    // Detectar tamaño de pantalla
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    console.log('📱 Mobile:', isMobile, 'Small Mobile:', isSmallMobile);
    
    // Crear estrellas de fondo aleatorias como puntos con círculos
    const starCount = isSmallMobile ? Math.floor(count * 0.6) : isMobile ? Math.floor(count * 0.8) : count;
    console.log('🌟 Star count:', starCount);
    
    for (let i = 0; i < starCount; i++) {
        const brightness = 0.3 + Math.random() * 0.7; // Variar brillo entre 0.3 y 1.0
        
        // Punto central (más pequeño en móviles)
        const pointSize = isSmallMobile ? 0.003 + Math.random() * 0.005 : 
                         isMobile ? 0.004 + Math.random() * 0.007 : 
                         0.005 + Math.random() * 0.01;
        const pointGeometry = new THREE.CircleGeometry(pointSize, 8);
        const pointMaterial = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0xFFFFFF),
            transparent: true,
            opacity: brightness,
            side: THREE.DoubleSide
        });
        
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        
        // Distribución ajustada según pantalla
        const areaX = isSmallMobile ? 12 : isMobile ? 16 : 20;
        const areaY = isSmallMobile ? 8 : isMobile ? 12 : 15;
        const areaZ = isSmallMobile ? 6 : isMobile ? 8 : 10;
        
        point.position.set(
            (Math.random() - 0.5) * areaX,
            (Math.random() - 0.5) * areaY,
            (Math.random() - 0.5) * areaZ
        );
        
        // Círculo de brillo alrededor (más pequeño en móviles)
        const glowSize = isSmallMobile ? 0.01 + Math.random() * 0.015 : 
                        isMobile ? 0.015 + Math.random() * 0.02 : 
                        0.02 + Math.random() * 0.03;
        const glowGeometry = new THREE.CircleGeometry(glowSize, 12);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0xFFFFFF),
            transparent: true,
            opacity: brightness * 0.4,
            side: THREE.DoubleSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(point.position);
        
        scene.add(point);
        scene.add(glow);
        
        // Animación de parpadeo para algunas estrellas
        if (Math.random() > 0.7) { // 30% de las estrellas parpadean
            const originalOpacity = brightness;
            const originalGlowOpacity = brightness * 0.4;
            
            setInterval(() => {
                const flicker = 0.5 + Math.random() * 0.5;
                pointMaterial.opacity = originalOpacity * flicker;
                glowMaterial.opacity = originalGlowOpacity * flicker;
            }, 1000 + Math.random() * 3000);
        }
    }
    
    // Definir la estructura correcta de cada letra
    const letterStructures = {
        'E': {
            points: [
                // Línea vertical izquierda (5 puntos)
                {x: 0, y: 1, z: 0}, {x: 0, y: 0.5, z: 0}, {x: 0, y: 0, z: 0}, {x: 0, y: -0.5, z: 0}, {x: 0, y: -1, z: 0},
                // Línea horizontal superior
                {x: 0, y: 1, z: 0}, {x: 0.3, y: 1, z: 0}, {x: 0.6, y: 1, z: 0},
                // Línea horizontal media
                {x: 0, y: 0, z: 0}, {x: 0.3, y: 0, z: 0}, {x: 0.6, y: 0, z: 0},
                // Línea horizontal inferior
                {x: 0, y: -1, z: 0}, {x: 0.3, y: -1, z: 0}, {x: 0.6, y: -1, z: 0}
            ],
            connections: [
                // Línea vertical (5 puntos)
                [0, 1], [1, 2], [2, 3], [3, 4],
                // Línea superior
                [5, 6], [6, 7],
                // Línea media
                [8, 9], [9, 10],
                // Línea inferior
                [11, 12], [12, 13]
            ]
        },
        'y': {
            points: [
                // Línea diagonal izquierda (más pequeña y mucho más baja)
                {x: 0, y: 0.2, z: 0}, {x: 0.15, y: -0.2, z: 0}, {x: 0.3, y: -0.6, z: 0},
                // Línea diagonal derecha (más pequeña y mucho más baja)
                {x: 0.6, y: 0.2, z: 0}, {x: 0.45, y: -0.2, z: 0}, {x: 0.3, y: -0.6, z: 0},
                // Línea vertical (más corta y mucho más baja)
                {x: 0.3, y: -0.6, z: 0}, {x: 0.3, y: -0.8, z: 0}, {x: 0.3, y: -1.0, z: 0}
            ],
            connections: [
                // Diagonal izquierda
                [0, 1], [1, 2],
                // Diagonal derecha
                [3, 4], [4, 5],
                // Línea vertical
                [6, 7], [7, 8]
            ]
        }
    };
    
    // Calcular posiciones responsive para "Eye"
    let letterWidth = 1.0; // Ancho de cada letra
    let letterSpacing = 0.4; // Espacio entre letras
    
    if (isSmallMobile) {
        letterWidth = 0.6;
        letterSpacing = 0.2;
    } else if (isMobile) {
        letterWidth = 0.8;
        letterSpacing = 0.3;
    }
    
    const totalWidth = letterWidth * 3 + letterSpacing * 2; // 3 letras + 2 espacios
    const startX = -totalWidth / 2 - (isMobile ? 1.5 : 2); // Ajustar según pantalla
    
    // Posiciones de cada letra en "Eye"
    const eyePositions = [
        { letter: 'E', x: startX, y: 0 },
        { letter: 'y', x: startX + letterWidth + letterSpacing, y: 0 },
        { letter: 'E', x: startX + (letterWidth + letterSpacing) * 2, y: 0 }
    ];
    
    // Crear estrellas y líneas para "EYE"
    eyePositions.forEach((pos, letterIndex) => {
        const structure = letterStructures[pos.letter];
        
        // Crear estrellas para esta letra como puntos con círculos
        structure.points.forEach((point, pointIndex) => {
            const brightness = 0.6 + Math.random() * 0.4; // Brillo variable
            
            // Punto central dorado
            const pointSize = 0.008 + Math.random() * 0.006;
            const pointGeometry = new THREE.CircleGeometry(pointSize, 8);
            const pointMaterial = new THREE.MeshBasicMaterial({ 
                color: new THREE.Color(0xFFD700),
                transparent: true,
                opacity: brightness,
                side: THREE.DoubleSide
            });
            
            const starPoint = new THREE.Mesh(pointGeometry, pointMaterial);
            starPoint.position.set(point.x + pos.x, point.y + pos.y, point.z);
            
            // Círculo de brillo dorado alrededor
            const glowSize = 0.02 + Math.random() * 0.015;
            const glowGeometry = new THREE.CircleGeometry(glowSize, 12);
            const glowMaterial = new THREE.MeshBasicMaterial({ 
                color: new THREE.Color(0xFFD700),
                transparent: true,
                opacity: brightness * 0.5,
                side: THREE.DoubleSide
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.position.copy(starPoint.position);
            
            scene.add(starPoint);
            scene.add(glow);
            
            // Algunas estrellas de constelación parpadean
            if (Math.random() > 0.8) { // 20% de las estrellas de constelación parpadean
                const originalOpacity = brightness;
                const originalGlowOpacity = brightness * 0.5;
                
                setInterval(() => {
                    const flicker = 0.7 + Math.random() * 0.3;
                    pointMaterial.opacity = originalOpacity * flicker;
                    glowMaterial.opacity = originalGlowOpacity * flicker;
                }, 2000 + Math.random() * 4000);
            }
        });
        
        // Crear líneas de conexión para esta letra con opacidad variable
        structure.connections.forEach(connection => {
            const startPoint = structure.points[connection[0]];
            const endPoint = structure.points[connection[1]];
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(startPoint.x + pos.x, startPoint.y + pos.y, startPoint.z),
                new THREE.Vector3(endPoint.x + pos.x, endPoint.y + pos.y, endPoint.z)
            ]);
            const lineOpacity = 0.6 + Math.random() * 0.3; // Opacidad variable
            const lineMaterial = new THREE.LineBasicMaterial({ 
                color: 0xFFD700,
                transparent: true,
                opacity: lineOpacity
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
        });
    });
    
    // Definir estructura para "11/08" (más pequeña y arriba)
    const dateStructure = {
        '1': {
            points: [
                {x: 0, y: 0.5, z: 0}, {x: 0, y: 0.25, z: 0}, {x: 0, y: 0, z: 0}, {x: 0, y: -0.25, z: 0}, {x: 0, y: -0.5, z: 0}
            ],
            connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
        },
        '0': {
            points: [
                {x: 0, y: 0.5, z: 0}, {x: 0.3, y: 0.5, z: 0}, {x: 0.6, y: 0.5, z: 0},
                {x: 0.6, y: 0.25, z: 0}, {x: 0.6, y: 0, z: 0}, {x: 0.6, y: -0.25, z: 0},
                {x: 0.6, y: -0.5, z: 0}, {x: 0.3, y: -0.5, z: 0}, {x: 0, y: -0.5, z: 0},
                {x: 0, y: -0.25, z: 0}, {x: 0, y: 0, z: 0}, {x: 0, y: 0.25, z: 0}
            ],
            connections: [
                [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 0]
            ]
        },
        '8': {
            points: [
                // Círculo superior
                {x: 0, y: 0.5, z: 0}, {x: 0.3, y: 0.5, z: 0}, {x: 0.6, y: 0.5, z: 0},
                {x: 0.6, y: 0.25, z: 0}, {x: 0.6, y: 0, z: 0}, {x: 0.3, y: 0, z: 0}, {x: 0, y: 0, z: 0},
                {x: 0, y: 0.25, z: 0},
                // Círculo inferior
                {x: 0, y: 0, z: 0}, {x: 0.3, y: 0, z: 0}, {x: 0.6, y: 0, z: 0},
                {x: 0.6, y: -0.25, z: 0}, {x: 0.6, y: -0.5, z: 0}, {x: 0.3, y: -0.5, z: 0}, {x: 0, y: -0.5, z: 0},
                {x: 0, y: -0.25, z: 0}
            ],
            connections: [
                // Círculo superior
                [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
                // Círculo inferior
                [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 8]
            ]
        }
    };
    
    // Posiciones responsive para "11/08"
    let dateX = 2.0;
    let dateY = 2.5;
    let dateSpacing = 0.4;
    
    if (isSmallMobile) {
        dateX = 1.2;
        dateY = 1.8;
        dateSpacing = 0.25;
    } else if (isMobile) {
        dateX = 1.6;
        dateY = 2.2;
        dateSpacing = 0.35;
    }
    
    const datePositions = [
        { type: '1', x: dateX, y: dateY },
        { type: '1', x: dateX + dateSpacing, y: dateY },
        { type: 'slash', x: dateX + dateSpacing * 2.25, y: dateY },
        { type: '0', x: dateX + dateSpacing * 3.5, y: dateY },
        { type: '8', x: dateX + dateSpacing * 5.5, y: dateY } // Más espaciado entre 0 y 8
    ];
    
    // Crear estrellas y líneas para la fecha
    datePositions.forEach((pos, index) => {
        if (pos.type === 'slash') {
            // Crear línea diagonal simple "/" (de arriba-derecha a abajo-izquierda) con 3 puntos
            const slashPoints = [
                {x: 0.1, y: 0.2, z: 0}, {x: 0, y: 0, z: 0}, {x: -0.1, y: -0.2, z: 0}
            ];
            
            // Crear 3 puntos para el slash
            slashPoints.forEach((point, pointIndex) => {
                const brightness = 0.7 + Math.random() * 0.3;
                
                // Punto central
                const pointGeometry = new THREE.CircleGeometry(0.006, 8);
                const pointMaterial = new THREE.MeshBasicMaterial({ 
                    color: new THREE.Color(0xFFD700),
                    transparent: true,
                    opacity: brightness,
                    side: THREE.DoubleSide
                });
                
                const starPoint = new THREE.Mesh(pointGeometry, pointMaterial);
                starPoint.position.set(point.x + pos.x, point.y + pos.y, point.z);
                
                // Círculo de brillo
                const glowGeometry = new THREE.CircleGeometry(0.015, 12);
                const glowMaterial = new THREE.MeshBasicMaterial({ 
                    color: new THREE.Color(0xFFD700),
                    transparent: true,
                    opacity: brightness * 0.4,
                    side: THREE.DoubleSide
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                glow.position.copy(starPoint.position);
                
                scene.add(starPoint);
                scene.add(glow);
            });
            
            // Conectar los 3 puntos con líneas diagonales
            for (let i = 0; i < slashPoints.length - 1; i++) {
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(slashPoints[i].x + pos.x, slashPoints[i].y + pos.y, slashPoints[i].z),
                    new THREE.Vector3(slashPoints[i + 1].x + pos.x, slashPoints[i + 1].y + pos.y, slashPoints[i + 1].z)
                ]);
                const lineMaterial = new THREE.LineBasicMaterial({ 
                    color: 0xFFD700,
                    transparent: true,
                    opacity: 0.8
                });
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
            }
        } else {
            const structure = dateStructure[pos.type];
            
            // Crear puntos para este número con brillos variables
            structure.points.forEach((point, pointIndex) => {
                const brightness = 0.5 + Math.random() * 0.5; // Brillo variable
                
                // Punto central dorado
                const pointSize = 0.005 + Math.random() * 0.005;
                const pointGeometry = new THREE.CircleGeometry(pointSize, 8);
                const pointMaterial = new THREE.MeshBasicMaterial({ 
                    color: new THREE.Color(0xFFD700),
                    transparent: true,
                    opacity: brightness,
                    side: THREE.DoubleSide
                });
                
                const starPoint = new THREE.Mesh(pointGeometry, pointMaterial);
                starPoint.position.set(point.x + pos.x, point.y + pos.y, point.z);
                
                // Círculo de brillo dorado alrededor
                const glowSize = 0.012 + Math.random() * 0.008;
                const glowGeometry = new THREE.CircleGeometry(glowSize, 12);
                const glowMaterial = new THREE.MeshBasicMaterial({ 
                    color: new THREE.Color(0xFFD700),
                    transparent: true,
                    opacity: brightness * 0.4,
                    side: THREE.DoubleSide
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                glow.position.copy(starPoint.position);
                
                scene.add(starPoint);
                scene.add(glow);
                
                // Algunas estrellas de fecha parpadean
                if (Math.random() > 0.85) { // 15% de las estrellas de fecha parpadean
                    const originalOpacity = brightness;
                    const originalGlowOpacity = brightness * 0.4;
                    
                    setInterval(() => {
                        const flicker = 0.6 + Math.random() * 0.4;
                        pointMaterial.opacity = originalOpacity * flicker;
                        glowMaterial.opacity = originalGlowOpacity * flicker;
                    }, 1500 + Math.random() * 3000);
                }
            });
            
            // Crear líneas de conexión para este número con opacidad variable
            structure.connections.forEach(connection => {
                const startPoint = structure.points[connection[0]];
                const endPoint = structure.points[connection[1]];
                
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(startPoint.x + pos.x, startPoint.y + pos.y, startPoint.z),
                    new THREE.Vector3(endPoint.x + pos.x, endPoint.y + pos.y, endPoint.z)
                ]);
                const lineOpacity = 0.5 + Math.random() * 0.3; // Opacidad variable más sutil
                const lineMaterial = new THREE.LineBasicMaterial({ 
                    color: 0xFFD700,
                    transparent: true,
                    opacity: lineOpacity
                });
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
            });
        }
    });
    
    // Crear estrellas adicionales aleatorias para llenar el cielo
    for (let i = 0; i < count; i++) {
        const starGeometry = new THREE.SphereGeometry(0.01 + Math.random() * 0.02, 6, 6);
        
        const starColors = [
            new THREE.Color(0xFFFFFF), // Blanco
            new THREE.Color(0x87CEEB), // Azul claro
            new THREE.Color(0xFFD700), // Dorado
            new THREE.Color(0xFFA500), // Naranja
            new THREE.Color(0xFF69B4)  // Rosa
        ];
        
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: starColors[Math.floor(Math.random() * starColors.length)],
            transparent: true,
            opacity: 0.6 + Math.random() * 0.4
        });
        
        const star = new THREE.Mesh(starGeometry, starMaterial);
        
        // Distribuir estrellas en todo el cielo, evitando las áreas de las letras
        let x, y;
        do {
            x = (Math.random() - 0.5) * 20;
            y = (Math.random() - 0.5) * 20;
        } while (
            (x >= -2 && x <= 2 && y >= -1 && y <= 1.5) || // Área de EYE
            (x >= -1.5 && x <= 1.5 && y >= 1.5 && y <= 2.5) // Área de 11/08
        );
        
        star.position.set(x, y, (Math.random() - 0.5) * 15);
        
        // Agregar brillo a algunas estrellas
        if (Math.random() > 0.7) {
            const glowGeometry = new THREE.SphereGeometry(0.03 + Math.random() * 0.02, 6, 6);
            const glowMaterial = new THREE.MeshBasicMaterial({ 
                color: starMaterial.color,
                transparent: true,
                opacity: 0.2
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.position.copy(star.position);
            scene.add(glow);
        }
        
        scene.add(star);
    }
}

function createModalConstellation(scene, name, positions) {
    const group = new THREE.Group();
    
    positions.forEach((pos, index) => {
        // Estrella principal más pequeña
        const starGeometry = new THREE.SphereGeometry(0.03 + Math.random() * 0.02, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0xFFD700), // Dorado para constelaciones
            transparent: true,
            opacity: 1
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(pos.x, pos.y, pos.z);
        
        // Brillo más sutil
        const glowGeometry = new THREE.SphereGeometry(0.08 + Math.random() * 0.05, 8, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: starMaterial.color,
            transparent: true,
            opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(star.position);
        
        group.add(star);
        group.add(glow);
    });
    
    // Líneas conectoras más visibles y brillantes
    for (let i = 0; i < positions.length - 1; i++) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(positions[i].x, positions[i].y, positions[i].z),
            new THREE.Vector3(positions[i + 1].x, positions[i + 1].y, positions[i + 1].z)
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xFFD700, // Dorado para las líneas
            transparent: true,
            opacity: 0.8
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
    }
    
    scene.add(group);
}



// Iniciar contador regresivo
function startCountdown() {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = dayjs();
    const diff = targetDate.diff(now);
    
    if (diff <= 0) {
        // ¡Tiempo terminado! - Mostrar 0 en todos los contadores
        clearInterval(countdownInterval);
        updateTimerDisplay('days', 0);
        updateTimerDisplay('hours', 0);
        updateTimerDisplay('minutes', 0);
        updateTimerDisplay('seconds', 0);
        showCelebration();
        return;
    }
    
    const duration = dayjs.duration(diff);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    
    // Actualizar display con animaciones
    updateTimerDisplay('days', days);
    updateTimerDisplay('hours', hours);
    updateTimerDisplay('minutes', minutes);
    updateTimerDisplay('seconds', seconds);
}

function updateTimerDisplay(elementId, value) {
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.textContent);
    
    if (currentValue !== value) {
        // Animación de cambio de número
        element.style.transform = 'scale(1.2)';
        element.style.color = '#F59E0B';
        
        setTimeout(() => {
            element.textContent = value.toString().padStart(2, '0');
            element.style.transform = 'scale(1)';
            element.style.color = '#FFFFFF';
        }, 150);
    }
}

// Mostrar celebración
function showCelebration() {
    console.log('🎊 ¡Iniciando celebración!');
    
    // Ocultar fase de contador con animación
    const countdownPhase = document.getElementById('countdown-phase');
    const celebrationPhase = document.getElementById('celebration-phase');
    
    // Animación de transición
    gsap.to(countdownPhase, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
            countdownPhase.classList.remove('active');
            celebrationPhase.classList.add('active');
            
            // Mostrar fase de celebración
            gsap.fromTo(celebrationPhase, 
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
            );
            
            // Activar cielo de estrellas
            showStarrySky();
            
            // Lanzar confeti
            launchConfetti();
            
            // Inicializar AOS para la fase de celebración
            AOS.refresh();
        }
    });
}

// Lanzar confeti ultra optimizado
function launchConfetti() {
    const colors = ['#8B5CF6', '#A855F7', '#EC4899', '#F59E0B'];
    const confettiCount = 80; // Reducido drásticamente
    const shapes = ['💜', '💕', '✨', '⭐'];
    
    // Crear confeti en lotes muy pequeños
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)], shapes[Math.floor(Math.random() * shapes.length)]);
        }, i * 25); // Aumentado significativamente
    }
    
    // Efecto de explosión de corazones mínimo
    setTimeout(() => {
        createHeartExplosion();
    }, 1500);
}

function createConfetti(color, shape) {
    const confetti = document.createElement('div');
    const isEmoji = shape && shape.length > 1;
    
    confetti.style.cssText = `
        position: fixed;
        ${isEmoji ? 'font-size: 16px;' : 'width: 8px; height: 8px; background: ' + color + ';'}
        left: ${Math.random() * 100}%;
        top: -20px;
        z-index: 9999;
        pointer-events: none;
        ${isEmoji ? '' : 'border-radius: 2px;'}
    `;
    
    if (isEmoji) {
        confetti.innerHTML = shape;
    }
    
    document.body.appendChild(confetti);
    
    // Animación de caída ultra optimizada
    gsap.to(confetti, {
        y: window.innerHeight + 50,
        x: Math.random() * 150 - 75, // Rango muy reducido
        rotation: Math.random() * 180 - 90, // Rango muy reducido
        scale: 0.8, // Escala fija
        duration: Math.random() * 2 + 1.5, // Muy reducido
        ease: 'none', // Sin easing para mejor rendimiento
        onComplete: () => {
            if (confetti.parentNode) {
                document.body.removeChild(confetti);
            }
        }
    });
}

function createHeartExplosion() {
    const heartCount = 12; // Reducido drásticamente
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💜';
        heart.style.cssText = `
            position: fixed;
            font-size: 18px;
            left: ${centerX}px;
            top: ${centerY}px;
            z-index: 9999;
            pointer-events: none;
        `;
        
        document.body.appendChild(heart);
        
        const angle = (i / heartCount) * 360;
        const distance = Math.random() * 100 + 60; // Rango muy reducido
        const endX = centerX + Math.cos(angle * Math.PI / 180) * distance;
        const endY = centerY + Math.sin(angle * Math.PI / 180) * distance;
        
        gsap.to(heart, {
            x: endX - centerX,
            y: endY - centerY,
            rotation: Math.random() * 180, // Reducido el rango
            scale: 0,
            duration: 1, // Muy reducido
            ease: 'power1.out',
            onComplete: () => {
                if (heart.parentNode) {
                    document.body.removeChild(heart);
                }
            }
        });
    }
}

// Configurar eventos
function setupEventListeners() {
    // Botón de carta de amor
    document.getElementById('love-letter-btn').addEventListener('click', showLoveLetter);
    
    // Botón de libro de recuerdos
    document.getElementById('memory-book-btn').addEventListener('click', showMemoryBook);
    
    // Botón de galería de fotos
    document.getElementById('future-dreams-btn').addEventListener('click', showPhotoGallery);
    
    // Botón de cielo de estrellas
    document.getElementById('starry-sky-toggle').addEventListener('click', toggleStarrySky);
    

    
    // Tarjetas de momentos especiales
    document.querySelectorAll('.moment-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            const description = this.querySelector('p').textContent;
            showMomentDetails(title, description);
        });
    });
}

// Mostrar carta de amor
function showLoveLetter() {
    const loveLetterContent = [
        "My beloved Eden,",
        "",
        "Two beautiful years have passed since destiny brought us together, and not a single day goes by without me thanking life for having found you. You are my light in the dark, the calm in every storm, and the voice that makes my heart feel at home.",
        "",
        "Loving you has become the most natural and wonderful thing I've ever known. With every smile, every call, every glance—even from afar—you've shown me what real love feels like: tender, loyal, and eternal.",
        "",
        "Thank you for being the woman of my dreams, my partner in every sense, and the soul who sees me even in silence. You've brought meaning to my days and given my heart a reason to beat with joy and purpose.",
        "",
        "I promise to stand by you always—to be your strength when you feel weak, your peace when the world overwhelms you, and your home when everything else feels distant. I promise to build a future with you, hand in hand, heart to heart.",
        "",
        "There is no distance too great, no challenge too hard, when I know I'm facing life with you. I choose you today, tomorrow, and for all the days to come.",
        "",
        "With all my love, always and forever,",
        "",
        "Engerber 💜"
    ];
    
    
    const swalInstance = Swal.fire({
        title: '💜 My Love Letter to Eden 💜',
        html: `
            <div style="text-align: left; max-width: 500px; margin: 0 auto;">
                <div id="love-letter-text" style="font-size: 1.1rem; line-height: 1.8; color: #1F2937; min-height: 300px; font-family: 'Dancing Script', cursive;">
                </div>
            </div>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#8B5CF6',
        background: 'rgba(255, 255, 255, 0.95)',
        backdrop: 'rgba(139, 92, 246, 0.3)',
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title'
        }
    });
    
    // Iniciar efecto de typing
    const textElement = document.getElementById('love-letter-text');
    let currentIndex = 0;
    let currentLine = 0;
    
    function typeNextCharacter() {
        if (currentLine < loveLetterContent.length) {
            const line = loveLetterContent[currentLine];
            
            if (currentIndex < line.length) {
                textElement.innerHTML += line[currentIndex];
                currentIndex++;
                setTimeout(typeNextCharacter, 100);
            } else {
                textElement.innerHTML += '<br>';
                currentLine++;
                currentIndex = 0;
                setTimeout(typeNextCharacter, 200);
            }
        }
    }
    
    // Iniciar typing después de un pequeño delay
    setTimeout(typeNextCharacter, 500);
}

// Mostrar libro de recuerdos
function showMemoryBook() {
    let currentPage = 0;
    const pages = [
        {
            title: '💜 Page 1: When the Stars First Spoke 💜',
            content: `Once upon a time, in a sky not too far from our own, there lived two souls who had never met, but who had been searching for each other their whole lives. Their first encounter was not in the usual places of Earth, but among the floating realms of *Sky: Children of the Light*—a magical world of stars, light, and quiet wonder.
    
    It was there, in the middle of a celestial event known as the Grandmother's Gathering, that she appeared. Eden. She was curious, kind, and beautiful. And with a gentle voice, she asked a simple question about the white manta ray he carried on his back. He turned, surprised—and something stirred inside him.
    
    That question became a spark. That spark became a story. And that story… was just beginning.`
        },
        {
            title: '💞 Page 2: The Language of Two Hearts 💞',
            content: `From that one moment, a connection was born—soft and almost invisible, but growing stronger with each passing word. They spoke often, sometimes laughing, sometimes wondering in silence. Each conversation was a step closer. And although they came from different lands, spoke different languages, and lived under different suns, their hearts seemed to speak the same languages.
    
    Their friendship became warmth. The warmth became tenderness. The tenderness became love. A kind of love that didn't need to be touched to be felt. A love that traveled across screens and skies. A love that made their hearts feel less alone.
    
    And in between those moments, a first kiss happened—not on lips, but on souls. Virtual yet powerful, it reminded them that real love does not need permission from the physical world. It just needs courage.`
        },
        {
            title: '🔒 Page 3: An Unbreakable Present 🔒',
            content: `Now, two years later, they're still here. Stronger, wiser, more united. Not the same people they once were—because they grew together. They changed. But the love still burns just as intensely.
    
    Their present is made of sincere glances, words that comfort, silences that no longer feel empty. It's real love, without masks. A love that has learned to be patient, to forgive, to heal.
    
    He cherishes every time she gets shy on a call and covers her face with her hand, revealing those beautiful eyes—eyes full of kindness, sweetness, and love so pure it leaves him breathless.
    
    In those ordinary, quiet moments, they realized: this love is no longer a dream. It is home.`
        },
        {
            title: '🏡 Page 4: Their Dreamed Future 🏡',
            content: `They began to dream—not apart, but together. Of a home built not just with bricks, but with laughter. Of mornings waking up side by side. Of little feet running down hallways. Of stories around the table and kisses in the kitchen.
    
    He imagines her as his wife, her smile lighting up the house. She imagines him as the father of their children, teaching them kindness and courage.
    
    Their cultures are different. Their lives had once been distant. But that no longer matters. Because what they are building is not ordinary. It is honest. It is bold. It is real.
    
    And together, they know: the future is beautiful. Because it will be theirs.`
        },
        {
            title: '💍 Page 5: An Eternal Promise 💍',
            content: `Eden, I choose you with my whole heart. I choose you without fear, without hesitation, without limits. Because you are everything I dreamed of—and more. Because this love is the realest thing I've ever known.
    
    I promise to be there—in your brightest days and in your storms. I promise to give you all that I am, and all that I've yet to become. I promise to grow with you, to learn with you, to heal with you. To walk by your side—wherever life leads us—but always together.
    
    My love for you doesn't depend on time or distance. It lives freely, fiercely, endlessly. It doesn't need explaining—because it's felt, it's lived, it's given.
    
    Thank you for choosing me. For not letting go. For believing in us even when no one else could understand. Thank you for being you. And for letting me be me.
    
    This is only the beginning, my love.`
        },
        {
            title: '✨ The End… or rather, just the beginning.',
            content: `(A story by Paolo & Eden, two hearts written into the sky.)`
        }
    ];
    
    
    function showPage(pageIndex) {
        const page = pages[pageIndex];
        return `
            <div style="text-align: left; max-width: 600px; margin: 0 auto; max-height: 400px; overflow-y: auto; padding-right: 10px;">
                <h3 style="color: #8B5CF6; font-size: 1.8rem; margin-bottom: 25px; font-family: 'Great Vibes', cursive; text-align: center;">
                    ${page.title}
                </h3>
                <div id="typing-content" style="font-size: 1.1rem; line-height: 1.9; color: #1F2937; margin-bottom: 30px; text-align: justify; font-family: 'Poppins', sans-serif;">
                    <span id="typing-text"></span><span id="typing-cursor" style="border-right: 2px solid #8B5CF6; animation: blink 1s infinite;">|</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <button id="prev-page" class="swal-btn" style="background: #8B5CF6; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; ${pageIndex === 0 ? 'opacity: 0.5; pointer-events: none;' : ''}">
                        ← Previous
                    </button>
                    <span style="color: #8B5CF6; font-weight: bold; font-size: 1.1rem;">
                        ${pageIndex + 1} / ${pages.length}
                    </span>
                    <button id="next-page" class="swal-btn" style="background: #8B5CF6; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; ${pageIndex === pages.length - 1 ? 'opacity: 0.5; pointer-events: none;' : ''}">
                        Next →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Función para escribir texto letra por letra
    function typeText(text, element, speed = 30) {
        let index = 0;
        element.innerHTML = '';
        
        function typeNextCharacter() {
            if (index < text.length) {
                const char = text[index];
                if (char === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += char;
                }
                index++;
                setTimeout(typeNextCharacter, speed);
            }
        }
        
        typeNextCharacter();
    }
    
    const swalInstance = Swal.fire({
        title: '📖 Our Memory Book 📖',
        html: showPage(currentPage),
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#8B5CF6',
        background: 'rgba(255, 255, 255, 0.95)',
        backdrop: 'rgba(139, 92, 246, 0.3)',
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title'
        },
        width: '700px',
        didOpen: () => {
            // Iniciar escritura después de que se abra el modal
            setTimeout(() => {
                const typingElement = document.getElementById('typing-text');
                if (typingElement) {
                    typeText(pages[currentPage].content, typingElement, 100);
                }
            }, 500);
        }
    });
    
    // Event listeners para navegación con delegación de eventos
    swalInstance.then(() => {
        // Limpiar event listeners cuando se cierre
        return;
    });
    
    // Usar delegación de eventos para evitar problemas de múltiples listeners
    document.addEventListener('click', function handleNavigation(e) {
        if (e.target && e.target.id === 'prev-page') {
            e.preventDefault();
            if (currentPage > 0) {
                currentPage--;
                swalInstance.update({
                    html: showPage(currentPage)
                });
                // Iniciar escritura para la nueva página
                setTimeout(() => {
                    const typingElement = document.getElementById('typing-text');
                    if (typingElement) {
                        typeText(pages[currentPage].content, typingElement, 100);
                    }
                }, 100);
            }
        } else if (e.target && e.target.id === 'next-page') {
            e.preventDefault();
            if (currentPage < pages.length - 1) {
                currentPage++;
                swalInstance.update({
                    html: showPage(currentPage)
                });
                // Iniciar escritura para la nueva página
                setTimeout(() => {
                    const typingElement = document.getElementById('typing-text');
                    if (typingElement) {
                        typeText(pages[currentPage].content, typingElement, 100);
                    }
                }, 100);
            }
        }
    });
}

// Mostrar galería de fotos
function showPhotoGallery() {
    Swal.fire({
        title: '📸 Our Photo Gallery 📸',
        html: `
            <div style="text-align: center; max-width: 500px; margin: 0 auto;">
                <p style="font-size: 1.1rem; line-height: 1.8; color: #1F2937; margin-bottom: 20px;">
                    We haven't taken photos together yet, but every moment with you is worth capturing forever.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: #1F2937; margin-bottom: 20px;">
                    I can't wait to fill this gallery with countless memories of our love story.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: #8B5CF6; font-weight: bold;">
                    Every day with you is a new adventure worth remembering! 💜
                </p>
            </div>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#8B5CF6',
        background: 'rgba(255, 255, 255, 0.95)',
        backdrop: 'rgba(139, 92, 246, 0.3)',
        customClass: {
            popup: 'swal-custom-popup'
        }
    });
}

// Mostrar detalles de momento especial
function showMomentDetails(title, description) {
    // Si es la tarjeta del cielo de estrellas, abrir la modal
    if (title.includes('Want to see something beautiful')) {
        openStarrySkyModal();
        return;
    }
    // Si es la tarjeta de la aurora, abrir el modal de aurora
    if (title.includes('Aurora Borealis for You')) {
        const auroraModal = document.getElementById('aurora-modal');
        if (auroraModal) {
            auroraModal.style.display = 'flex';
            renderAuroraCanvasInCurtain();
        }
        return;
    }
    // Resto de momentos: mostrar SweetAlert con detalles
    const momentDetails = {
        'Our First Meeting': {
            title: '💜 Our First Meeting 💜',
            subtitle: 'The day our paths crossed',
            content: `It was in April, under the skies of Sky: Children of the Light, during the grandmother's event. You appeared with that sweetness that's so uniquely yours, asking me about the white manta ray I was carrying on my back...

            We didn't know it yet, but that instant would mark the beginning of something that would change our lives forever.`,
            quote: 'That first hello was the beginning of our forever.'
        },
        'Our First Kiss': {
            title: '💜 Our First Kiss 💜',
            subtitle: 'A magical moment that changed everything',
            content: `It was a virtual kiss, yes... but it felt real. As real as the love that was beginning to bloom between us. A touch of souls, beyond screens, beyond space. That day I knew I had given you my heart.`,
            quote: 'A touch of souls that made the virtual feel real.'
        },
        'Our First Anniversary': {
            title: '💜 Our First Anniversary 💜',
            subtitle: 'A year full of love, learning, and devotion',
            content: `Our first anniversary marked a milestone in our story. It was a reminder that, despite distance, time, and trials, we continue to choose each other day after day. It was looking back and seeing everything we had overcome... and looking forward with the certainty that this is just the beginning.`,
            quote: 'Choosing each other every day, despite everything.'
        },
        'Special Moments': {
            title: '💜 Special Moments 💜',
            subtitle: 'Your eyes, your hands, your shyness...',
            content: `Every video call with you is a small eternity. Seeing you, hearing you, feeling you even through a screen. But there's something that disarms me every time: when you get shy and cover your face with your hand, leaving only your eyes visible.

            Those eyes of yours, so full of love, sweetness, and tenderness, make me feel like I'm already home.`,
            quote: "Your eyes make me feel like I'm already home."
        }
    };

    const moment = momentDetails[title] || {
        title: `💜 ${title} 💜`,
        subtitle: description,
        content: 'A beautiful moment in our love story that we will cherish forever.',
        quote: 'Every moment with you is a treasure I hold dear in my heart.'
    };

    Swal.fire({
        title: moment.title,
        html: `
            <div style="text-align: left; max-width: 600px; margin: 0 auto; max-height: 400px; overflow-y: auto; padding-right: 10px;">
                <h4 style="color: #8B5CF6; font-size: 1.3rem; margin-bottom: 20px; text-align: center; font-weight: 600;">
                    ${moment.subtitle}
                </h4>
                <div style="font-size: 1.1rem; line-height: 1.9; color: #1F2937; margin-bottom: 30px; text-align: justify;">
                    ${moment.content.split('\n').map(paragraph => 
                        paragraph.trim() ? `<p style="margin-bottom: 15px;">${paragraph.trim()}</p>` : ''
                    ).join('')}
                </div>
                <div style="text-align: center; padding: 20px; background: rgba(139, 92, 246, 0.1); border-radius: 15px; border-left: 4px solid #8B5CF6;">
                    <p style="font-size: 1.2rem; line-height: 1.8; color: #8B5CF6; font-style: italic; margin: 0; font-weight: 500;">
                        "${moment.quote}"
                    </p>
                </div>
            </div>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#8B5CF6',
        background: 'rgba(255, 255, 255, 0.95)',
        backdrop: 'rgba(139, 92, 246, 0.3)',
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title'
        },
        width: '700px'
    });
}

// Funciones de galería de imágenes
function changeImage(direction) {
    const images = document.querySelectorAll('.image-frame');
    const dots = document.querySelectorAll('.dot');
    const currentImage = document.querySelector('.image-frame.active');
    
    if (!currentImage) return;
    
    const currentIndex = parseInt(currentImage.dataset.index);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;
    
    goToImage(newIndex);
}

function goToImage(index) {
    const images = document.querySelectorAll('.image-frame');
    const dots = document.querySelectorAll('.dot');
    const currentImage = document.querySelector('.image-frame.active');
    const currentDot = document.querySelector('.dot.active');
    
    if (currentImage) {
        currentImage.classList.remove('active');
    }
    if (currentDot) {
        currentDot.classList.remove('active');
    }
    
    images[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Actualizar contador
    document.getElementById('current-image').textContent = index + 1;
    currentImageIndex = index;
    
    // Reiniciar auto-play
    restartGalleryAutoPlay();
}

function startGalleryAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeImage(1);
    }, 5000);
}

function restartGalleryAutoPlay() {
    clearInterval(autoPlayInterval);
    startGalleryAutoPlay();
}

// Agregar estilos CSS para animaciones adicionales
const additionalStyles = `
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes twinkleStar {
        0%, 100% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
    
    .swal-custom-popup {
        border-radius: 25px !important;
        border: 2px solid rgba(139, 92, 246, 0.3) !important;
        box-shadow: 0 20px 60px rgba(139, 92, 246, 0.25) !important;
    }
    
    .swal-custom-title {
        color: #8B5CF6 !important;
        font-family: 'Great Vibes', cursive !important;
    }
    
    .swal-btn:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3) !important;
    }
`;

// Insertar estilos adicionales
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

console.log('🎨 Estilos premium aplicados');

// === Corazones flotantes animados ===
function lanzarCorazonesFlotantes(contenedorSelector, cantidad = 8) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) return;
  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'floating-heart-anim';
      heart.innerHTML = '❤';
      heart.style.left = Math.random() * 80 + 10 + '%';
      heart.style.bottom = '-30px';
      heart.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
      heart.style.opacity = 0.7 + Math.random() * 0.3;
      contenedor.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, Math.random() * 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  lanzarCorazonesFlotantes('.music-section', 10);
  lanzarCorazonesFlotantes('.celebration-content', 12);

  // Control de música con botón flotante
  const audio = document.getElementById('audio-player');
  const btn = document.getElementById('music-toggle-btn');
  const icon = document.getElementById('music-toggle-icon');
  if (audio && btn && icon) {
    function updateBtn() {
      if (audio.paused) {
        btn.style.background = 'linear-gradient(135deg, #A855F7 0%, #F59E0B 100%)';
        icon.className = 'fa fa-play';
        btn.title = 'Reanudar música';
      } else {
        btn.style.background = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)';
        icon.className = 'fa fa-music';
        btn.title = 'Pausar música';
      }
    }
    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      updateBtn();
    });
    audio.addEventListener('play', updateBtn);
    audio.addEventListener('pause', updateBtn);
    updateBtn();
  }
});

// === Partículas románticas en el fondo ===
function lanzarParticulasFondo(contenedorSelector, cantidad = 18) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) return;
  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      const part = document.createElement('span');
      part.className = Math.random() > 0.5 ? 'floating-heart-anim' : 'floating-star-anim';
      part.innerHTML = part.className === 'floating-heart-anim' ? '❤' : '★';
      part.style.left = Math.random() * 98 + '%';
      part.style.bottom = Math.random() * 80 + '%';
      part.style.fontSize = (1.1 + Math.random() * 1.7) + 'rem';
      part.style.opacity = 0.18 + Math.random() * 0.22;
      part.style.pointerEvents = 'none';
      part.style.position = 'absolute';
      part.style.zIndex = 2;
      contenedor.appendChild(part);
      setTimeout(() => part.remove(), 9000);
    }, Math.random() * 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  lanzarParticulasFondo('.main-wrapper', 22);
});

// === Fondo de partículas sutil romántico ===
function iniciarParticulasSutiles() {
  const canvas = document.getElementById('soft-particles-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  canvas.width = w; canvas.height = h;
  window.addEventListener('resize', () => {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w; canvas.height = h;
  });
  // Solo en cabecera y celebración (top 60% de la pantalla)
  const PARTICLES = [];
  const SHAPES = ['heart', 'star'];
  for (let i = 0; i < 22; i++) {
    const shape = SHAPES[Math.random() > 0.5 ? 0 : 1];
    PARTICLES.push({
      x: Math.random() * w,
      y: Math.random() * h * 0.6,
      r: 12 + Math.random() * 18,
      s: shape,
      o: 0.10 + Math.random() * 0.13,
      dx: -0.1 + Math.random() * 0.2,
      dy: 0.08 + Math.random() * 0.18,
      rot: Math.random() * 360,
      dr: -0.2 + Math.random() * 0.4
    });
  }
  function drawHeart(x, y, r, o, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot * Math.PI / 180);
    ctx.globalAlpha = o;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(r/2, -r/2, r, r/3, 0, r);
    ctx.bezierCurveTo(-r, r/3, -r/2, -r/2, 0, 0);
    ctx.fillStyle = '#e63946';
    ctx.shadowColor = '#e63946';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }
  function drawStar(x, y, r, o, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot * Math.PI / 180);
    ctx.globalAlpha = o;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(0, r);
      ctx.translate(0, r);
      ctx.rotate((Math.PI * 2 / 10));
      ctx.lineTo(0, -r);
      ctx.translate(0, -r);
      ctx.rotate(-(Math.PI * 6 / 10));
    }
    ctx.closePath();
    ctx.fillStyle = '#fcd34d';
    ctx.shadowColor = '#fcd34d';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }
  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (const p of PARTICLES) {
      if (p.s === 'heart') drawHeart(p.x, p.y, p.r, p.o, p.rot);
      else drawStar(p.x, p.y, p.r * 0.7, p.o, p.rot);
      p.x += p.dx;
      p.y += p.dy;
      p.rot += p.dr;
      if (p.y > h * 0.6 + 60) {
        p.x = Math.random() * w;
        p.y = -30;
      }
      if (p.x < -30 || p.x > w + 30) {
        p.x = Math.random() * w;
        p.y = Math.random() * h * 0.6;
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
document.addEventListener('DOMContentLoaded', iniciarParticulasSutiles);

// Fireflies effect for Why I Love You section
function initFireflies() {
    const canvas = document.getElementById('fireflies-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let fireflies = [];
    const FIREFLY_COUNT = 22;
    function resize() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();
    function randomColor() {
        // Morado, dorado, blanco suave
        const colors = ['#fcd34d', '#fff', '#8B5CF6', '#a855f7', '#f9fafb'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    for (let i = 0; i < FIREFLY_COUNT; i++) {
        fireflies.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1.5 + Math.random() * 2.5,
            dx: (Math.random() - 0.5) * 0.7,
            dy: (Math.random() - 0.5) * 0.7,
            phase: Math.random() * Math.PI * 2,
            color: randomColor(),
            glow: 0.5 + Math.random() * 0.7
        });
    }
    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let f of fireflies) {
            // Movimiento suave y curvo
            f.x += Math.sin(f.phase) * 0.3 + f.dx;
            f.y += Math.cos(f.phase) * 0.3 + f.dy;
            f.phase += 0.01 + Math.random() * 0.01;
            // Rebote en bordes
            if (f.x < 0 || f.x > width) f.dx *= -1;
            if (f.y < 0 || f.y > height) f.dy *= -1;
            // Glow animado
            let glow = Math.abs(Math.sin(Date.now() * 0.001 + f.phase)) * 0.7 + 0.5;
            ctx.save();
            ctx.globalAlpha = 0.7 * glow;
            let grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6 * f.glow);
            grad.addColorStop(0, f.color);
            grad.addColorStop(0.4, f.color + '99');
            grad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r * 6 * f.glow, 0, 2 * Math.PI);
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.restore();
            // Cuerpo
            ctx.save();
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r, 0, 2 * Math.PI);
            ctx.fillStyle = f.color;
            ctx.shadowColor = f.color;
            ctx.shadowBlur = 12 * f.glow;
            ctx.fill();
            ctx.restore();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Aurora Borealis effect for constellation modal
function initAurora() {
    const canvas = document.getElementById('aurora-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    function resize() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();
    // Aurora parameters
    const bands = [
        { color: 'rgba(139,92,246,0.22)', amp: 60, freq: 0.012, speed: 0.0007, offset: 0 },
        { color: 'rgba(236,72,153,0.18)', amp: 40, freq: 0.018, speed: 0.001, offset: 100 },
        { color: 'rgba(252,211,77,0.13)', amp: 30, freq: 0.022, speed: 0.0012, offset: 200 },
        { color: 'rgba(255,255,255,0.09)', amp: 20, freq: 0.028, speed: 0.0015, offset: 300 }
    ];
    function drawAurora() {
        ctx.clearRect(0, 0, width, height);
        let now = Date.now();
        for (let b = 0; b < bands.length; b++) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, height * 0.7);
            for (let x = 0; x <= width; x += 2) {
                let y = height * 0.7 -
                    Math.sin(x * bands[b].freq + now * bands[b].speed + bands[b].offset) * bands[b].amp * Math.sin(now * 0.0002 + b);
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.globalAlpha = 0.7;
            ctx.fillStyle = bands[b].color;
            ctx.shadowColor = bands[b].color;
            ctx.shadowBlur = 60 + b * 20;
            ctx.fill();
            ctx.restore();
        }
        // Brillos extra
        for (let i = 0; i < 3; i++) {
            let cx = width * (0.2 + 0.3 * i) + Math.sin(now * 0.0007 + i) * 60;
            let cy = height * 0.5 + Math.cos(now * 0.0005 + i) * 30;
            let grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
            grad.addColorStop(0, 'rgba(252,211,77,0.18)');
            grad.addColorStop(0.3, 'rgba(139,92,246,0.12)');
            grad.addColorStop(1, 'transparent');
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(cx, cy, 120, 0, 2 * Math.PI);
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.restore();
        }
        requestAnimationFrame(drawAurora);
    }
    drawAurora();
}

// Inicializar aurora cuando se abre el modal de constelaciones
const observer = new MutationObserver(() => {
    const modal = document.getElementById('starry-sky-modal');
    if (modal && modal.classList.contains('active')) {
        setTimeout(initAurora, 300);
    }
});
observer.observe(document.body, { childList: true, subtree: true, attributes: true });

// Aurora Borealis Animation
let auroraAnimationId = null;
function startAurora() {
    const container = document.getElementById('aurora-realista');
    if (!container) return;
    container.innerHTML = '';
    // Crear canvas para la aurora
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '2';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);
    // Fondo de estrellas (canvas para mejor rendimiento y blending)
    const starsCanvas = document.createElement('canvas');
    starsCanvas.style.position = 'absolute';
    starsCanvas.style.top = '0';
    starsCanvas.style.left = '0';
    starsCanvas.style.width = '100vw';
    starsCanvas.style.height = '100vh';
    starsCanvas.style.zIndex = '1';
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;
    container.appendChild(starsCanvas);
    // Paisaje de montañas (SVG para suavidad)
    const landscape = document.createElement('div');
    landscape.innerHTML = `
      <svg width="100vw" height="100vh" viewBox="0 0 1920 400" style="position:absolute;bottom:0;left:0;width:100vw;height:32vh;z-index:3;pointer-events:none;">
        <defs>
          <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2d0036" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#000" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <path d="M0,400 Q200,320 400,370 T800,340 T1200,390 T1600,350 T1920,400 V400 H0 Z" fill="url(#mountainGrad)"/>
        <path d="M0,400 Q300,360 600,390 T1200,370 T1920,400 V400 H0 Z" fill="#18122B" opacity="0.7"/>
      </svg>
    `;
    landscape.style.position = 'absolute';
    landscape.style.bottom = '0';
    landscape.style.left = '0';
    landscape.style.width = '100vw';
    landscape.style.height = '32vh';
    landscape.style.zIndex = '3';
    container.appendChild(landscape);
    // Dibujar estrellas en el canvas de estrellas
    function drawStars() {
      const ctxStars = starsCanvas.getContext('2d');
      ctxStars.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      const numStars = 180;
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * starsCanvas.width;
        const y = Math.random() * starsCanvas.height * 0.7;
        const r = Math.random() * 1.5 + 0.3;
        const opacity = Math.random() * 0.7 + 0.3;
        ctxStars.save();
        ctxStars.globalAlpha = opacity;
        ctxStars.beginPath();
        ctxStars.arc(x, y, r, 0, 2 * Math.PI);
        ctxStars.fillStyle = '#fff';
        ctxStars.shadowColor = '#fff';
        ctxStars.shadowBlur = Math.random() * 8 + 2;
        ctxStars.fill();
        ctxStars.restore();
      }
      // Añadir algunos destellos grandes
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * starsCanvas.width;
        const y = Math.random() * starsCanvas.height * 0.6;
        ctxStars.save();
        ctxStars.globalAlpha = 0.18 + Math.random() * 0.12;
        ctxStars.beginPath();
        ctxStars.arc(x, y, Math.random() * 6 + 2, 0, 2 * Math.PI);
        ctxStars.fillStyle = '#fffbe9';
        ctxStars.shadowColor = '#fffbe9';
        ctxStars.shadowBlur = Math.random() * 18 + 8;
        ctxStars.fill();
        ctxStars.restore();
      }
    }
    drawStars();
    // Animación de ondas de aurora
    const ctx = canvas.getContext('2d');
    let t = 0;
    function drawAuroraWaves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Fondo degradado noche
      let grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#18122B');
      grad.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Ondas de aurora (más capas, más colores, más suavidad)
      const waves = [
        // Verdes y azules (clásico)
        { colors: ['rgba(0,255,146,0.32)','rgba(0,255,200,0.22)','rgba(72,255,0,0.18)'], amp: 90, freq: 0.0017, speed: 0.5, offset: 0, blur: 18 },
        { colors: ['rgba(0,200,255,0.22)','rgba(100,150,255,0.18)','rgba(0,255,200,0.13)'], amp: 70, freq: 0.0021, speed: 0.7, offset: 60, blur: 14 },
        // Morados y rosas
        { colors: ['rgba(139,92,246,0.22)','rgba(236,72,153,0.18)','rgba(253,224,71,0.10)'], amp: 110, freq: 0.0013, speed: 0.4, offset: 120, blur: 22 },
        { colors: ['rgba(255,0,150,0.18)','rgba(255,72,255,0.13)','rgba(150,0,255,0.10)'], amp: 80, freq: 0.0019, speed: 0.8, offset: 180, blur: 16 },
        // Dorados y blancos
        { colors: ['rgba(253,224,71,0.13)','rgba(255,255,255,0.10)','rgba(255,215,0,0.08)'], amp: 60, freq: 0.0015, speed: 0.6, offset: 240, blur: 12 },
        // Azul profundo
        { colors: ['rgba(56,189,248,0.18)','rgba(139,92,246,0.13)','rgba(38,70,83,0.10)'], amp: 100, freq: 0.0011, speed: 0.3, offset: 300, blur: 20 }
      ];
      for (let w = 0; w < waves.length; w++) {
        ctx.save();
        ctx.globalAlpha = 0.7 - w * 0.09 + Math.sin(t * 0.7 + w) * 0.08;
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 2) {
          let y =
            180 +
            Math.sin((x * waves[w].freq) + t * waves[w].speed + w) * waves[w].amp +
            Math.cos((x * 0.0007) + t * 0.3 + w) * 18 +
            waves[w].offset +
            Math.sin(t * 0.5 + x * 0.002 + w) * 8;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        // Gradiente para cada onda
        let gradWave = ctx.createLinearGradient(0, 180, 0, 400);
        gradWave.addColorStop(0, waves[w].colors[0]);
        gradWave.addColorStop(0.5, waves[w].colors[1]);
        gradWave.addColorStop(1, waves[w].colors[2]);
        ctx.fillStyle = gradWave;
        ctx.filter = `blur(${waves[w].blur}px)`;
        ctx.fill();
        ctx.filter = 'none';
        ctx.restore();
      }
      // Ligeros destellos animados sobre la aurora
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + Math.sin(t * 0.7 + i) * 40;
        const y = 200 + Math.sin(t * 0.5 + i) * 60;
        ctx.save();
        ctx.globalAlpha = 0.12 + Math.abs(Math.sin(t * 0.8 + i)) * 0.12;
        ctx.beginPath();
        ctx.arc(x, y, 32 + Math.sin(t + i) * 12, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.filter = 'blur(12px)';
        ctx.fill();
        ctx.filter = 'none';
        ctx.restore();
      }
      t += 0.012;
      auroraAnimationId = requestAnimationFrame(drawAuroraWaves);
    }
    drawAuroraWaves();
    // Responsivo
    function resizeAurora() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsCanvas.width = window.innerWidth;
      starsCanvas.height = window.innerHeight;
      drawStars();
    }
    window.addEventListener('resize', resizeAurora);
}
function stopAurora() {
    const container = document.getElementById('aurora-realista');
    if (container) container.innerHTML = '';
    if (auroraAnimationId) cancelAnimationFrame(auroraAnimationId);
    auroraAnimationId = null;
}

// Aurora ultra realista con canvas de ondas de luz
function renderAuroraCanvasInCurtain() {
    const curtain = document.querySelector('.aurora-curtain');
    if (!curtain) return;
    // Eliminar cortinas previas
    curtain.innerHTML = '';
    // Crear canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = curtain.offsetWidth;
    canvas.height = curtain.offsetHeight;
    curtain.appendChild(canvas);
    // Parámetros de aurora
    let t = 0;
    let intensity = 1;
    let colorScheme = 0;
    const ctx = canvas.getContext('2d');
    // Paletas de colores (igual que los controles)
    const colorSchemes = [
        [ // Verde-azul
            ['rgba(0,255,146,0.32)','rgba(0,255,200,0.22)','rgba(72,255,0,0.18)'],
            ['rgba(0,200,255,0.22)','rgba(100,150,255,0.18)','rgba(0,255,200,0.13)']
        ],
        [ // Púrpura-azul
            ['rgba(138,43,226,0.32)','rgba(75,0,130,0.22)','rgba(147,0,211,0.18)'],
            ['rgba(0,100,255,0.22)','rgba(65,105,225,0.18)','rgba(123,104,238,0.13)']
        ],
        [ // Rosa-dorado
            ['rgba(255,20,147,0.32)','rgba(255,105,180,0.22)','rgba(255,182,193,0.18)'],
            ['rgba(255,215,0,0.22)','rgba(255,165,0,0.18)','rgba(255,140,0,0.13)']
        ]
    ];
    function drawAuroraWaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Ondas principales
        const waves = [
            { colors: colorSchemes[colorScheme][0], amp: 90*intensity, freq: 0.0017, speed: 0.5, offset: 0, blur: 18 },
            { colors: colorSchemes[colorScheme][1], amp: 70*intensity, freq: 0.0021, speed: 0.7, offset: 60, blur: 14 },
            // Mezcla extra para realismo
            { colors: ['rgba(255,255,255,0.10)','rgba(253,224,71,0.10)','rgba(0,255,255,0.08)'], amp: 60*intensity, freq: 0.0015, speed: 0.6, offset: 120, blur: 22 }
        ];
        for (let w = 0; w < waves.length; w++) {
            ctx.save();
            ctx.globalAlpha = 0.7 - w * 0.13 + Math.sin(t * 0.7 + w) * 0.08;
            ctx.beginPath();
            for (let x = 0; x <= canvas.width; x += 2) {
                let y =
                    canvas.height*0.22 +
                    Math.sin((x * waves[w].freq) + t * waves[w].speed + w) * waves[w].amp +
                    Math.cos((x * 0.0007) + t * 0.3 + w) * 18 +
                    waves[w].offset +
                    Math.sin(t * 0.5 + x * 0.002 + w) * 8;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            // Gradiente para cada onda
            let gradWave = ctx.createLinearGradient(0, canvas.height*0.22, 0, canvas.height*0.7);
            gradWave.addColorStop(0, waves[w].colors[0]);
            gradWave.addColorStop(0.5, waves[w].colors[1]);
            gradWave.addColorStop(1, waves[w].colors[2]);
            ctx.fillStyle = gradWave;
            ctx.filter = `blur(${waves[w].blur}px)`;
            ctx.fill();
            ctx.filter = 'none';
            ctx.restore();
        }
        // Ligeros destellos animados sobre la aurora
        for (let i = 0; i < 8; i++) {
            const x = (canvas.width / 8) * i + Math.sin(t * 0.7 + i) * 40;
            const y = canvas.height*0.22 + Math.sin(t * 0.5 + i) * 60;
            ctx.save();
            ctx.globalAlpha = 0.10 + Math.abs(Math.sin(t * 0.8 + i)) * 0.10;
            ctx.beginPath();
            ctx.arc(x, y, 32 + Math.sin(t + i) * 12, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.filter = 'blur(12px)';
            ctx.fill();
            ctx.filter = 'none';
            ctx.restore();
        }
        t += 0.012;
        auroraAnimationId = requestAnimationFrame(drawAuroraWaves);
    }
    drawAuroraWaves();
    // Controles de intensidad y color
    window.toggleIntensity = function() {
        intensity = intensity === 1 ? 0.3 : intensity === 0.3 ? 1.5 : 1;
    };
    window.changeColors = function() {
        colorScheme = (colorScheme + 1) % colorSchemes.length;
    };
    // Responsivo
    function resizeAurora() {
        canvas.width = curtain.offsetWidth;
        canvas.height = curtain.offsetHeight;
    }
    window.addEventListener('resize', resizeAurora);
}
// Llama a renderAuroraCanvasInCurtain() después de crear la estructura de la aurora en el modal

// Función para el botón scroll to top
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) return;
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll suave al hacer clic
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
