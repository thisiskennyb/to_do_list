

function addToList() {
    //grabs value from user text input
    let userInput = document.querySelector('input').value
   
    //select the ul element from the document
    let list = document.querySelector('ul')
    
    //creating an 'li' element and inserting it into 'ul'
    let createNewItem = document.createElement('li')
    createNewItem.innerHTML = userInput
    list.appendChild(createNewItem)

    //adds class to ul to create a styled flex-container to hold the list items
    list.classList.add('list-container')
    
    //adds a strike through when list item clicked by adding a class to the list item
    createNewItem.addEventListener("click", () => {
        if (!createNewItem.classList.contains('strike-through')) {
            createNewItem.classList.add('strike-through');
            createNewItem.classList.add('empty-check')
        } else {
            createNewItem.classList.remove('strike-through');

        }
    })

    //create an empty check mark circle and insert it into list item
    let checkBox = document.createElement('span')
    checkBox.classList.add("material-symbols-outlined")
    checkBox.innerHTML = "radio_button_unchecked"
    
    //adds functionality to checkbox when clicked will switch from empty to checked
      createNewItem.appendChild(checkBox)
      checkBox.onclick = function() {
        if (checkBox.innerHTML === "radio_button_unchecked") {
            checkBox.innerHTML = "check_circle";
          } else {
            checkBox.innerHTML = "radio_button_unchecked";
          }
       };
    
    //creating a span element with trash image and inserting it into a list item
    let trashBin = document.createElement('span')
    trashBin.classList.add("material-symbols-outlined")
    trashBin.innerHTML = 'delete'
    createNewItem.appendChild(trashBin)
    
    //adds functionality to delete list item after clicking on trash bin
    trashBin.addEventListener('click', () => {
        createNewItem.remove()
    //delete the class list container from 'ul' element once the last list item has been deleted    
        if (list.children.length === 0) {
            list.classList.remove('list-container');
          }
    })

    //clears input after adding user input as a list item
    document.querySelector('input').value = ''
 
    console.log(userInput)
 
}