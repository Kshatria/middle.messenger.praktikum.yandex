import Handlebars from 'handlebars';
import editProfile from './EditProfile.hbs';
import avatar from '../../components/avatar/Avatar.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import '../../components/avatar/style.scss';
import './style.scss';

const editProfileData = {
    email: {
        name: 'email',
        label: 'Почта',
        placeholder: 'Введите почту',
        type: 'email',
        value: 'pochta@yandex.ru',
        id: 'email'
    },
    login: {
        name: 'login',
        label: 'Логин',
        placeholder: 'Введите Логин',
        type: 'text',
        value: 'ivanivanov',
        id: 'login'
    },
    firstName: {
        name: 'first_name',
        label: 'Имя',
        placeholder: 'Введите имя',
        type: 'text',
        value: 'Иван',
        id: 'firstName'
    },
    lastName: {
        name: 'last_name',
        label: 'Фамилия',
        placeholder: 'Введите фамилию',
        type: 'text',
        value: 'Иванов',
        id: 'lastName'
    },
    nik: {
        name: 'nik',
        label: 'Имя в чате',
        placeholder: 'Введите имя в чате',
        type: 'text',
        value: 'Иван',
        id: 'nik'
    },
    phone: {
        name: 'phone',
        label: 'Телефон',
        placeholder: 'Введите телефон',
        type: 'tel',
        value: '+7 (909) 967 30 30',
        id: 'phone'
    },
    buttonSubmit: {
        className: 'editProfile__submit submit',
        id: '',
        value: 'Сохранить',
    },
    linkReturn: {
        className: 'editProfile__return',
        text: '',
        href: '/profile'
    }
};

Handlebars.registerPartial('editProfile', editProfile);
export default () => {
    return editProfile({
        avatar: avatar(),
        email: input(editProfileData.email),
        login: input(editProfileData.login),
        firstName: input(editProfileData.firstName),
        lastName: input(editProfileData.lastName),
        nik: input(editProfileData.nik),
        phone: input(editProfileData.phone),
        buttonSubmit: button(editProfileData.buttonSubmit),
        linkReturn: link(editProfileData.linkReturn),
    });
}