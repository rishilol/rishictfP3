document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-button');
    
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#003d80';
        button.style.transition = 'background-color 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#0056b3';
        button.style.transition = 'background-color 0.3s';
    });

    console.log("Welcome to My Internship Portfolio!");
});
