import Handlebars from 'handlebars';
import profile from './Profile.hbs';
import link from '../../components/link/Link.hbs';
import avatar from '../../components/avatar/Avatar.hbs';

import * as data from './data.json';

Handlebars.registerPartial('profile', profile);
export default () => {
    return profile({
        linkProfile: link(data.linkProfile),
        linkPassword: link(data.linkPassword),
        signout: link(data.signout),
        avatar: avatar(),
        fields: data.fields,
        profileName: data.profileName.name,
        linkReturn: link(data.linkReturn),
    });
}