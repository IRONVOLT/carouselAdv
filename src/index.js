const coreBobdy = document.querySelector("body");

const helloworld = 'hello world'
const newNode = document.createElement("p");
newNode.appendChild(helloworld)
coreBobdy.appendChild(newNode)

console.log(coreBobdy)