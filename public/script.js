const not_Completed_Bar = document.getElementById('not_Completed_Bar')
const addTaskBtn = document.getElementById('addTask')
const messageTxt=document.createElement('h4')
messageTxt.textContent=`
        ToDo List Empty!
        Please Click the Add New Task To Create A Task.
    `
let taskTxt=""
not_Completed_Bar.append(messageTxt)

// Render Search component To The DOM, get user input and remove search component
addTask.addEventListener('click',()=>{
    if(messageTxt){
        messageTxt.remove()
    }
    const task_Input_Section=`
        <div class="task_Input text-center md:text-left">
            <label class="txt" for="newTask">Enter Task</label>
            <div class="">
            <input type="text" class="input_bar" name="newTask" id="newTask"></input>
            <bottom class="btn" id="submitTask">Add</bottom>
            </div>
        </div>
    `
    not_Completed_Bar.insertAdjacentHTML("afterbegin",task_Input_Section)
    // Getting input value and passing it to our render function
    const submitTaskBtn=document.getElementById('submitTask')
    submitTaskBtn.addEventListener('click',()=>{
        const newTask=document.querySelector('.task_Input input').value
        if(newTask===""){
            alert("empty")
        }
        else{
            taskTxt=newTask
            render(taskTxt)
            submitTaskBtn.parentNode.parentNode.remove()
        }
    })
})

// Render Task To DOM
function render(taskTxt){
    const notCompleteTxt = document.querySelector('.not_Completed_Bar h3')
    const task=`
        <div class="shadow-sm grid p-2">
            <div class="box shadow-md p-2 rounded-sm">
                <div class="flex gap-1">
                    <input  type="checkbox"></input>
                    <p>${taskTxt}</p>
                 </div>
                <div>
                    <span class="material-symbols-outlined">delete</span>
                    <span class="material-symbols-outlined">edit</span>
                </div>
            </div>
        </div>
    `
    notCompleteTxt.insertAdjacentHTML("beforeend",task)
}
