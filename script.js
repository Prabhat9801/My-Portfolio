document.addEventListener("DOMContentLoaded", function() {
    // Select elements to animate
    const headerLogo = document.querySelector(".logo");
    const heroContent = document.querySelector("section.hero .content");
    const heroImage = document.querySelector("section.hero .hero-img img");
    const socialLinks = document.querySelector("section.hero .social-links");
    const navLinks = document.querySelectorAll("header ul li");

    // Function to add 'animate' class when the elements are in the viewport
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }

    // Intersection Observer options
    const options = {
        threshold: 0.5 // Adjust this to control when the animation starts
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(animateOnScroll, options);

    // Observe the elements that should animate
    observer.observe(heroContent);
    observer.observe(heroImage);
    observer.observe(socialLinks);

    // For the header logo, we'll animate it on page load
    window.addEventListener('load', function() {
        headerLogo.classList.add('animate');
    });

    // Animate the nav links one by one
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add("animate");
        }, index * 200); // Delay each link animation for a staggered effect
    });
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Select elements to animate
    const interestCards = document.querySelectorAll(".interest-cards .card");

    // Function to add 'animate' class when the elements are in the viewport
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }

    // Intersection Observer options
    const options = {
        threshold: 0.5 // Adjust this to control when the animation starts
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(animateOnScroll, options);

    // Observe the elements that should animate
    interestCards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", function() {
    // Select the about-content section
    const aboutSection = document.querySelector(".about-content");

    // Function to animate the About section when it comes into view
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animate class
                observer.unobserve(entry.target); // Stop observing after the animation has triggered
            }
        });
    }

    // Intersection Observer options
    const options = {
        threshold: 0.5 // Trigger the animation when 50% of the section is in view
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, options);

    // Observe the about section
    observer.observe(aboutSection);
});
// Function to add animation on scroll for skills section
function animateOnScroll() {
    const skills = document.querySelectorAll('.skill');
    const aboutSection = document.querySelector('.about-content');
    
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillPosition < windowHeight - 100) {
            skill.classList.add('animate');
        }
    });
}

// Event listener for scroll to trigger animation
window.addEventListener('scroll', animateOnScroll);

// Initial trigger to show skills that might already be in view
document.addEventListener('DOMContentLoaded', animateOnScroll);
document.addEventListener("DOMContentLoaded", function() {
    const toolCards = document.querySelectorAll(".tool-cards .card");

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    toolCards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-cards .card");

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    projectCards.forEach(card => observer.observe(card));
});
let currentIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showSlide(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        card.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    testimonialCards[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentIndex);
}

// Auto scroll
setInterval(() => {
    nextSlide();
}, 5000); // Change every 5 seconds
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    var formData = new FormData(this);
    var subject = encodeURIComponent(formData.get('subject'));
    var body = encodeURIComponent(`Name: ${formData.get('name')}\nMessage: ${formData.get('message')}`);

    // Construct the mailto link
    var mailtoLink = `mailto:prabhatkumarsictc7070@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
});

