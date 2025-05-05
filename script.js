// Wait muna natin na ma-load lahat ng HTML bago mag-run ng JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // CTA BUTTON - yung malaking button sa hero section
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        // Pag clinick yung button, mag-show ng alert message
        ctaButton.addEventListener('click', function() {
            alert('🌸 Thanks for clicking boss! have a nice day bossing! 🌸');
        });
    }
    
    // LAHAT NG CUTE BUTTONS - kunin lahat ng buttons na may cute classes
    const cuteButtons = document.querySelectorAll('.btn-cute-pink, .btn-cute-purple, .btn-nav');
    
    // Lagyan ng event listener bawat button
    cuteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check kung walang link or # lang yung href
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();  // I-prevent yung default action
                alert('✧˚ ༘ ⋆｡♡˚💐 Button clicked! Ang pogi/ganda mo boss! ✧˚ ༘ ⋆｡♡˚💐');
            }
        });
    });
});