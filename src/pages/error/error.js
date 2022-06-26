import Handlebars from "handlebars";
import error from './Error.hbs';
import link from "../../components/link/Link.hbs";

import * as data from './data.json';

Handlebars.registerPartial('error', error);

export default (statusError, messageError) => {
    return error({statusError, messageError, link: link(data.link),})
}