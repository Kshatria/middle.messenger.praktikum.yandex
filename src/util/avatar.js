function avatarEventHandler () {
    const avatarBtn = document.querySelector('.avatar__btn');
    const popup = document.querySelector('.popup');

    function showPopup () {
        popup.style.display = 'block';

        const overlay = popup.querySelector('.popup__overlay');
        overlay.addEventListener('click', () => hidePopup(), {once: true});

        setTimeout(() => {
            popup.classList.add('active');
        }, 50)
    }

    function hidePopup () {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }

    avatarBtn.addEventListener('click', () => showPopup());
}

export default avatarEventHandler;
