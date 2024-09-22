import { Alert, Error } from "./Alert";




function validate(form, callback) {
    let errorMsg = [];
    let valid = true;

    function validForm(btn) {
        // Remove and add classes from the button
        btn.classList.remove('formcheck-invalid', 'shake', 'animated');
        btn.classList.add('formcheck-valid');

        // Check if 'tab' attribute is defined and get the corresponding element
        if (btn.hasAttribute('tab')) {
            const tabId = btn.getAttribute('tab');
            const tab = document.getElementById(tabId);

            if (tab) {
                tab.classList.remove('formcheck-invalid', 'shake', 'animated');
                tab.classList.add('formcheck-valid');
            }
        }

        // Check if the button has the 'select2' class
        if (btn.classList.contains('select2')) {
            const span = btn.nextElementSibling;
            if (span && span.tagName.toLowerCase() === 'span') {
                span.classList.remove('formcheck-invalid', 'shake', 'animated');
                span.classList.add('formcheck-valid');
            }
        }
    }
    function invalidForm(btn) {
        // Remove classes from the button
        btn.classList.remove('formcheck-invalid', 'shake', 'animated');
        const msg = btn.getAttribute('validate-error');
        // Error(msg);

        // Add 'formcheck-invalid', 'shake', and 'animated' classes after a delay
        setTimeout(() => {
            btn.classList.add('formcheck-invalid', 'shake', 'animated');
        }, 500);

        // Check if 'tab' attribute is defined and get the corresponding element
        if (btn.hasAttribute('tab')) {
            const tabId = btn.getAttribute('tab');
            const tab = document.getElementById(tabId);

            if (tab) {
                // Remove classes from the tab element
                tab.classList.remove('formcheck-invalid', 'shake', 'animated');
                tab.classList.remove('formcheck-valid');

                // Add 'formcheck-invalid', 'shake', and 'animated' classes after a delay
                setTimeout(() => {
                    tab.classList.add('formcheck-invalid', 'shake', 'animated');
                }, 500);
            }
        }

        // Check if the button has the 'select2' class
        if (btn.classList.contains('select2')) {
            const span = btn.nextElementSibling;
            if (span && span.tagName.toLowerCase() === 'span') {
                span.classList.remove('formcheck-invalid', 'shake', 'animated');
                span.classList.remove('formcheck-valid');
                // Add 'formcheck-invalid', 'shake', and 'animated' classes after a delay
                setTimeout(() => {
                    span.classList.add('formcheck-invalid', 'shake', 'animated');
                }, 500);
            }
        }

        errorMsg.push(msg);
    }

    document.querySelectorAll(`[form="${form}"]`).forEach(function (e) {

        // Check if the element has the 'required' attribute and is not disabled
        if (e.hasAttribute('required') && !e.disabled) {

            const value = e.value.trim();
            if (value === "" || value === null) {
                valid = false;
                invalidForm(e);
            } else {
                // Check number input
                if (e.type === "number") {
                    const min = parseFloat(e.getAttribute('min')) || -Infinity;
                    const max = parseFloat(e.getAttribute('max')) || Infinity;
                    const val = parseFloat(value);

                    if (val < min || val > max) {
                        invalidForm(e);
                        valid = false;
                    } else {
                        validForm(e);
                    }
                } else {
                    validForm(e);
                }
            }
        }
    });

    if (valid && callback != undefined) {
        callback();
    } else {
        console.log(errorMsg.length);
        if (errorMsg.length > 0) {
            // Alert('برجاء إكمال الحقول ! ','e');
            const str = errorMsg.join('<br>');
            Error(str);
        }
        else {
            Alert('حقل إلزامي', 'e');
        }
    }

}

export default validate;