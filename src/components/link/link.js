import Handlebars from 'handlebars';
import link from './link.hbs';

Handlebars.registerPartial('link', link);
export default (href, className, text) => {
    return link({href, className, text});
}
