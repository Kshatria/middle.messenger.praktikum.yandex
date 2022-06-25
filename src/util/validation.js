function inputValidationHandler () {
    const fieldGroups = document.querySelectorAll('.field-group');
    const phoneFields = document.querySelectorAll('input[type="tel"]');

    phoneFields.forEach((el) => {
        const prefixNumber = (str) => {
            if (str === "7") {
                return "7 ";
            }
            if (str === "8") {
                return "8 ";
            }
            if (str === "9") {
                return "7 9";
            }
            return "7 ";
        };

        el.addEventListener("input", () => {
            const value = el.value.replace(/\D+/g, "");
            const numberLength = 11;

            let result;
            if (el.value.includes("+8") || el.value[0] === "8") {
                result = "";
            } else {
                result = "+";
            }

            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 0:
                        result += prefixNumber(value[i]);
                        continue;
                    case 4:
                        result += " ";
                        break;
                    case 7:
                        result += " ";
                        break;
                    case 9:
                        result += " ";
                        break;
                    default:
                        break;
                }
                result += value[i];
            }
            el.value = result;
        });
    });

    function createError (errorText) {
        const error = `
            <p class="field-error">${errorText}</p>
        `

        return error;
    }

    function removeError (wrap) {
        const error = wrap.querySelector('.field-error');
        if (error) {
            error.remove();
        }
    }

    function checkFieldStateInput (wrap) {
        const target = event.target;
        target.value.length !== 0 ?target.classList.add('active') : target.classList.remove('active');
        removeError(wrap);
    }
    
    function checkFieldStateChange (wrap) {
        const target = event.target;

        if (target.getAttribute('type') === 'tel') {
            removeError(wrap);
            if (target.value.length === 15 || target.value.length === 16) {
                return
            }

            wrap.insertAdjacentHTML('beforeend', createError('Некорректный телефон'));
       }

        if (target.getAttribute('type') === 'email') {
            removeError(wrap);
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value)) {
                return
            }
            wrap.insertAdjacentHTML('beforeend', createError('Некорректная почта'));
        }
    }

    fieldGroups.forEach((el) => {
        const input = el.querySelector('input:not([type="file"])');
        if (input) {
            input.addEventListener('input', () => checkFieldStateInput(el));
            input.addEventListener('change', () => checkFieldStateChange(el));
        }
    });

    function checkFieldsBeforeSubmit() {
        const passwordFields = document.querySelectorAll('input[type="password"]');
        if (passwordFields.length >= 2) {
            const repeatPassword = passwordFields[passwordFields.length - 1].closest('.field-group');
            removeError(repeatPassword)
            if (passwordFields[passwordFields.length - 1].value !== passwordFields[passwordFields.length - 2].value
                && passwordFields[passwordFields.length - 1].value.length !== 0
                && passwordFields[passwordFields.length - 2].value.length !== 0) {
                    repeatPassword.insertAdjacentHTML('beforeend', createError('Пароли не совпадают'));
                return
            }
        }

        fieldGroups.forEach((el) => {
            const input = el.querySelector('input:not([type="file"])');
            if (input && input.value.length === 0) {
                removeError(el);
                el.insertAdjacentHTML('beforeend', createError('Заполните это поле'));
            }
        })

        const errors = document.querySelectorAll('.field-error');
        if (errors.length !== 0) {
            return
        }

        console.log('submit');
    }

    const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', () => checkFieldsBeforeSubmit());
}

export default inputValidationHandler;
