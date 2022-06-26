import Handlebars from 'handlebars';
import editProfile from './EditProfile.hbs';
import avatar from '../../components/avatar/Avatar.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import * as data from './data.json';

Handlebars.registerPartial('editProfile', editProfile);
export default () => {
    return editProfile({
        avatar: avatar(),
        email: input(data.email),
        login: input(data.login),
        firstName: input(data.firstName),
        lastName: input(data.lastName),
        nik: input(data.nik),
        phone: input(data.phone),
        buttonSubmit: button(data.buttonSubmit),
        linkReturn: link(data.linkReturn),
    });
}