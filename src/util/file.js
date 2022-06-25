function sriptForCustomFile () {
    const form = document.querySelector('.popup__form');
    const fileInput  = form.querySelector( "input[type='file']" );
    const button = form.querySelector( "input[type='file'] + label" );
    const buttonSubmit = form.querySelector('.popup__submit');
    const formError = form.querySelector('.popup__error');
    const formTitle = form.querySelector('.popup__title');
      
    button.addEventListener( "keydown", function( event ) {  
        if ( event.keyCode == 13 || event.keyCode == 32 ) {  
            fileInput.focus();  
        }  
    });
    button.addEventListener( "click", () => {
        fileInput.focus();
        return false;
    });  
    fileInput.addEventListener( "change", () =>  {
        button.textContent = fileInput.value;
        button.classList.add('active');
        formError.textContent = "";
    });

    function checkFile () {
        if (!fileInput.value) {
            formError.textContent = "Нужно выбрать файл";
        } else {
            formTitle.textContent = "Ошибка, попробуйте ещё раз";
            formTitle.style.color = "#FF2F2F";
        }
    }
    buttonSubmit.addEventListener('click', () => checkFile());
}

export default sriptForCustomFile;
