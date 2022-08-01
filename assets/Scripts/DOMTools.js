import Component from './Components.js';
export default class DOMTools {
    static parseHTML = (html, fragment = false) => {
        const template = document.createElement("template");
        template.innerHTML = html;
        const node = template.content.cloneNode(true);
        return fragment ? node : node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
    };

    static pushCategory(node, options = {}) {
        return node.appendChild(Component.createCategory(options));
    };
};