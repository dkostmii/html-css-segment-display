window.addEventListener('load', () => {
    const inputElements = document.querySelectorAll('input[type="number"]');

    [...inputElements].forEach(el => {
        el.addEventListener('input', () => {
            if (typeof el.value === 'string') {
                el.value = el.value.substring(el.value.length - 1);
            }

            el.setAttribute('value', el.value);
        });
    });
});

