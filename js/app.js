var listItems = document.getElementsByClassName("delete");

function deleteTask(){
    console.log(this);
    var listItem = this.parentNode;
    var ulItem = listItem.parentNode;
    ulItem.removeChild(listItem);
}

for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", deleteTask);
}

