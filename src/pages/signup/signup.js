import Handlebars from 'handlebars';
import signup from './Signup.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import * as data from './data.json';

Handlebars.registerPartial('signup', signup);

export default () => {
    return signup({
        email: input(data.email),
        login: input(data.login),
        firstName: input(data.firstName),
        lastName: input(data.lastName),
        phone: input(data.phone),
        password: input(data.password),
        passwordRepeat: input(data.passwordRepeat),
        button: button(data.button),
        link: link(data.link),
    });
}