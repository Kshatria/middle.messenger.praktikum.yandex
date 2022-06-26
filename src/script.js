import preview from './pages/preview/preview';
import signin from './pages/signin/signin';
import signup from './pages/signup/signup';
import error from './pages/error/error';
import profile from './pages/profile/profile';
import editProfile from './pages/editProfile/editProfile';
import changePassword from './pages/changePassword/changePassword';
import chats from './pages/chats/chats';

import popup from './components/popup/popup';
import showPopup from './components/popup/eventHandler';

import sriptForCustomFile from './util/file';

function insertPage(page) {
    const main = document.querySelector('#app');
    if (main) {
        main.insertAdjacentHTML('beforeend', page);
    }
}

function route() {
    switch (window.location.pathname) {
        case '/signin':
            insertPage(signin());
            break;
        case '/signup':
            insertPage(signup());
            break;
        case '/err404':
            insertPage(error('404', 'Не туда попали'));
            break;
        case '/err500':
            insertPage(error('500', 'Мы уже фиксим'));
            break;
        case '/profile':
            insertPage(profile());
            insertPage(popup());
            break;
        case '/editProfile':
            insertPage(editProfile());
            insertPage(popup());
            break;
        case '/changePassword':
            insertPage(changePassword());
            insertPage(popup());
            break;
        case '/chats':
            insertPage(chats());
            break;
        default:
            insertPage(preview());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    route();

    const avatarBtn = document.querySelector('.avatar__btn');
    if (avatarBtn) {
        avatarBtn.addEventListener('click', () => showPopup());
        sriptForCustomFile();
    }
});
