(async function () {
    const elements = document.querySelectorAll('[data-copy]');

    elements.forEach( element => {
        try {
            element.addEventListener('click', async function handleClick(event) {
                await navigator.clipboard.writeText(document.querySelector(element.dataset.copy).innerText)
            });
        } catch ( err ) {
            console.error('Failed to copy: ', err);
        }
    });
})();