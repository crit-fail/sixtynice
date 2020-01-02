const elements = document.getElementsByTagName('*');
const elementsArray = Array.from(elements);
elementsArray.forEach(element => {
    element.childNodes.forEach(node => {
        if (node.nodeType === 3 && node.nodeValue.includes('69')) {
            element.innerHTML = node.nodeValue = node.nodeValue.replace('69', '69 <-- Now <strong>That\'s</strong> Nice 😎');
        }
    })
});