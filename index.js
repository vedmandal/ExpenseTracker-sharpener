
const form= document.getElementById(`form`);

const list=document.getElementById(`expenses-list`);

let expenses=JSON.parse(localStorage.getItem(`expenses`)) || [];

function handleSubmit(event){
    event.preventDefault();
    
    const amount= document.getElementById(`amt`).value;
    const description=document.getElementById(`desc`).value;
    const category=document.getElementById(`category`).value;

    expenses.push({amount, description, category});

    localStorage.setItem(`expenses`, JSON.stringify(expenses));
    display();
    document.querySelector(`form`).reset();
}

function display(){
    list.innerHTML=``;

   expenses.forEach((expense, index)=>{
    const li=document.createElement(`li`);
    li.innerHTML=`${expense.amount} - ${expense.description} - ${expense.category} 
    
    <button onclick="editExp(${index})">Edit</button>
            <button onclick="deleteExp(${index})">Delete</button>
    `;
    list.appendChild(li);
   })
  

}


function deleteExp(index){
    expenses.splice(index, 1);
    localStorage.setItem(`expenses`, JSON.stringify(expenses));
    display()
}

function editExp(index){

    const exp=expenses[index];
    document.getElementById(`amt`).value=exp.amount;
    document.getElementById(`desc`).value=exp.description;
    document.getElementById(`category`).value=exp.category;

    expenses.splice(index, 1);
    localStorage.setItem(`expenses`, JSON.stringify(expenses));
    display()
}

display()



