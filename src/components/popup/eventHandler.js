import constants from '~/src/constants';

function showPopup () {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'block';

        const overlay = popup.querySelector('.popup__overlay');

        overlay.addEventListener('click', () => {
            popup.classList.remove('active');
            setTimeout(() => {
                popup.style.display = 'none';
            }, constants.POPUP_ANIMATION_DELAY);
        }, {once: true});

        setTimeout(() => {
            popup.classList.add('active');
        }, constants.POPUP_DELAY)
    }
}

export default showPopup;
