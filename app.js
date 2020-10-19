// var h2 = document.querySelector('#book-list h2')
// h2.addEventListener('click',function(e){
//     console.log(e.target);
//     console.log(e);
// })

// Event 
// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });
// });

const link = document.querySelector('#page-banner a');
link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('Navigation to',e.target.textContent,'was prevented');
});

///Event Bubling efficient way...

const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});