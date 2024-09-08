function showContent(index) {
    var tabs = document.getElementsByClassName('tab');
    var contents = document.getElementsByClassName('content');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        contents[i].classList.remove('active');
    }

    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.querySelector('#firstName').value;
    const lname = document.querySelector('#lastName').value;
    const email = document.querySelector('#parentEmail').value;
    const phone = document.querySelector('#parentPhoneNumber').value;

    console.log(`FirstName: ${fname}`);
    console.log(`LastName: ${lname}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    alert(`Chúng tôi sẽ gửi thông báo sớm đến email: ${email}`);
    
    // Reset form
    document.querySelector('#contactForm').reset();
});