function redirectTo(url) {
    window.open(url, '_blank');
  }

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.custom-button');

    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            button.style.transform = 'scale(1)';
        });
    });
});