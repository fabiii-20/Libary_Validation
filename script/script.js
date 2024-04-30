
function animateText(element) {
    const text = element.innerText;
    element.innerHTML = ''; 
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animation = `appear ${i * 1}s forwards`; 
        element.appendChild(span);
    }
}


function animateHeadings() {
    const headings = document.querySelectorAll('.animated-heading');
    headings.forEach(function(heading) {
        animateText(heading);
    });
}

animateHeadings();
setInterval(animateHeadings, 10000); 

