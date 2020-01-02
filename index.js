const elements = document.querySelectorAll("*:not(style)");
[...elements].forEach(element => {
  element.childNodes.forEach(node => {
    if (node.nodeType === 3 && node.nodeValue.includes("69")) {
      node.nodeValue = node.nodeValue.replace(
        /\b69/g,
        "69 ⇦ Now That's Nice 😎"
      );
    }
  });
});
