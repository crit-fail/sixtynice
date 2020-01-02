const elements = document.getElementsByTagName('*');
[...elements].forEach(element => {
    element.childNodes.forEach(node => {
        if (node.nodeType === 3 && node.nodeValue.includes("69")) {
            node.nodeValue = node.nodeValue.replace(
                /69/g,
                "69 ⇦ Now That's Nice 😎"
            );
        }
    })
});