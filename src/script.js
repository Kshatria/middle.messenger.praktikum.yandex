import preview from './pages/preview/preview';
import signin from './pages/signin/signin';
import signup from './pages/signup/signup';
import error from './pages/error/error';
import profile from './pages/profile/profile';
import editProfile from './pages/editProfile/editProfile';
import changePassword from './pages/changePassword/changePassword';
import chats from './pages/chats/chats';

import popup from './components/popup/popup';

import sriptForCustomFile from './util/file';
import avatarEventHandler from './util/avatar';
import inputValidationHandler from './util/validation';

function insertPage(page) {
    const main = document.querySelector('#app');
    main.insertAdjacentHTML('beforeend', page);
}

function route() {
    switch (window.location.pathname) {
        case '/signin':
            insertPage(signin());

            inputValidationHandler();
            break;
        case '/signup':
            insertPage(signup());

            inputValidationHandler();
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

            sriptForCustomFile();
            avatarEventHandler();
            break;
        case '/editProfile':
            insertPage(editProfile());
            insertPage(popup());

            sriptForCustomFile();
            avatarEventHandler();
            inputValidationHandler();
            break;
        case '/changePassword':
            insertPage(changePassword());
            insertPage(popup());

            sriptForCustomFile();
            avatarEventHandler();
            inputValidationHandler();
            break;
        case '/chats':
            insertPage(chats());
            break;
        default:
            insertPage(preview());
    }
  }

document.addEventListener('DOMContentLoaded', () => route());
