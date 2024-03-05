// Get the title element
var title = document.getElementById('title');

// Add mousemove event listener
document.addEventListener('mousemove', function(event) {
    // Calculate rotation based on mouse position
    var rotationX = -(event.clientY / window.innerHeight - 0.5) * 30; // Increased rotationX value
    var rotationY = (event.clientX / window.innerWidth - 0.5) * 30; // Increased rotationY value

    // Apply rotation to the title element
    title.style.transform = 'rotateX(' + rotationX + 'deg) rotateY(' + rotationY + 'deg)';
});