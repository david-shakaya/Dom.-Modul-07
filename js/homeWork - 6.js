const validInputRef = document.querySelector('#validation-input');

validInputRef.addEventListener('change', (event) =>{
    
    // Длинна введеного значения в инпут === значению атрибута data-length="6"
                // Еще один способо найти дата атрибут +validInputRef.dataset.length
    if (event.target.value.length === +validInputRef.getAttribute('data-length')) {
       validInputRef.classList= 'valid'
    }
    else {
          validInputRef.classList= 'invalid'
    }
});