/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';
import {version as packageVersion} from '../../../../../../package.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const version = `v${packageVersion}`;

const entry = {
    get name () {
        return formatMessage({
            id: 'MyFirstExtention.entry.name',
            defaultMessage: 'My First Extension',
            description: 'name of the extension'
        });
    },
    extensionId: 'MyFirstExtention',
    extensionURL: 'https://Nvrxtz8.github.io/my-first-extension/dist/MyFirstExtention.mjs',
    collaborator: 'Nvrxtz8',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return `${formatMessage({
            defaultMessage: 'my first extension for Xcratch',
            description: 'Description for this extension',
            id: 'MyFirstExtention.entry.description'
        })} (${version})`;
    },
    tags: ['function', 'calculation', 'text'],
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://Nvrxtz8.github.io/my-first-extension/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
