var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        const li = e.target.parentElement;
        
        li.parentNode.removeChild(li);
        
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click' , function(e){
    e.preventDefault();
    console.log('navigation to' , e.target.textContent, "was prevented");
});










// const listItems = document.querySelectorAll('#book-listul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// // prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });
