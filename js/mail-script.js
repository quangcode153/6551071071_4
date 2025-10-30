    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
    

    const contactForm = document.getElementById('contactForm');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
 
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', function(event) {
       
        event.preventDefault(); 
        

        let isValid = true; 


        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';


        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name trống.';
            isValid = false;
        }

        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email trống.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {

            emailError.textContent = 'Email không đúng';
            isValid = false;
        }
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject trống.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message trống.';
            isValid = false;
        }

       
        if (isValid) {
            alert('Form đã được gửi thành công!');
            
        } else {
          
            console.log('Form có lỗi, vui lòng kiểm tra lại.');
        }
    });

    function isValidEmail(email) {
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});