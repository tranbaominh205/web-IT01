document.getElementById('contactForm2').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    console.log(`Fullname: ${fname}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    
    // Reset form
    document.getElementById('contactForm2').reset();
});





