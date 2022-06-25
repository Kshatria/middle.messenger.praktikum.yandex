import Handlebars from 'handlebars';
import changePassword from './changePassword.hbs';
import avatar from '../../components/avatar/Avatar.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import '../../components/avatar/style.scss';
import './style.scss';

const changePasswordData = {
    oldPass: {
        name: 'oldPass',
        label: 'Старый пароль',
        placeholder: 'Введите старый пароль',
        type: 'password',
        value: '',
        id: 'oldPass'
    },
    newPass: {
        name: 'newPass',
        label: 'Новый пароль',
        placeholder: 'Введите новый пароль',
        type: 'password',
        value: '',
        id: 'newPass'
    },
    repeatPass: {
        name: 'repeatPass',
        label: 'Повторите новый пароль',
        placeholder: 'Введите новый пароль',
        type: 'password',
        value: '',
        id: 'repeatPass'
    },
    buttonSubmit: {
        className: 'changePassword__submit submit',
        id: '',
        value: 'Сохранить',
    },
    linkReturn: {
        className: 'changePassword__return',
        text: '',
        href: '/profile'
    }
};

Handlebars.registerPartial('changePassword', changePassword);
export default () => {
    return changePassword({
        avatar: avatar(),
        oldPass: input(changePasswordData.oldPass),
        newPass: input(changePasswordData.newPass),
        repeatPass: input(changePasswordData.repeatPass),
        buttonSubmit: button(changePasswordData.buttonSubmit),
        linkReturn: link(changePasswordData.linkReturn),
    });
}