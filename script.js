document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.news-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = document.querySelector('.news-card').offsetWidth + 20; 
    const inputs = document.querySelectorAll('.form-input');

    nextBtn.addEventListener('click', function() {
        container.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });  
 
    prevBtn.addEventListener('click', function() {
        container.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });  

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('touched');
        });
        
        input.addEventListener('input', function() {
            this.classList.add('touched');
        });
    });
    
    document.getElementById('submitBtn').addEventListener('click', function() {
        const requiredInputs = document.querySelectorAll('.form-input[required]');
        let allValid = true;
        
        requiredInputs.forEach(input => {
            input.classList.add('touched'); 
            if (input.value.trim() === '') {
                input.classList.remove('valid');
                input.classList.add('invalid');
                allValid = false;
            } else {
                input.classList.remove('invalid');
                input.classList.add('valid');
            }
        });
        
        if (allValid) {
            document.getElementById('interviewForm').submit();
        }
    });
});