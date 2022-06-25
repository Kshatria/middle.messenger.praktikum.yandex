import Handlebars from 'handlebars';
import input from './Input.hbs';

Handlebars.registerPartial('input', input);
export default (label, placeholder, name, type, value, id) => {
    return input({label, placeholder, name, type, value, id});
}
