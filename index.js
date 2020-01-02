let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i]

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let replaced = text.replace('69', 'Nice 😎');

            if (replaced !== text) {
                node.nodeValue = replaced;
            }
        }
    }
}