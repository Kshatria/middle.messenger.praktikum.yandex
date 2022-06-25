import Handlebars from 'handlebars';
import signup from './Signup.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import './style.scss';

const signupData = {
    email: {
        name: 'email',
        label: 'Почта',
        placeholder: '',
        type: 'email',
        id: 'email'
    },
    login: {
        name: 'login',
        label: 'Логин',
        placeholder: '',
        type: 'text',
        id: 'login'
    },
    firstName: {
        name: 'firstName',
        label: 'Имя',
        placeholder: '',
        type: 'text',
        id: "firstName"
    },
    lastName: {
        name: 'lastName',
        label: 'Фамилия',
        placeholder: '',
        type: 'text',
        id: "lastName"
    },
    phone: {
        name: 'telephone',
        label: 'Телефон',
        placeholder: '',
        type: 'tel',
        id: 'phone'
    },
    password: {
        name: 'password',
        label: 'Пароль',
        placeholder: '',
        type: 'password',
        id: 'password'
    },
    passwordRepeat: {
        name: 'passwordRepeat',
        label: 'Пароль (еще раз)',
        placeholder: '',
        type: 'password',
        id: 'passwordRepeat'
    },
    button: {
        id: 'signupSubmit',
        value: 'Зарегистрироваться',
        className: 'signup__submit submit'
    },
    link: {
        text: 'Войти',
        href: '/signin',
        className: 'signup__link'
    }
};

Handlebars.registerPartial('signup', signup);

export default () => {
    return signup({
        email: input(signupData.email),
        login: input(signupData.login),
        firstName: input(signupData.firstName),
        lastName: input(signupData.lastName),
        phone: input(signupData.phone),
        password: input(signupData.password),
        passwordRepeat: input(signupData.passwordRepeat),
        button: button(signupData.button),
        link: link(signupData.link),
    });
}