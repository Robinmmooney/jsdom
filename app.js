const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.terget.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
   e.preventDefault() ;
   const value = addForm.querySelector('input[type="text"]').value;
   console.log(value);
});













// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

// const forms = document.forms;
// console.log(forms);
// console.log(forms['add-book']);

// Array.from(forms).forEach(function(form){
//   console.log(form);
// });

// const addForm = forms['add-book'];
// addForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   const value = addForm.querySelector('input[type="text"]').value;
//   console.log(value);
// });
