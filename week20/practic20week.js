const todo = [
    {name: "задача1", isDone: false},
    {name: "задача2", isDone: true}
];

let resultNode = document.createElement('ul');
for (let item of todo){
    let itemNode = document.createElement('li');
    let textNode = document.createElement('p');
    let checkbox = document.createElement('input');

     textNode.textContent = item.name;
     checkbox.type = "checkbox";
     checkbox.checked = item.isDone;

     itemNode.append(textNode);
     itemNode.append(checkbox);
     resultNode.append(itemNode);
    
}
document.body.append(resultNode);