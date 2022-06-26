import Handlebars from "handlebars";
import signin from './Signin.hbs';
import input from "../../components/input/Input.hbs";
import button from "../../components/button/Button.hbs";
import link from "../../components/link/Link.hbs";

import * as data from './data.json';

Handlebars.registerPartial('signin', signin);

export default () => {
    return signin({
        login: input(data.login),
        password: input(data.password),
        button: button(data.button),
        link: link(data.link),
    })
}
