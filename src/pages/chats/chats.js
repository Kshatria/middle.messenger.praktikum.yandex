import Handlebars from 'handlebars';
import chats from './Chats.hbs';

import * as data from './data.json';

Handlebars.registerPartial('chats', chats);
export default () => {
    return chats({
        text: data.text,
    });
}
