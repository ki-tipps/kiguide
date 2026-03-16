// Newsletter fix - prevent form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert('Danke für deine Anmeldung! 🎉\nWir melden uns bei ' + email);
                form.querySelector('input[type="email"]').value = '';
            }
        });
    }
});
