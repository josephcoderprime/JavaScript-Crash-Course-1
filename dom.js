//EXAMINE THE DOCUMENT OBJECT//

//console.log(document.all);
// document.all[10].textContent = 'Hello';

// GET ELEMENT BY ID //

//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//==================================================================

//GET ELEMENTS BY CLASSNAME //
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// tems[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'grey';

//Gives error
// items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'lightgrey';
// }

//==================================================================

//GET ELEMENT BY TAG NAME // Ctrl+K+C

// // let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'grey';

// //Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'lightgrey';
// }

//==================================================================

// QUERY SELECTOR // 
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #cc';

// let input = document.querySelector('input');
// input.value = 'Hello World'

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// let item = document.querySelector('.list-group-item');
// item.style.color = 'blue'

// let secondItem = document.querySelector
//   ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'

