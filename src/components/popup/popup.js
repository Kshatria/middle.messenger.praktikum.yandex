import Handlebars from 'handlebars';
import popup from './Popup.hbs';
import input from '../input/Input.hbs';
import button from '../button/Button.hbs';

import * as data from './data.json';

Handlebars.registerPartial('popup', popup);
export default () => {
    return popup({
        title: data.title,
        input: input(data.file),
        button: button(data.buttonSubmit),
    });
}