document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    initMobileSliders();
    initScrollAnimations();
});

function initSliders() {
    const sliders = document.querySelectorAll('.slider-image');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const dots = slider.querySelectorAll('.slider-dot');
        let currentIndex = 0;
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });
        
        function updateSlider(index) {
            currentIndex = index;
            container.style.transform = `translateX(-${index * 33.333}%)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateSlider(currentIndex);
        }, 3000);
    });
}

function initScrollAnimations() {
    const projects = document.querySelectorAll('.silakbay-project, .clone-project, .travel-tour-project');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    projects.forEach(project => {
        if (isInViewport(project)) {
            project.classList.add('visible');
        }
    });
    
    window.addEventListener('scroll', () => {
        projects.forEach(project => {
            if (isInViewport(project)) {
                project.classList.add('visible');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    
    initScrollAnimations();
    
    initExploreMore();
});

function initSliders() {
    const sliders = document.querySelectorAll('.slider-image');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const dots = slider.querySelectorAll('.slider-dot');
        let currentIndex = 0;
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });
        
        function updateSlider(index) {
            currentIndex = index;
            container.style.transform = `translateX(-${index * 33.333}%)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateSlider(currentIndex);
        }, 3000);
    });
}


function initScrollAnimations() {
    const projects = document.querySelectorAll('.silakbay-project, .clone-project, .travel-tour-project, .CarElderly-mobile-project, .Tripnest-mobile-project');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    projects.forEach(project => {
        if (isInViewport(project)) {
            project.classList.add('visible');
        }
    });
    
    window.addEventListener('scroll', () => {
        projects.forEach(project => {
            if (isInViewport(project)) {
                project.classList.add('visible');
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    function initMobileSlider(projectClass, slideCount) {
        const project = document.querySelector(`.${projectClass}`);
        if (!project) return;

        const sliderContainer = project.querySelector(".slider-container");
        const slides = project.querySelectorAll(".slide");
        const sliderNav = project.querySelector(".slider-nav");
        let currentIndex = 0;

        // Set dynamic width for container
        sliderContainer.style.width = `${slideCount * 100}%`;

        // Set each slide's width dynamically
        slides.forEach(slide => {
            slide.style.width = `${100 / slideCount}%`;
        });

        // Create navigation dots
        for (let i = 0; i < slideCount; i++) {
            let dot = document.createElement("span");
            dot.classList.add("slider-dot");
            if (i === 0) dot.classList.add("active"); // First dot is active
            dot.addEventListener("click", () => goToSlide(i));
            sliderNav.appendChild(dot);
        }

        const dots = sliderNav.querySelectorAll(".slider-dot");

        // Auto-slide function
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }

        // Manual slide navigation
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function updateSlider() {
            sliderContainer.style.transform = `translateX(-${currentIndex * (100 / slideCount)}%)`;

            // Update active dot
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
        }

        // Auto-slide every 3 seconds
        setInterval(nextSlide, 3000);
    }

    // Initialize sliders
    initMobileSlider("CarElderly-mobile-project", 7); // 7 slides
    initMobileSlider("Tripnest-mobile-project", 4); // 4 slides
});


