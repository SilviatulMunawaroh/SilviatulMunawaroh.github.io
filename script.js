// Menangani animasi lingkaran
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  
  circles.forEach((circle) => {
    const percentage = circle.getAttribute("data-percentage");
    const radius = circle.r.baseVal?.value || 50; // Assumed value if radius undefined
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });
});
