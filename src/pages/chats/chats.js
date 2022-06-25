import Handlebars from 'handlebars';
import chats from './Chats.hbs';

import './style.scss';

const Data = {text: 'Этой страницы пока нет. Попробуйте проверить после второго спринта.'}

Handlebars.registerPartial('chats', chats);
export default () => {
    return chats({
        text: Data.text,
    });
}
