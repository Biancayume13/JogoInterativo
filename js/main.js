const urlParams = new URLSearchParams(window, location, seach)
const myParams = urlParams.get('step');
const myName = urlParams.get('none');
const content = documents.getElement("content");

const p = documents.creatElement("p");
p.innerText = myParams
const p2 = documents.creatElement("p");
p2.innerText = myName
content.appendChild(p)
content.appendChild(p2)