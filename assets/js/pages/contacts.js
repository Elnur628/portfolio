document.querySelector('.checkOutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const textarea = document.getElementById('info').value.trim();

    // Remove previous error messages and reset field styles
    document.querySelectorAll('.errorMsg').forEach(error => error.remove());
    document.querySelectorAll('input, select, textarea').forEach(field => field.style.border = '');

    if (!firstName) addErrorMsg('fname', 'First name is required');
    if (!lastName) addErrorMsg('lname', 'Last name is required');
    if (!validateEmail(email)) addErrorMsg('email', 'Valid email is required');
    if (!phone || isNaN(phone)) addErrorMsg('phone', 'Valid phone number is required');
    if (!service) addErrorMsg('service', 'Please select a service');
    if (!textarea) addErrorMsg('info', 'Write detailed information about what you want');

    isValid = document.querySelectorAll('.errorMsg').length === 0;

    if (isValid) {
        // Save form data to localStorage
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            service: service,
            textarea: textarea
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Your order has been placed successfully');

        // Optionally clear the form after submission
        document.querySelector('.checkOutForm').reset();
    }
});

function addErrorMsg(fieldId, msg) {
    const inputField = document.getElementById(fieldId);
    const errorMsg = document.createElement('span');
    errorMsg.className = 'errorMsg';
    errorMsg.textContent = msg;
    inputField.style.border = '1px solid red';
    inputField.parentElement.appendChild(errorMsg);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Populate form with saved data on page load
window.addEventListener('load', function () {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        document.getElementById('fname').value = savedFormData.firstName || '';
        document.getElementById('lname').value = savedFormData.lastName || '';
        document.getElementById('email').value = savedFormData.email || '';
        document.getElementById('phone').value = savedFormData.phone || '';
        document.getElementById('service').value = savedFormData.service || '';
        document.getElementById('info').value = savedFormData.textarea || '';
    }
});



var swiper = new Swiper(".mySwiper", {
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            });