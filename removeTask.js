async function deleteTask(btnDeleteElement){
    let id = btnDeleteElement.parentNode.parentNode.getAttribute('data-task-id');
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
    })
    tasks.find((task) => Number(task.id).toString() ===id).deleted = true;

    //confirm('Are you sureyou want to delete this task? ')
    if (confirm('Are you sure you want to delete this task? ')==true) {displayTasks()}
    else {return};



    //prompt('are you sure you want to delete this task?')
     


}