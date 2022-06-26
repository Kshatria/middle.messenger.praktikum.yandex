import Handlebars from 'handlebars'
import link from '../../components/link/Link.hbs';
import preview from './Preview.hbs';

import * as data from './data.json';

Handlebars.registerPartial('preview', preview);

export default () => {
    return preview({
        linkSignIn: link(data.linkSignIn),
        linkSignUp: link(data.linkSignUp),
        linkChats: link(data.linkChats),
        linkProfile: link(data.linkProfile),
        linkEditProfile: link(data.linkEditProfile),
        changePassword: link(data.changePassword),
        err404: link(data.err404),
        err500: link(data.err500),
    })
}
