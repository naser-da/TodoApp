const add_button = document.querySelector('#add');


add_button.addEventListener('click', function(e){
    var textInput = document.querySelector('#task_input').value.trim();
    var taskList = document.querySelector('#tasks-list');
    
    e.preventDefault();
    if(textInput)
    {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = textItem;

        var doneButton = document.createElement('button');
        doneButton.classList.add('btn');
        doneButton.classList.add('btn-success');
        doneButton.innerHTML = "Done";

        doneButton.addEventListener('click', function(){
            listItem.remove();
        });

        listItem.appendChild(doneButton);
        taskList.appendChild(listItem);
        textInput.value = '';


    }
});