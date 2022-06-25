import Handlebars from "handlebars";
import signin from './Signin.hbs';
import input from "../../components/input/Input.hbs";
import button from "../../components/button/Button.hbs";
import link from "../../components/link/Link.hbs";

import './style.scss'


const signinData = {
    login: {
        name: 'login',
        label: 'Логин',
        placeholder: '',
        type: 'text',
        id: 'login'
    },

    password: {
        name: 'password',
        label: 'Пароль',
        placeholder: '',
        type: 'password',
        id: 'password'
    },

    button: {
        id: 'signinSubmit',
        value: 'Авторизоваться',
        className: 'signup__submit submit'
    },

    link: {
        text: 'Нет аккаунта?',
        href: '/signup',
        className: 'signin__link'
    }
}

Handlebars.registerPartial('signin', signin);

export default () => {
    return signin({
        login: input(signinData.login),
        password: input(signinData.password),
        button: button(signinData.button),
        link: link(signinData.link),
    })
}
