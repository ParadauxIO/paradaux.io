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
            // Baked in at build time by Vite. Dockerfile takes PUBLIC_API_BASE_URL
            // as a build arg; GHA passes api.dev.paradaux.io on develop and the
            // prod api on main. Fallback to prod is a safety net.
            const apiBase = import.meta.env.PUBLIC_API_BASE_URL || 'https://api.paradaux.io';
            const response = await fetch(`${apiBase}/api/contact`, {
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