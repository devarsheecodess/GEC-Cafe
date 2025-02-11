const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    try{
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if(!email.includes('@')){
            throw new Error('Invalid email');
        }
        
        const data = {
            name: name,
            email: email,
            message: message
        };
        console.log(data);
    }catch(e){
        console.log(e);
    }finally{
        alert('Contact form submitted sucessfully!');
    }
});