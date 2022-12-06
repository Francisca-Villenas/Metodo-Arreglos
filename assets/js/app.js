const btnAdd = document.querySelector("#btnAdd");
const textUser = document.querySelector("#textUser");
const taskList = document.querySelector("#taskList");
const idList = document.querySelector("#idList");
const quantity = document.querySelector("#quantity");
const completed = document.querySelector("#completed");



let listArray = [];

const render = () => {
    taskList.innerHTML = "";
    for(let list of listArray){
        taskList.innerHTML += `
        <li>
        ${list.id} - ${list.name} 
        <button onclick="deleteUser(${list.id})" id="deleteUser">x</button>
        <button onclick="completeUser(${list.id})"id="completeUser">cambiar</button>
        </li>
        `;       
    };
};
render();  

const deleteUser = (id) => {
    listArray = listArray.filter((list) => list.id !== id);
    render();
    quantity.innerHTML = listArray.length;
};


const completeUser = (id) => {
    const arrayMap = listArray.map((list) => {
        if(list.id === id){
            list.estado = !list.estado;
            return list;
        }
        alert("Tarea completada");
    });
    render();
    
    completed.innerHTML = listArray.filter(list => list.estado === true).length;
};


btnAdd.addEventListener("click", () => {
    listArray.push({id: Date.now(), name: textUser.value, quantity: 1, estado: false});
    render();
    textUser.value = "";
    quantity.innerHTML = listArray.length;                       
});




