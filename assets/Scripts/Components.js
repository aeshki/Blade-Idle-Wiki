import DOMTools from './DOMTools.js';
export default class Component {
    static createCategory = (options = {}) => {
        const {
            header = {
                name: '??',
                iconPath: null
            },
            id = null,
            description = '??',
            content = []
        } = options;
    
        return DOMTools.parseHTML(`<div class="category" ${id ? `id="${id}"` : ''}><div class="header"><span class="textWhite sizeVeryBig">${header.name}</span>${header.iconPath ? `<img class="icon" src="./assets/Textures/${header.iconPath}">` : ''}</div><div class="content"><p class="textSoftGray sizeSmall">${description}</p><ul>${content.map(m=>`<li><a id="${m.id}" class="buttonStyle ${m.iconPath ? 'buttonImg' : ''} ${m.color ? `color${m.color}` : 'colorGray'}">${m.iconPath ? `<img width="32" src='./assets/Textures/${m.iconPath}'>` : ''}<span>${m.name ? m.name : '??'}</span></a></li>`).join('')}</ul></div>`);
    };
};