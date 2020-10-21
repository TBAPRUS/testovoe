export class Template {
    createNodeLetter(letter) {
        const node = document.createElement('div');
        node.className = 'letter';
        node.innerHTML = letter
        return node;
    }
}
