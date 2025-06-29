document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const buttonText = submitButton?.querySelector('.button-text');
    const buttonSpinner = submitButton?.querySelector('.button-spinner');
    const formMessage = document.getElementById('formMessage');

    if (!form || !submitButton || !buttonText || !buttonSpinner || !formMessage) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const turnstileToken = document.querySelector('[name="cf-turnstile-response"]')?.value;
        if (!turnstileToken) {
            showMessage('Please complete the security verification.', 'error');
            return;
        }

        // @ts-ignore
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        buttonSpinner.style.display = 'inline-flex';

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
            cfTurnstileResponse: turnstileToken,
        };

        try {
            const response = await fetch('https://api.paradaux.io/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                showMessage('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
                if (window.turnstile) window.turnstile.reset();
            } else {
                const errorData = await response.json().catch(() => ({}));
                showMessage(errorData.message || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonSpinner.style.display = 'none';
        }
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});