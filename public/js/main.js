(() => {
    /*
     * Ripple effect
     */
    // Waves.attach('.button', ['waves-button', 'waves-float']);
    // Waves.attach('.button', ['waves-button', 'waves-float']);
    Waves.attach('.btn', ['waves-button', 'waves-light']);
    Waves.init();

    document.querySelector('.hamburger').addEventListener(
        'click',
        function() {
            this.classList.toggle('is-active');
        },
        false
    );

    console.log('test 1');
})();
