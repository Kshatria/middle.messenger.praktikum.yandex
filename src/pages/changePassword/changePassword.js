import Handlebars from 'handlebars';
import changePassword from './ChangePassword.hbs';
import avatar from '../../components/avatar/Avatar.hbs';
import input from '../../components/input/Input.hbs';
import button from '../../components/button/Button.hbs';
import link from '../../components/link/Link.hbs';

import * as data from './data.json';

Handlebars.registerPartial('changePassword', changePassword);
export default () => {
    return changePassword({
        avatar: avatar(),
        oldPass: input(data.oldPass),
        newPass: input(data.newPass),
        repeatPass: input(data.repeatPass),
        buttonSubmit: button(data.buttonSubmit),
        linkReturn: link(data.linkReturn),
    });
}