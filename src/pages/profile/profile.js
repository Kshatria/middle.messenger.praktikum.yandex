import Handlebars from 'handlebars';
import profile from './Profile.hbs';
import link from '../../components/link/Link.hbs';
import avatar from '../../components/avatar/Avatar.hbs';

import '../../components/avatar/style.scss';
import './style.scss';

const profileData = {
    fields: [
        {
            name: 'Почта',
            value: 'pochta@yandex.ru'
        },
        {
            name: 'Логин',
            value: 'ivanivanov',
        },
        {
            name: 'Имя',
            value: 'Иван',
        },
        {
            name: 'Фамилия',
            value: 'Иванов',
        },
        {
            name: 'Имя в чате',
            value: 'Иванов',
        },
        {
            name: 'Телефон',
            value: '+7 (909) 967 30 30',
        },
    ],
    linkProfile: {
        text: 'Изменить данные',
        href: '/editProfile',
    },
    linkPassword: {
        text: 'Изменить пароль',
        href: '/changePassword',
    },
    signout: {
        text: 'Выйти',
        href: '/signin',
    },
    profileName: {
        name: 'Иван'
    },
    linkReturn: {
        className: 'pageProfile__return',
        text: '',
        href: '/chat'
    }
};

Handlebars.registerPartial('profile', profile);
export default () => {
    return profile({
        linkProfile: link(profileData.linkProfile),
        linkPassword: link(profileData.linkPassword),
        signout: link(profileData.signout),
        avatar: avatar(),
        fields: profileData.fields,
        profileName: profileData.profileName.name,
        linkReturn: link(profileData.linkReturn),
    });
}