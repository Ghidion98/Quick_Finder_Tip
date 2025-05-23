let cont = document.querySelector('.container');
let noteTaking = document.getElementById('note');
let addButton = document.getElementById('add');
let outcome = document.getElementById('result');
let deleteBtn = document.getElementById('delete');
let clearBtn = document.getElementById('clear');
let list = document.getElementById('list');
        
        // Add a note
      
      function addNote() {
         let note = noteTaking.value.trim();
         if(note === '') {
            alert('Please enter a note');

         }else {
            let li = document.createElement('li');
            li.textContent = note;
            list.appendChild(li);
            noteTaking.value = '';
         }

      }
           // Delete last note

      function deleteLastNote() {
         if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
         }
         noteTaking.value = '';
      }
        
      // Clear all notes

      function clearAllNotes() {
         list.innerHTML = '';
         noteTaking.value = '';
      }



// Event Listeners for buttons

addButton.addEventListener('click', addNote);
deleteBtn.addEventListener('click', deleteLastNote);
clearBtn.addEventListener('click', clearAllNotes);

