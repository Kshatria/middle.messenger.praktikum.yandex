import Handlebars from "handlebars";
import error from './Error.hbs';
import link from "../../components/link/Link.hbs";

import './style.scss'


const errorData = {
    link: {
        text: 'Назад к чатам',
        href: '/chats',
        className: 'errorPage__link'
    }
}

Handlebars.registerPartial('error', error);

export default (statusError, messageError) => {
    return error({statusError, messageError, link: link(errorData.link),})
}