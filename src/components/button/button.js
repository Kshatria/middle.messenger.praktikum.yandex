import Handlebars from 'handlebars';
import button from './Button.hbs';

Handlebars.registerPartial('button', button);
export default (id, value, className) => {
    return button({id, value, className})
}
