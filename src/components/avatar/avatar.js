import Handlebars from 'handlebars';
import avatar from './Avatar.hbs';

Handlebars.registerPartial('avatar', avatar);
export default (src) => {
    return avatar({src});
}