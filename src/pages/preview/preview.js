import Handlebars from 'handlebars'
import link from '../../components/link/Link.hbs';
import preview from './Preview.hbs';

import './style.scss';


const mainLinksData = {
    linkSignIn: {
        href: '/signin',
        text: 'Страница авторизации',
        className: 'preview__link'
    },
    linkSignUp: {
        href: '/signup',
        text: 'Страница регистрации',
        className: 'preview__link'
    },
    linkChats: {
        href: '/chats',
        text: 'Страница чаты',
        className: 'preview__link'
    },
    linkProfile: {
        href: '/profile',
        text: 'Страница профиля',
        className: 'preview__link'
    },
    linkEditProfile: {
        href: '/editProfile',
        text: 'Страница редактирования профиля',
        className: 'preview__link'
    },
    changePassword: {
        href: '/changePassword',
        text: 'Страница изменения пароля',
        className: 'preview__link'
    },
    err404: {
        href: '/err404',
        text: 'Ошибка 404',
        className: 'preview__link'
    },
    err500: {
        href: '/err500',
        text: 'Ошибка 500',
        className: 'preview__link'
    }
}

Handlebars.registerPartial('preview', preview);

export default () => {
    return preview({
        linkSignIn: link(mainLinksData.linkSignIn),
        linkSignUp: link(mainLinksData.linkSignUp),
        linkChats: link(mainLinksData.linkChats),
        linkProfile: link(mainLinksData.linkProfile),
        linkEditProfile: link(mainLinksData.linkEditProfile),
        changePassword: link(mainLinksData.changePassword),
        err404: link(mainLinksData.err404),
        err500: link(mainLinksData.err500),
    })
}
