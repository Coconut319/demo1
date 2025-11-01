/**
 * Cologne Boxing Style - Main JavaScript
 * Interactive functionality for the boxing studio website
 */

class CologneBoxingStyle {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initCookieBanner();
        this.initSmoothScrolling();
        this.initScrollAnimations();
        this.init3DGlove();
        this.initContactForm();
        this.initFaqAccordion();
        this.initGalleryLightbox();
        this.initPerformanceOptimizations();
    }

    setupEventListeners() {
        // DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }

        // Window events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        window.addEventListener('load', this.handleLoad.bind(this));
    }

    onDOMReady() {
        console.log('Cologne Boxing Style - Website loaded');
        this.initMobileNavigation();
        this.updateActiveNavigation();
        this.initLazyLoading();
    }

    handleScroll() {
        this.updateHeaderOnScroll();
        this.updateActiveNavigation();
        this.triggerScrollAnimations();
    }

    handleResize() {
        this.updateMobileNavigation();
    }

    handleLoad() {
        this.preloadCriticalImages();
    }

    // Mobile Navigation
    initMobileNavigation() {
        const toggle = document.getElementById('navbar-toggle');
        const menu = document.getElementById('navbar-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const isActive = toggle.classList.contains('active');
                
                if (isActive) {
                    this.closeMobileMenu(toggle, menu);
                } else {
                    this.openMobileMenu(toggle, menu);
                }
            });

            menu.addEventListener('click', (event) => {
                event.stopPropagation();
            });

            // Close menu when clicking on links
            menu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu(toggle, menu);
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    this.closeMobileMenu(toggle, menu);
                }
            });
        }
    }

    openMobileMenu(toggle, menu) {
        if (!toggle || !menu) return;
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Add haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    closeMobileMenu(toggle, menu) {
        if (!toggle || !menu) return;
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
        document.body.style.overflow = '';
    }

    updateMobileNavigation() {
        const toggle = document.getElementById('navbar-toggle');
        const menu = document.getElementById('navbar-menu');

        if (!toggle || !menu) return;

        if (window.innerWidth >= 769) {
            this.closeMobileMenu(toggle, menu);
        }
    }

    // Header Scroll Effects
    updateHeaderOnScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / 100, 1);

        if (scrollY > 50) {
            header.style.background = `rgba(255, 255, 255, ${0.95 + (opacity * 0.05)})`;
            header.style.borderBottomColor = `rgba(0, 0, 0, ${0.1 + (opacity * 0.05)})`;
            header.style.boxShadow = `0 2px 15px rgba(0, 0, 0, ${0.05 + (opacity * 0.1)})`;
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    }

    // Cookie Banner Management (GDPR Compliant)
    initCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept');
        const declineBtn = document.getElementById('cookie-decline');
        const settingsBtn = document.getElementById('cookie-settings');

        if (!banner) return;

        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent) {
            this.showCookieBanner(banner);
        }

        // Event listeners
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                this.acceptCookies();
                this.hideCookieBanner(banner);
            });
        }

        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                this.declineCookies();
                this.hideCookieBanner(banner);
            });
        }

        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                this.showCookieSettings();
            });
        }
    }

    showCookieBanner(banner) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000); // Show after 1 second delay
    }

    hideCookieBanner(banner) {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }

    acceptCookies() {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        this.loadNonEssentialScripts();
        console.log('Cookies accepted');
    }

    declineCookies() {
        localStorage.setItem('cookieConsent', 'declined');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        console.log('Cookies declined - only essential features loaded');
    }

    loadNonEssentialScripts() {
        // Load Google Analytics, tracking scripts, etc. only after consent
        // This would be where you initialize tracking scripts
    }

    showCookieSettings() {
        // Open cookie preferences modal
        alert('Cookie-Einstellungen würden hier geöffnet werden');
    }

    // Smooth Scrolling
    initSmoothScrolling() {
        // Handle smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Add haptic feedback on mobile
                    if (navigator.vibrate) {
                        navigator.vibrate(25);
                    }
                }
            });
        });
    }

    // Navigation Active State
    updateActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll Animations
    initScrollAnimations() {
        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.value-card, .course-card, .gallery-item, .stat').forEach(el => {
            observer.observe(el);
        });
    }

    triggerScrollAnimations() {
        // Trigger additional scroll-based animations
        const scrollY = window.scrollY;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            // Removed rotation animation - keeping only vertical movement
            heroVisual.style.transform = `translateY(50px)`;
        }
    }

    // 3D Boxing Glove Animation
    init3DGlove() {
        const gloveContainer = document.getElementById('boxing-glove-3d');
        if (!gloveContainer) return;

        // Check if Three.js should be loaded (based on cookie consent)
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'declined') {
            this.createFallbackGlove(gloveContainer);
            return;
        }

        // Load Three.js dynamically
        this.loadThreeJS().then(() => {
            this.create3DGlove(gloveContainer);
        }).catch(() => {
            this.createFallbackGlove(gloveContainer);
        });
    }

    loadThreeJS() {
        return new Promise((resolve, reject) => {
            if (window.THREE) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    create3DGlove(container) {
        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

            renderer.setSize(container.offsetWidth, container.offsetHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            container.appendChild(renderer.domElement);

            // Create glove geometry
            const gloveGroup = new THREE.Group();

            // Main glove body
            const gloveGeometry = new THREE.SphereGeometry(1.2, 32, 32);
            const gloveMaterial = new THREE.MeshPhongMaterial({
                color: 0xB71C1C,
                shininess: 30,
                specular: 0x444444
            });
            const glove = new THREE.Mesh(gloveGeometry, gloveMaterial);
            glove.castShadow = true;
            gloveGroup.add(glove);

            // Glove details
            const thumbGeometry = new THREE.SphereGeometry(0.3, 16, 16);
            const thumb = new THREE.Mesh(thumbGeometry, gloveMaterial);
            thumb.position.set(-0.8, 0.5, 0.8);
            gloveGroup.add(thumb);

            // Laces
            const laceGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.5, 8);
            const laceMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
            
            for (let i = 0; i < 8; i++) {
                const lace = new THREE.Mesh(laceGeometry, laceMaterial);
                lace.position.set(0, -0.5 + (i * 0.2), 1.2);
                lace.rotation.z = Math.PI / 2;
                gloveGroup.add(lace);
            }

            scene.add(gloveGroup);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(5, 5, 5);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0xFFD700, 0.5);
            pointLight.position.set(-5, 0, 5);
            scene.add(pointLight);

            camera.position.z = 3;

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);

                gloveGroup.rotation.y += 0.005;
                gloveGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;

                renderer.render(scene, camera);
            };

            animate();

            // Handle resize
            const handleResize = () => {
                camera.aspect = container.offsetWidth / container.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.offsetWidth, container.offsetHeight);
            };

            window.addEventListener('resize', handleResize);

            console.log('3D Boxing Glove initialized successfully');
        } catch (error) {
            console.error('Error creating 3D glove:', error);
            this.createFallbackGlove(container);
        }
    }

    createFallbackGlove(container) {
        // Create a CSS-based fallback for the 3D glove
        const fallbackGlove = document.createElement('div');
        fallbackGlove.className = 'boxing-glove-fallback';
        fallbackGlove.style.cssText = `
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, #B71C1C 0%, #7F0000 100%);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 50px rgba(183, 28, 28, 0.3);
            animation: float 3s ease-in-out infinite;
        `;

        // Add shine effect
        const shine = document.createElement('div');
        shine.style.cssText = `
            position: absolute;
            top: 20%;
            left: 20%;
            width: 60%;
            height: 60%;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
            border-radius: 50%;
        `;
        fallbackGlove.appendChild(shine);

        container.appendChild(fallbackGlove);
        console.log('Fallback glove created');
    }

    // Contact Form
    initContactForm() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const inputs = form.querySelectorAll('input, textarea');

        // Add validation classes
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form, submitBtn);
        });
    }

    initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) return;

        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!questionBtn || !answer) return;

            questionBtn.addEventListener('click', () => {
                const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
                questionBtn.setAttribute('aria-expanded', String(!isExpanded));
                questionBtn.classList.toggle('faq-open', !isExpanded);
                if (isExpanded) {
                    answer.hidden = true;
                } else {
                    answer.hidden = false;
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Dieses Feld ist erforderlich';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Bitte geben Sie eine gültige Telefonnummer ein';
            }
        }

        // Display error or success
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.showFieldSuccess(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.style.borderColor = '#ef4444';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        
        field.parentNode.appendChild(errorDiv);
    }

    showFieldSuccess(field) {
        this.clearFieldError(field);
        field.style.borderColor = '#10b981';
    }

    clearFieldError(field) {
        field.style.borderColor = '';
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    handleFormSubmission(form, submitBtn) {
        const inputs = form.querySelectorAll('input, textarea');
        let isFormValid = true;

        // Validate all fields
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showFormError('Bitte korrigieren Sie die markierten Felder');
            return;
        }

        // Show loading state
        this.setSubmitButtonLoading(submitBtn, true);

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.handleFormSuccess(form, submitBtn, data);
        }, 2000);
    }

    setSubmitButtonLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = `
                <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-dashoffset="32">
                        <animate attributeName="stroke-dashoffset" dur="1s" values="32;0;32" repeatCount="indefinite"/>
                    </circle>
                </svg>
                Wird gesendet...
            `;
        } else {
            button.disabled = false;
            button.innerHTML = 'Nachricht senden';
        }
    }

    showFormError(message) {
        // Remove existing error
        const existingError = document.querySelector('.form-error');
        if (existingError) existingError.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid #ef4444;
            color: #ef4444;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        `;

        const form = document.querySelector('.contact-form');
        form.insertBefore(errorDiv, form.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    handleFormSuccess(form, submitBtn, data) {
        this.setSubmitButtonLoading(submitBtn, false);

        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.innerHTML = `
            <h3 style="color: #10b981; margin-bottom: 0.5rem;">Nachricht erfolgreich gesendet!</h3>
            <p style="color: #d1d5db; margin: 0;">Vielen Dank für Ihre Nachricht. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        `;
        successDiv.style.cssText = `
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid #10b981;
            color: #10b981;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            text-align: center;
        `;

        form.innerHTML = '';
        form.appendChild(successDiv);

        // Add haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }

        console.log('Form submitted:', data);
    }

    // Gallery Lightbox
    initGalleryLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length === 0) return;

        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay"></div>
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-prev">&larr;</button>
                <button class="lightbox-next">&rarr;</button>
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-caption">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        `;
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(lightbox);

        let currentIndex = 0;
        const images = Array.from(galleryItems);

        // Event listeners
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                this.openLightbox(lightbox, item, images);
            });
        });

        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            this.closeLightbox(lightbox);
        });

        lightbox.querySelector('.lightbox-overlay').addEventListener('click', () => {
            this.closeLightbox(lightbox);
        });

        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            this.updateLightboxImage(lightbox, images[currentIndex]);
        });

        lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
            currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            this.updateLightboxImage(lightbox, images[currentIndex]);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.visibility === 'visible') {
                if (e.key === 'Escape') {
                    this.closeLightbox(lightbox);
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                    this.updateLightboxImage(lightbox, images[currentIndex]);
                } else if (e.key === 'ArrowRight') {
                    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                    this.updateLightboxImage(lightbox, images[currentIndex]);
                }
            }
        });
    }

    openLightbox(lightbox, item, images) {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-overlay h3')?.textContent || '';
        const description = item.querySelector('.gallery-overlay p')?.textContent || '';

        this.updateLightboxImage(lightbox, item);

        lightbox.style.opacity = '1';
        lightbox.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';

        // Add haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    closeLightbox(lightbox) {
        lightbox.style.opacity = '0';
        lightbox.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }

    updateLightboxImage(lightbox, item) {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-overlay h3')?.textContent || '';
        const description = item.querySelector('.gallery-overlay p')?.textContent || '';

        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const lightboxTitle = lightbox.querySelector('.lightbox-caption h3');
        const lightboxDesc = lightbox.querySelector('.lightbox-caption p');

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = description;
    }

    // Performance Optimizations
    initLazyLoading() {
        // Lazy load images
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalImages() {
        // Preload critical images for better performance
        const criticalImages = [
            'assets/logo.png',
            'assets/hero-bg.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    initPerformanceOptimizations() {
        // Optimize animations for mobile
        if (window.matchMedia('(max-width: 768px)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '100ms');
            document.documentElement.style.setProperty('--transition-base', '150ms');
        }

        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '0ms');
            document.documentElement.style.setProperty('--transition-base', '0ms');
            document.documentElement.style.setProperty('--transition-slow', '0ms');
        }
    }

    // Utility Functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}

// Initialize the application when DOM is ready
new CologneBoxingStyle();
