'use strict';

// Select the button element by its class and download cv
document.querySelector('.download-cv').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = './assets/Resume/Shibam_Jha_resume_junior-engineer.pdf'; 
    a.download = 'Shibam_Jha_resume_junior-engineer.pdf';     
    a.click();                     
});


//variables for navbar toggle
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('nav');
const menuLinkBtn = document.querySelectorAll('.nav-link');

//navbar toggle function
const menuToggle = () => menu.classList.toggle('active');

//addEventListner on close and open button
menuOpenBtn.addEventListener('click', menuToggle);
menuCloseBtn.addEventListener('click',menuToggle);

//addEventListener on all navLink
for( let i =0; i<menuLinkBtn.length; i++){
    menuLinkBtn[i].addEventListener('click',menuToggle);
}

//variables for tab navigation
const tabButtons = document.querySelectorAll('.tab-button'); // Use querySelectorAll to get all buttons
const tabContent = document.querySelectorAll('.tab-content'); // Use querySelectorAll to get all contents

//tab navigation functionality
for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
        // Remove 'active' class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContent.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked button and the corresponding content
        this.classList.add('active');
        tabContent[i].classList.add('active'); // Assuming tabContent corresponds by index
    });
}

// Variables for portfolio carousel
const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

// Create initial value for transform
const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

// Carousel function
const carouselFunc = function (countParam) {
    if (countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;
    if (countParam <= 0) portfoCount = 0;
    portfolioCarouselInner.style.transform = `translateX(-${(100 / totalPortfoCard) * portfoCount}%)`;
};

// Add Event Listener on Carousel Next Button
portfolioCarouselNext.addEventListener('click', function () {
    portfoCount++;
    carouselFunc(portfoCount);
});

// Add Event Listener on Carousel Previous Button
portfolioCarouselPrev.addEventListener('click', function () {
    portfoCount--;
    carouselFunc(portfoCount);
});


