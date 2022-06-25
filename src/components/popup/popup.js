import Handlebars from 'handlebars';
import popup from './Popup.hbs';
import input from '../input/Input.hbs';
import button from '../button/Button.hbs';

import './style.scss';

const popupData = {
    file: {
        name: 'file',
        label: 'Выбрать файл на компьтере',
        placeholder: '',
        type: 'file',
        value: '',
        id: 'file'
    },
    title: 'Загрузите файл',
    buttonSubmit: {
        className: 'popup__submit',
        id: '',
        value: 'Поменять',
    }
};

Handlebars.registerPartial('popup', popup);
export default () => {
    return popup({
        title: popupData.title,
        input: input(popupData.file),
        button: button(popupData.buttonSubmit),
    });
}